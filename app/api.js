// 
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const config  = require('./config');

const setupRouter = function () {
    const bodyParserEncoder = bodyParser.urlencoded({
        extended: false
    });
    const router = express.Router();
    const connection = mysql.createConnection({
        host     : config.host,
        user     : config.user,
        password : config.pass,
        database : config.database
    })
    connection.connect();

    //Oauth2
    router.get('/get_users', (req, res) => {
        let sql = 'SELECT * FROM users';
        connection.query(sql,(error, results, fields) => {
            if(error){
                res.json({
                    code: 500,
                    status : 'danger',
                    msg : 'error : ' + error,
                    data : results
                }); 
            }else{
                res.json({
                    code: 200,
                    status : 'success',
                    msg : error,
                    data : results
                }); 
            }
        })
    });

    router.post('/postexample', bodyParserEncoder, (req, res) => {
        res.json({
            body: req.body
        });
    });

    return router;
};

module.exports.init = setupRouter;
exports.default = setupRouter;