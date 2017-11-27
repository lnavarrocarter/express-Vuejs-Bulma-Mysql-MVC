'use strict';

// 
module.exports.default = function (router) {
    router.get('/', function (req, res) {
        var data = {
            title: 'Hello World Nacho'
        };
        var vueOptions = {
            head: {
                title: 'Express-Vue-Bulma-Mysql MVC Starter Kit'
            }
        };
        res.renderVue('../components/main/navbar', data, vueOptions);
    });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9tYWluL21haW4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiLCJyb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJkYXRhIiwidGl0bGUiLCJ2dWVPcHRpb25zIiwiaGVhZCIsInJlbmRlclZ1ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBQSxPQUFPQyxPQUFQLENBQWVDLE9BQWYsR0FBeUIsVUFBQ0MsTUFBRCxFQUFZO0FBQ2pDQSxXQUFPQyxHQUFQLENBQVcsR0FBWCxFQUFnQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUMxQixZQUFNQyxPQUFPO0FBQ1RDLG1CQUFPO0FBREUsU0FBYjtBQUdBLFlBQU1DLGFBQWE7QUFDZkMsa0JBQU07QUFDRkYsdUJBQU87QUFETDtBQURTLFNBQW5CO0FBS0FGLFlBQUlLLFNBQUosQ0FBYywyQkFBZCxFQUEyQ0osSUFBM0MsRUFBaURFLFVBQWpEO0FBQ0gsS0FWRDtBQVdILENBWkQiLCJmaWxlIjoicm91dGVzL21haW4vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFxyXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gKHJvdXRlcikgPT4ge1xyXG4gICAgcm91dGVyLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGVsbG8gV29ybGQgTmFjaG8nXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB2dWVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0V4cHJlc3MtVnVlLUJ1bG1hLU15c3FsIE1WQyBTdGFydGVyIEtpdCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzLnJlbmRlclZ1ZSgnLi4vY29tcG9uZW50cy9tYWluL25hdmJhcicsIGRhdGEsIHZ1ZU9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbn07Il19
