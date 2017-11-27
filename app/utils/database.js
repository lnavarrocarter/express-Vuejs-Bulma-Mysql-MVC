import config from './../config';
const each = require('foreach');
const mysql = require('mysql');

class Database {
    constructor(){
        this.connection = mysql.createConnection({
            host     : config.host,
            user     : config.user,
            password : config.pass,
            database : config.database
        })
        this.connection.connect();
    }  

    create(table = null, data = null){

    }

    read(table = null,where = null,select = null,join = null){
        let query = "";
        let result = {};
        if(select){
            query = select;
        }else{
            query += 'SELECT *'
        }
		if(table){
			query += " FROM " + table + " ";
		}
		
		if(join){
			each(join,function(campojoin,tablajoin,objeto){
				query += "INNER JOIN " + tablajoin + " ON " + table + "." + campojoin + "=" + tablajoin + "." + campojoin + " ";	
			})
		}
		if(where){
			let count = 0;
			query += " WHERE "
			each(where,function(valor,campo,objeto){
				query += campo + valor + " ";
				count++;
				if(Object.size(where) > count){
					query += "AND "
				}
			})	
		}
		return this.connection.query(query, function(err, result, field){
			if(!err){	
                result.error = false;
				result.data  = result;
				result.msg   = "Consulta realizada correctamente."
			}else{
				console.log(err);
                result.error          = true
                result.menssage_error = err;
				result.data           = result;
				result.msg            = "Error al traer los datos: " + err
            }
            return JSON.stringify(result);
		})
    }

    update(table = null,where = null,data = null){

    }

    delete(table = null, where = null){

    }


}

module.exports = Database;