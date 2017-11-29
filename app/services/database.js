import config from './../config';
const each = require('foreach');
const mysql = require('mysql');
const stringify = require('json-stringify-safe');

class Database {
    constructor(){
        this.connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.pass,
            database : config.database
        })
        this.connection.connect((err) => {
            if(!err){
                console.warn(`Mysql connect ${config.host} worked server listener database ${config.database}`);
            }else{
                console.warn(`Mysql ERROR connect ${config.host} don't worked server listener database ${config.database}`)
            }
        });
    }  

    create(table = null, data = null){

    }

    read(table = null,where = null,select = null,join = null){
        let query = "";
        let response;
        if(select){
            query = select;
        }else{
            query += 'SELECT *'
        }
		if(table){
			query += " FROM " + table + " ";
		}
		
		if(join){
			each(join,(campojoin,tablajoin,objeto) => {
				query += "INNER JOIN " + tablajoin + " ON " + table + "." + campojoin + "=" + tablajoin + "." + campojoin + " ";	
			})
		}
		if(where){
			let count = 0;
			query += " WHERE "
			each(where,(valor,campo,objeto) => {
				query += campo + valor + " ";
				count++;
				if(Object.size(where) > count){
					query += "AND "
				}
			})	
        }
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, result, field) => {
                if(!err){
                    response = { 'code' : 200,'msg' : 'Consulta realizada con exito a la base de datos!' ,'data' :result };
                }else{
                    response = { 'err' : 400,'msg' : 'Error al consultar a la base de datos:' + err ,'data' :result };
                }
                resolve(response);
            })
        }).catch((error) => {
            reject({'err' : 500, 'msg' : 'error al realizar la consulta : ' + error, 'data' :result});
        });
        //return response;
        
    }

    update(table = null,where = null,data = null){

    }

    delete(table = null, where = null){

    }


}

module.exports = Database;