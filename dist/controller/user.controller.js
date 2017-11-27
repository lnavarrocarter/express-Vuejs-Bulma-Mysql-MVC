'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('./../utils');

var UserController = function () {
    function UserController() {
        _classCallCheck(this, UserController);

        this.mysql = new Utils.Database();
        this.table = 'users';
    }
    /**
     * Get all user this database
     */


    _createClass(UserController, [{
        key: 'getallusers',
        value: function getallusers() {
            return this.mysql.read(this.table);
        }
    }]);

    return UserController;
}();

module.exports = UserController;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIlV0aWxzIiwicmVxdWlyZSIsIlVzZXJDb250cm9sbGVyIiwibXlzcWwiLCJEYXRhYmFzZSIsInRhYmxlIiwicmVhZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLFFBQVFDLFFBQVEsWUFBUixDQUFkOztJQUdNQyxjO0FBQ0YsOEJBQWE7QUFBQTs7QUFDVCxhQUFLQyxLQUFMLEdBQWEsSUFBSUgsTUFBTUksUUFBVixFQUFiO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLE9BQWI7QUFDSDtBQUNEOzs7Ozs7O3NDQUdhO0FBQ1QsbUJBQU8sS0FBS0YsS0FBTCxDQUFXRyxJQUFYLENBQWdCLEtBQUtELEtBQXJCLENBQVA7QUFDSDs7Ozs7O0FBR0xFLE9BQU9DLE9BQVAsR0FBaUJOLGNBQWpCIiwiZmlsZSI6ImNvbnRyb2xsZXIvdXNlci5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XHJcblxyXG5cclxuY2xhc3MgVXNlckNvbnRyb2xsZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubXlzcWwgPSBuZXcgVXRpbHMuRGF0YWJhc2UoKTtcclxuICAgICAgICB0aGlzLnRhYmxlID0gJ3VzZXJzJztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCB1c2VyIHRoaXMgZGF0YWJhc2VcclxuICAgICAqL1xyXG4gICAgZ2V0YWxsdXNlcnMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5teXNxbC5yZWFkKHRoaXMudGFibGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJDb250cm9sbGVyOyAiXX0=
