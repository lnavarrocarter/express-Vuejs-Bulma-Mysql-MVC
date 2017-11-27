'use strict';

module.exports.default = function (router) {
    router.get('/post', function (req, res) {
        var data = {
            title: 'Hello World',
            message: 'GET',
            csrfToken: req.csrfToken()
        };
        var vueOptions = {
            head: {
                title: 'Post example'
            }
        };
        res.renderVue('../components/post/post', data, vueOptions);
    });

    router.post('/post', function (req, res) {
        var data = {
            title: 'Hello World',
            message: 'POST',
            body: req.body
        };
        var vueOptions = {
            head: {
                title: 'Post example'
            }
        };
        res.renderVue('../components/post/post', data, vueOptions);
    });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9wb3N0L3Bvc3QuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiLCJyb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJkYXRhIiwidGl0bGUiLCJtZXNzYWdlIiwiY3NyZlRva2VuIiwidnVlT3B0aW9ucyIsImhlYWQiLCJyZW5kZXJWdWUiLCJwb3N0IiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxDQUFlQyxPQUFmLEdBQXlCLFVBQUNDLE1BQUQsRUFBWTtBQUNqQ0EsV0FBT0MsR0FBUCxDQUFXLE9BQVgsRUFBb0IsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDOUIsWUFBTUMsT0FBTztBQUNUQyxtQkFBTyxhQURFO0FBRVRDLHFCQUFTLEtBRkE7QUFHVEMsdUJBQVdMLElBQUlLLFNBQUo7QUFIRixTQUFiO0FBS0EsWUFBTUMsYUFBYTtBQUNmQyxrQkFBTTtBQUNGSix1QkFBTztBQURMO0FBRFMsU0FBbkI7QUFLQUYsWUFBSU8sU0FBSixDQUFjLHlCQUFkLEVBQXlDTixJQUF6QyxFQUErQ0ksVUFBL0M7QUFDSCxLQVpEOztBQWNBUixXQUFPVyxJQUFQLENBQVksT0FBWixFQUFxQixVQUFDVCxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUMvQixZQUFNQyxPQUFPO0FBQ1RDLG1CQUFPLGFBREU7QUFFVEMscUJBQVMsTUFGQTtBQUdUTSxrQkFBTVYsSUFBSVU7QUFIRCxTQUFiO0FBS0EsWUFBTUosYUFBYTtBQUNmQyxrQkFBTTtBQUNGSix1QkFBTztBQURMO0FBRFMsU0FBbkI7QUFLQUYsWUFBSU8sU0FBSixDQUFjLHlCQUFkLEVBQXlDTixJQUF6QyxFQUErQ0ksVUFBL0M7QUFDSCxLQVpEO0FBYUgsQ0E1QkQiLCJmaWxlIjoicm91dGVzL3Bvc3QvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSAocm91dGVyKSA9PiB7XHJcbiAgICByb3V0ZXIuZ2V0KCcvcG9zdCcsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGVsbG8gV29ybGQnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnR0VUJyxcclxuICAgICAgICAgICAgY3NyZlRva2VuOiByZXEuY3NyZlRva2VuKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHZ1ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUG9zdCBleGFtcGxlJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXMucmVuZGVyVnVlKCcuLi9jb21wb25lbnRzL3Bvc3QvcG9zdCcsIGRhdGEsIHZ1ZU9wdGlvbnMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcm91dGVyLnBvc3QoJy9wb3N0JywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIZWxsbyBXb3JsZCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogcmVxLmJvZHlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHZ1ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUG9zdCBleGFtcGxlJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXMucmVuZGVyVnVlKCcuLi9jb21wb25lbnRzL3Bvc3QvcG9zdCcsIGRhdGEsIHZ1ZU9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbn07Il19
