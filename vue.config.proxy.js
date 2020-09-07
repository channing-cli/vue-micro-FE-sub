module.exports = {
  "/api/sub_1": {
    target: "http://192.168.2.29:3000",
    ws: false,
    changeOrigin: false,
    pathRewrite: {
      "^/api/sub_1": "/api"
    }
  },
  "/api": {
    target: process.env.BACKEND || "http://localhost:3000",
    changeOrigin: true,
    ws: false
    // pathRewrite: {
    //   "^/api": ""
    // }
  }
};
