'use strict';

// 
var dotenv = require('dotenv');
var Models = require('./models');

var envFile = 'development.env';
var env = process.env.NODE_ENV || 'development';

if (process.env.ENV !== undefined) {
    envFile = env + '.env';
}

dotenv.config({
    path: 'environment/' + envFile
});
var config = new Models.Config();

module.exports = config;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJkb3RlbnYiLCJyZXF1aXJlIiwiTW9kZWxzIiwiZW52RmlsZSIsImVudiIsInByb2Nlc3MiLCJOT0RFX0VOViIsIkVOViIsInVuZGVmaW5lZCIsImNvbmZpZyIsInBhdGgiLCJDb25maWciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBTUEsU0FBU0MsUUFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxTQUFTRCxRQUFRLFVBQVIsQ0FBZjs7QUFFQSxJQUFJRSxVQUFVLGlCQUFkO0FBQ0EsSUFBTUMsTUFBTUMsUUFBUUQsR0FBUixDQUFZRSxRQUFaLElBQXdCLGFBQXBDOztBQUVBLElBQUlELFFBQVFELEdBQVIsQ0FBWUcsR0FBWixLQUFvQkMsU0FBeEIsRUFBbUM7QUFDL0JMLGNBQVVDLE1BQU0sTUFBaEI7QUFDSDs7QUFFREosT0FBT1MsTUFBUCxDQUFjO0FBQ1ZDLFVBQU0saUJBQWlCUDtBQURiLENBQWQ7QUFHQSxJQUFNTSxTQUFTLElBQUlQLE9BQU9TLE1BQVgsRUFBZjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQkosTUFBakIiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXHJcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xyXG5jb25zdCBNb2RlbHMgPSByZXF1aXJlKCcuL21vZGVscycpO1xyXG5cclxubGV0IGVudkZpbGUgPSAnZGV2ZWxvcG1lbnQuZW52JztcclxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5FTlYgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgZW52RmlsZSA9IGVudiArICcuZW52JztcclxufVxyXG5cclxuZG90ZW52LmNvbmZpZyh7XHJcbiAgICBwYXRoOiAnZW52aXJvbm1lbnQvJyArIGVudkZpbGVcclxufSk7XHJcbmNvbnN0IGNvbmZpZyA9IG5ldyBNb2RlbHMuQ29uZmlnKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbmZpZzsiXX0=