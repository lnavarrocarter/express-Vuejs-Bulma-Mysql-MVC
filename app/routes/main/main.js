// 
module.exports.default = (router) => {
    router.get('/', (req, res) => {
        const data = {
            title: 'Hello World Nacho'
        };
        const vueOptions = {
            head: {
                title: 'Express-Vue-Bulma-Mysql MVC Starter Kit'
            }
        };
        res.renderVue('../components/main/navbar', data, vueOptions);
    });
};