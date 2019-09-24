const createError = require('http-errors');
const fs = require("fs");
// 引入日志输出函数
const serverLogger = require(`../utils/logger.js`);
// 引入路由响应映射
const routerMap = require(`../routes/index.js`);

/** 路由控制函数
 * @param {*} req 请求信息
 * @param {*} res 返回信息
 * @param {*} next 
 */
const CONTROL = (req, res, next) => {
    try {
        
        const { method, path } = req;
        let { match="", matchMethod="" } = routerMap[path];
        // 执行日志函数
        serverLogger(method, path, match, req, res, next);
        
        // 路由匹配失败
        if(!routerMap[path]){
            throw Error("请求路由不存在, 请确认路由地址");
        }
        
        // 执行匹配方法
        matchMethod(req, res, next).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        });

    } catch (error) {
        console.error(error);
        // catch 404 and forward to error handler
        return next(createError(404));
    }
    
}

module.exports = CONTROL