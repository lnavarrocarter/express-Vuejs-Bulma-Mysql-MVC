// 
const path = require('path');

class Config {
    constructor() {
        this.env = process.env.NODE_ENV || 'development';
        this.root = path.normalize(__dirname + '/..');
        this.rootPath = process.env.ROOT_PATH || '/';
        this.app = {
            name: 'Express-Vue-Bulma-Mysql-MVC-Starter'
        };
        this.port = parseInt(process.env.PORT) || 9000;
        //config DB Mysql
        this.host = 'localhost';
        this.user = 'root';
        this.pass = '';
        this.database = 'auth';
    }
}
module.exports = Config;