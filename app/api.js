// 
const express = require('express');
const bodyParser = require('body-parser');
const Ctrl = require('./controller');

const setupRouter = function () {
    const bodyParserEncoder = bodyParser.urlencoded({
        extended: false
    });
    const router = express.Router();
    const CtrlUser = new Ctrl.UserController();

    //API
    router.get('/', (req, res) => {  
        res.json({
            body : 'Esta es la API de aprovicionamiento para el uso de la plataforma con mysql'
        }); 
    });

    router.get('/getallusers', (req, res) => {          
        CtrlUser.getallusers().then((response) => {
            res.json(response);
        });
         
    });

    return router;
};

module.exports.init = setupRouter;
exports.default = setupRouter;