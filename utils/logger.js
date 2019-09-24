const { format } = require('./tools');

/**
 * 输出日志函数
 */
const logger = (method, router, routerPath, req, res, next) => {
    // debugger
    let reqTime = new Date();
    const handler = {
        GET: function(){ console.log(req.query) },
        POST: function(){ console.log(req.body) }
    }
    console.log(`\n*************************************************************`);
    console.log(`当前请求时间: ${format(reqTime, "yy-mm-dd-h:m:s")}`);
    console.log(`当前请求方法: ${method}, 当前请求路由: ${router}`);
    console.log(`当前请求路由响应路径: ${routerPath}`);
    console.log(`-- 请求参数: `);
    handler[method]();
}

module.exports = logger;