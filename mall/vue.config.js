module.exports = {
    // node.js knowledge(about config)
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: { // intercept and tweet/redirect
            '/api': {
                target:'https://www.imooc.com',
                changeOrigin: true, //是否将主机头改为目标的url地址
                pathRewrite: {
                    '/api': ''
                }


            }
        }
    }
}