module.exports.default = (router) => {
    router.get('/post', (req, res) => {
        const data = {
            title: 'Hello World',
            message: 'GET',
            csrfToken: req.csrfToken()
        };
        const vueOptions = {
            head: {
                title: 'Post example'
            }
        };
        res.renderVue('../components/post/post', data, vueOptions);
    });

    router.post('/post', (req, res) => {
        const data = {
            title: 'Hello World',
            message: 'POST',
            body: req.body
        };
        const vueOptions = {
            head: {
                title: 'GET example'
            }
        };
        res.renderVue('../components/post/post', data, vueOptions);
    });
};