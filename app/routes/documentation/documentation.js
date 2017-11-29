module.exports.default = (router) => {
    //imports components
    router.get('/', (req, res) => {
        const data = {
            title: 'How start?'
        };
        const vueOptions = {
            head: {
                title: 'How do you start?'
            },
           
        };
        //console.log(res)
        res.renderVue('../components/main/main', data, vueOptions);
    });
};