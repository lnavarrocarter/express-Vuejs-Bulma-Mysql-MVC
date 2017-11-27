// 
const express = require('express');
const config = require('./config');
const Router = require('./router');
const cluster = require('cluster');
const mysql = require('mysql');
const os = require('os');

let app = express();

Router.init(app, config);

if (cluster.isMaster && config.env !== 'development') {
    let workers = [];
    for (var i = 0; i < os.cpus().length; i++) {
        workers[i] = cluster.fork();
        workers[i].on('exit', (code, signal) => {
            if (signal) {
                console.error(`worker was killed by signal: ${signal}`);
            } else if (code !== 0) {
                console.error(`worker exited with error code: ${code}`);
            } else {
                console.error('worker exited');
            }
        });
    }
} else {
    //Verificar conexion a la base de datos.
    const connection = mysql.createConnection({
        host     : config.host,
        user     : config.user,
        password : config.pass,
        database : config.database
    })
    connection.connect((err) => {
        if(!err){
            console.warn(`Mysql connect ${config.host} worked server listener database ${config.database}`);
        }else{
            console.warn(`Mysql ERROR connect ${config.host} don't worked server listener database ${config.database}`)
        }
    })
    app.listen(config.port, () => {
        console.warn(`Worker ${process.pid} running a ${config.env} server listening on port ${config.port}`);
    });
}