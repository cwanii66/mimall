/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    // node.js knowledge(about config)
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: { // intercept and tweet/redirect
            '/api': {
                target:'http://mall-pre.springboot.cn',
                changeOrigin: true, //跨域
                pathRewrite: {
                    '/api': '',
                }

            }
        }
    },
    lintOnSave: true,
    productionSourceMap: true,
    chainWebpack: config => {
        config.plugins.delete('prefetch'); // 删除预加载，确保真正按需加载
    }
}