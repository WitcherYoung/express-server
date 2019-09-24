// 路由映射对象
module.exports = {
  "/": {
    match: "routes/requests/index.js",
    matchMethod: require("./requests/index.js")
  },
  "/users": {
    match: "routes/requests/users.js",
    matchMethod: require("./requests/users.js")
  }
};
