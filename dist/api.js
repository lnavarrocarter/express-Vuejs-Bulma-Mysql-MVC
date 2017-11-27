'use strict';

// 
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var config = require('./config');

var setupRouter = function setupRouter() {
    var bodyParserEncoder = bodyParser.urlencoded({
        extended: false
    });
    var router = express.Router();
    var connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.pass,
        database: config.database
    });
    connection.connect();

    //Oauth2
    router.get('/get_users', function (req, res) {
        var sql = 'SELECT * FROM users';
        connection.query(sql, function (error, results, fields) {
            if (error) {
                res.json({
                    code: 500,
                    status: 'danger',
                    msg: 'error : ' + error,
                    data: results
                });
            } else {
                res.json({
                    code: 200,
                    status: 'success',
                    msg: error,
                    data: results
                });
            }
        });
    });

    router.post('/postexample', bodyParserEncoder, function (req, res) {
        res.json({
            body: req.body
        });
    });

    return router;
};

module.exports.init = setupRouter;
exports.default = setupRouter;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImJvZHlQYXJzZXIiLCJteXNxbCIsImNvbmZpZyIsInNldHVwUm91dGVyIiwiYm9keVBhcnNlckVuY29kZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJwYXNzIiwiZGF0YWJhc2UiLCJjb25uZWN0IiwiZ2V0IiwicmVxIiwicmVzIiwic3FsIiwicXVlcnkiLCJlcnJvciIsInJlc3VsdHMiLCJmaWVsZHMiLCJqc29uIiwiY29kZSIsInN0YXR1cyIsIm1zZyIsImRhdGEiLCJwb3N0IiwiYm9keSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbml0IiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLGFBQWFELFFBQVEsYUFBUixDQUFuQjtBQUNBLElBQU1FLFFBQVFGLFFBQVEsT0FBUixDQUFkO0FBQ0EsSUFBTUcsU0FBVUgsUUFBUSxVQUFSLENBQWhCOztBQUVBLElBQU1JLGNBQWMsU0FBZEEsV0FBYyxHQUFZO0FBQzVCLFFBQU1DLG9CQUFvQkosV0FBV0ssVUFBWCxDQUFzQjtBQUM1Q0Msa0JBQVU7QUFEa0MsS0FBdEIsQ0FBMUI7QUFHQSxRQUFNQyxTQUFTVCxRQUFRVSxNQUFSLEVBQWY7QUFDQSxRQUFNQyxhQUFhUixNQUFNUyxnQkFBTixDQUF1QjtBQUN0Q0MsY0FBV1QsT0FBT1MsSUFEb0I7QUFFdENDLGNBQVdWLE9BQU9VLElBRm9CO0FBR3RDQyxrQkFBV1gsT0FBT1ksSUFIb0I7QUFJdENDLGtCQUFXYixPQUFPYTtBQUpvQixLQUF2QixDQUFuQjtBQU1BTixlQUFXTyxPQUFYOztBQUVBO0FBQ0FULFdBQU9VLEdBQVAsQ0FBVyxZQUFYLEVBQXlCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ25DLFlBQUlDLE1BQU0scUJBQVY7QUFDQVgsbUJBQVdZLEtBQVgsQ0FBaUJELEdBQWpCLEVBQXFCLFVBQUNFLEtBQUQsRUFBUUMsT0FBUixFQUFpQkMsTUFBakIsRUFBNEI7QUFDN0MsZ0JBQUdGLEtBQUgsRUFBUztBQUNMSCxvQkFBSU0sSUFBSixDQUFTO0FBQ0xDLDBCQUFNLEdBREQ7QUFFTEMsNEJBQVMsUUFGSjtBQUdMQyx5QkFBTSxhQUFhTixLQUhkO0FBSUxPLDBCQUFPTjtBQUpGLGlCQUFUO0FBTUgsYUFQRCxNQU9LO0FBQ0RKLG9CQUFJTSxJQUFKLENBQVM7QUFDTEMsMEJBQU0sR0FERDtBQUVMQyw0QkFBUyxTQUZKO0FBR0xDLHlCQUFNTixLQUhEO0FBSUxPLDBCQUFPTjtBQUpGLGlCQUFUO0FBTUg7QUFDSixTQWhCRDtBQWlCSCxLQW5CRDs7QUFxQkFoQixXQUFPdUIsSUFBUCxDQUFZLGNBQVosRUFBNEIxQixpQkFBNUIsRUFBK0MsVUFBQ2MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDekRBLFlBQUlNLElBQUosQ0FBUztBQUNMTSxrQkFBTWIsSUFBSWE7QUFETCxTQUFUO0FBR0gsS0FKRDs7QUFNQSxXQUFPeEIsTUFBUDtBQUNILENBMUNEOztBQTRDQXlCLE9BQU9DLE9BQVAsQ0FBZUMsSUFBZixHQUFzQi9CLFdBQXRCO0FBQ0E4QixRQUFRRSxPQUFSLEdBQWtCaEMsV0FBbEIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXHJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xyXG5jb25zdCBteXNxbCA9IHJlcXVpcmUoJ215c3FsJyk7XHJcbmNvbnN0IGNvbmZpZyAgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xyXG5cclxuY29uc3Qgc2V0dXBSb3V0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBib2R5UGFyc2VyRW5jb2RlciA9IGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XHJcbiAgICAgICAgZXh0ZW5kZWQ6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICAgICAgaG9zdCAgICAgOiBjb25maWcuaG9zdCxcclxuICAgICAgICB1c2VyICAgICA6IGNvbmZpZy51c2VyLFxyXG4gICAgICAgIHBhc3N3b3JkIDogY29uZmlnLnBhc3MsXHJcbiAgICAgICAgZGF0YWJhc2UgOiBjb25maWcuZGF0YWJhc2VcclxuICAgIH0pXHJcbiAgICBjb25uZWN0aW9uLmNvbm5lY3QoKTtcclxuXHJcbiAgICAvL09hdXRoMlxyXG4gICAgcm91dGVyLmdldCgnL2dldF91c2VycycsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIGxldCBzcWwgPSAnU0VMRUNUICogRlJPTSB1c2Vycyc7XHJcbiAgICAgICAgY29ubmVjdGlvbi5xdWVyeShzcWwsKGVycm9yLCByZXN1bHRzLCBmaWVsZHMpID0+IHtcclxuICAgICAgICAgICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IDUwMCxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgOiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICBtc2cgOiAnZXJyb3IgOiAnICsgZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA6IHJlc3VsdHNcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtc2cgOiBlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhIDogcmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHJvdXRlci5wb3N0KCcvcG9zdGV4YW1wbGUnLCBib2R5UGFyc2VyRW5jb2RlciwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICBib2R5OiByZXEuYm9keVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJvdXRlcjtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmluaXQgPSBzZXR1cFJvdXRlcjtcclxuZXhwb3J0cy5kZWZhdWx0ID0gc2V0dXBSb3V0ZXI7Il19
