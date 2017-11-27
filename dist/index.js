'use strict';

// 
var express = require('express');
var config = require('./config');
var Router = require('./router');
var cluster = require('cluster');
var mysql = require('mysql');
var os = require('os');

var app = express();

Router.init(app, config);

if (cluster.isMaster && config.env !== 'development') {
    var workers = [];
    for (var i = 0; i < os.cpus().length; i++) {
        workers[i] = cluster.fork();
        workers[i].on('exit', function (code, signal) {
            if (signal) {
                console.error('worker was killed by signal: ' + signal);
            } else if (code !== 0) {
                console.error('worker exited with error code: ' + code);
            } else {
                console.error('worker exited');
            }
        });
    }
} else {
    //Verificar conexion a la base de datos.
    var connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.pass,
        database: config.database
    });
    connection.connect(function (err) {
        if (!err) {
            console.warn('Mysql connect ' + config.host + ' worked server listener database ' + config.database);
        } else {
            console.warn('Mysql ERROR connect ' + config.host + ' don\'t worked server listener database ' + config.database);
        }
    });
    app.listen(config.port, function () {
        console.warn('Worker ' + process.pid + ' running a ' + config.env + ' server listening on port ' + config.port);
    });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwiY29uZmlnIiwiUm91dGVyIiwiY2x1c3RlciIsIm15c3FsIiwib3MiLCJhcHAiLCJpbml0IiwiaXNNYXN0ZXIiLCJlbnYiLCJ3b3JrZXJzIiwiaSIsImNwdXMiLCJsZW5ndGgiLCJmb3JrIiwib24iLCJjb2RlIiwic2lnbmFsIiwiY29uc29sZSIsImVycm9yIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwicGFzcyIsImRhdGFiYXNlIiwiY29ubmVjdCIsImVyciIsIndhcm4iLCJsaXN0ZW4iLCJwb3J0IiwicHJvY2VzcyIsInBpZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLFNBQVNELFFBQVEsVUFBUixDQUFmO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUSxVQUFSLENBQWY7QUFDQSxJQUFNRyxVQUFVSCxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNSSxRQUFRSixRQUFRLE9BQVIsQ0FBZDtBQUNBLElBQU1LLEtBQUtMLFFBQVEsSUFBUixDQUFYOztBQUVBLElBQUlNLE1BQU1QLFNBQVY7O0FBRUFHLE9BQU9LLElBQVAsQ0FBWUQsR0FBWixFQUFpQkwsTUFBakI7O0FBRUEsSUFBSUUsUUFBUUssUUFBUixJQUFvQlAsT0FBT1EsR0FBUCxLQUFlLGFBQXZDLEVBQXNEO0FBQ2xELFFBQUlDLFVBQVUsRUFBZDtBQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJTixHQUFHTyxJQUFILEdBQVVDLE1BQTlCLEVBQXNDRixHQUF0QyxFQUEyQztBQUN2Q0QsZ0JBQVFDLENBQVIsSUFBYVIsUUFBUVcsSUFBUixFQUFiO0FBQ0FKLGdCQUFRQyxDQUFSLEVBQVdJLEVBQVgsQ0FBYyxNQUFkLEVBQXNCLFVBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFrQjtBQUNwQyxnQkFBSUEsTUFBSixFQUFZO0FBQ1JDLHdCQUFRQyxLQUFSLG1DQUE4Q0YsTUFBOUM7QUFDSCxhQUZELE1BRU8sSUFBSUQsU0FBUyxDQUFiLEVBQWdCO0FBQ25CRSx3QkFBUUMsS0FBUixxQ0FBZ0RILElBQWhEO0FBQ0gsYUFGTSxNQUVBO0FBQ0hFLHdCQUFRQyxLQUFSLENBQWMsZUFBZDtBQUNIO0FBQ0osU0FSRDtBQVNIO0FBQ0osQ0FkRCxNQWNPO0FBQ0g7QUFDQSxRQUFNQyxhQUFhaEIsTUFBTWlCLGdCQUFOLENBQXVCO0FBQ3RDQyxjQUFXckIsT0FBT3FCLElBRG9CO0FBRXRDQyxjQUFXdEIsT0FBT3NCLElBRm9CO0FBR3RDQyxrQkFBV3ZCLE9BQU93QixJQUhvQjtBQUl0Q0Msa0JBQVd6QixPQUFPeUI7QUFKb0IsS0FBdkIsQ0FBbkI7QUFNQU4sZUFBV08sT0FBWCxDQUFtQixVQUFDQyxHQUFELEVBQVM7QUFDeEIsWUFBRyxDQUFDQSxHQUFKLEVBQVE7QUFDSlYsb0JBQVFXLElBQVIsb0JBQThCNUIsT0FBT3FCLElBQXJDLHlDQUE2RXJCLE9BQU95QixRQUFwRjtBQUNILFNBRkQsTUFFSztBQUNEUixvQkFBUVcsSUFBUiwwQkFBb0M1QixPQUFPcUIsSUFBM0MsZ0RBQXlGckIsT0FBT3lCLFFBQWhHO0FBQ0g7QUFDSixLQU5EO0FBT0FwQixRQUFJd0IsTUFBSixDQUFXN0IsT0FBTzhCLElBQWxCLEVBQXdCLFlBQU07QUFDMUJiLGdCQUFRVyxJQUFSLGFBQXVCRyxRQUFRQyxHQUEvQixtQkFBZ0RoQyxPQUFPUSxHQUF2RCxrQ0FBdUZSLE9BQU84QixJQUE5RjtBQUNILEtBRkQ7QUFHSCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFxyXG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xyXG5jb25zdCBSb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcicpO1xyXG5jb25zdCBjbHVzdGVyID0gcmVxdWlyZSgnY2x1c3RlcicpO1xyXG5jb25zdCBteXNxbCA9IHJlcXVpcmUoJ215c3FsJyk7XHJcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcclxuXHJcbmxldCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5Sb3V0ZXIuaW5pdChhcHAsIGNvbmZpZyk7XHJcblxyXG5pZiAoY2x1c3Rlci5pc01hc3RlciAmJiBjb25maWcuZW52ICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICBsZXQgd29ya2VycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcy5jcHVzKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB3b3JrZXJzW2ldID0gY2x1c3Rlci5mb3JrKCk7XHJcbiAgICAgICAgd29ya2Vyc1tpXS5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNpZ25hbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgd29ya2VyIHdhcyBraWxsZWQgYnkgc2lnbmFsOiAke3NpZ25hbH1gKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGB3b3JrZXIgZXhpdGVkIHdpdGggZXJyb3IgY29kZTogJHtjb2RlfWApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignd29ya2VyIGV4aXRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0gZWxzZSB7XHJcbiAgICAvL1ZlcmlmaWNhciBjb25leGlvbiBhIGxhIGJhc2UgZGUgZGF0b3MuXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICAgICAgaG9zdCAgICAgOiBjb25maWcuaG9zdCxcclxuICAgICAgICB1c2VyICAgICA6IGNvbmZpZy51c2VyLFxyXG4gICAgICAgIHBhc3N3b3JkIDogY29uZmlnLnBhc3MsXHJcbiAgICAgICAgZGF0YWJhc2UgOiBjb25maWcuZGF0YWJhc2VcclxuICAgIH0pXHJcbiAgICBjb25uZWN0aW9uLmNvbm5lY3QoKGVycikgPT4ge1xyXG4gICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYE15c3FsIGNvbm5lY3QgJHtjb25maWcuaG9zdH0gd29ya2VkIHNlcnZlciBsaXN0ZW5lciBkYXRhYmFzZSAke2NvbmZpZy5kYXRhYmFzZX1gKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBNeXNxbCBFUlJPUiBjb25uZWN0ICR7Y29uZmlnLmhvc3R9IGRvbid0IHdvcmtlZCBzZXJ2ZXIgbGlzdGVuZXIgZGF0YWJhc2UgJHtjb25maWcuZGF0YWJhc2V9YClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgYXBwLmxpc3Rlbihjb25maWcucG9ydCwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgV29ya2VyICR7cHJvY2Vzcy5waWR9IHJ1bm5pbmcgYSAke2NvbmZpZy5lbnZ9IHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke2NvbmZpZy5wb3J0fWApO1xyXG4gICAgfSk7XHJcbn0iXX0=
