'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 
var path = require('path');

var Config = function Config() {
    _classCallCheck(this, Config);

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
};

module.exports = Config;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9jb25maWcuanMiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJDb25maWciLCJlbnYiLCJwcm9jZXNzIiwiTk9ERV9FTlYiLCJyb290Iiwibm9ybWFsaXplIiwiX19kaXJuYW1lIiwicm9vdFBhdGgiLCJST09UX1BBVEgiLCJhcHAiLCJuYW1lIiwicG9ydCIsInBhcnNlSW50IiwiUE9SVCIsImhvc3QiLCJ1c2VyIiwicGFzcyIsImRhdGFiYXNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRU1DLE0sR0FDRixrQkFBYztBQUFBOztBQUNWLFNBQUtDLEdBQUwsR0FBV0MsUUFBUUQsR0FBUixDQUFZRSxRQUFaLElBQXdCLGFBQW5DO0FBQ0EsU0FBS0MsSUFBTCxHQUFZTixLQUFLTyxTQUFMLENBQWVDLFlBQVksS0FBM0IsQ0FBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JMLFFBQVFELEdBQVIsQ0FBWU8sU0FBWixJQUF5QixHQUF6QztBQUNBLFNBQUtDLEdBQUwsR0FBVztBQUNQQyxjQUFNO0FBREMsS0FBWDtBQUdBLFNBQUtDLElBQUwsR0FBWUMsU0FBU1YsUUFBUUQsR0FBUixDQUFZWSxJQUFyQixLQUE4QixJQUExQztBQUNBO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLFdBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksTUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixNQUFoQjtBQUNILEM7O0FBRUxDLE9BQU9DLE9BQVAsR0FBaUJuQixNQUFqQiIsImZpbGUiOiJtb2RlbHMvY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcblxyXG5jbGFzcyBDb25maWcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xyXG4gICAgICAgIHRoaXMucm9vdCA9IHBhdGgubm9ybWFsaXplKF9fZGlybmFtZSArICcvLi4nKTtcclxuICAgICAgICB0aGlzLnJvb3RQYXRoID0gcHJvY2Vzcy5lbnYuUk9PVF9QQVRIIHx8ICcvJztcclxuICAgICAgICB0aGlzLmFwcCA9IHtcclxuICAgICAgICAgICAgbmFtZTogJ0V4cHJlc3MtVnVlLUJ1bG1hLU15c3FsLU1WQy1TdGFydGVyJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wb3J0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCkgfHwgOTAwMDtcclxuICAgICAgICAvL2NvbmZpZyBEQiBNeXNxbFxyXG4gICAgICAgIHRoaXMuaG9zdCA9ICdsb2NhbGhvc3QnO1xyXG4gICAgICAgIHRoaXMudXNlciA9ICdyb290JztcclxuICAgICAgICB0aGlzLnBhc3MgPSAnJztcclxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gJ2F1dGgnO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gQ29uZmlnOyJdfQ==
