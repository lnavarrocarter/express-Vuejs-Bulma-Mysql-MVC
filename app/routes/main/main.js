
module.exports.default = (router) => {
    //imports components
    router.get('/', (req, res) => {
        const data = {
            title: 'VULBUEXM'
        };
        const vueOptions = {
            head: {
                title: 'Express-Vue-Bulma-Mysql MVC Starter Kit'
            },
           
        };
        //console.log(res)
        res.renderVue('../components/main/main', data, vueOptions);
    });

    router.get('/hi', (req, res) => {
        const data = {
            title: 'Example request'
        };
        const vueOptions = {
            head: {
                title: 'Express-Vue-Bulma-Mysql MVC Starter Kit'
            },
           
        };
        //console.log(res)
        res.renderVue('../components/main/stadistics', data, vueOptions);
    });
};