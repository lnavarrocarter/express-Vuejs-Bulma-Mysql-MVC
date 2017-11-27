const Utils = require('./../utils');


class UserController{
    constructor(){
        this.mysql = new Utils.Database();
        this.table = 'users';
    }
    /**
     * Get all user this database
     */
    getallusers(){
        return this.mysql.read(this.table);
    }
}

module.exports = UserController; 