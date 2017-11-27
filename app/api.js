// 
const express = require('express');
const bodyParser = require('body-parser');
const config  = require('./config');
const Ctrl = require('./controller')

const setupRouter = function () {
    const bodyParserEncoder = bodyParser.urlencoded({
        extended: false
    });
    const router = express.Router();
    const CtrlUser = new Ctrl.UserController();
    
    //Oauth2
    router.get('/getallusers', (req, res) => {  
        res.json(CtrlUser.getallusers()); 
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