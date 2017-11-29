const Services = require('./../services');

class UserController{
    constructor(){
        this.mysql = new Services.Database();
        this.table = 'users';
    }
    /**
     * Get all user this database
     */
    getallusers(){
        return this.mysql.read(this.table).then((r) => {
            return r;
        });
    }
}

module.exports = UserController; 