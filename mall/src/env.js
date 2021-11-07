// 基于jsonp || CORS跨域设置接口环境，代理不需要，代理仅仅只需要
let baseURL;

switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default: 
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;

}

export default {
    baseURL
}