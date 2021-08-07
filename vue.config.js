const registerRouter = require('./backend/router')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        prependData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/music-next/' : '/',
  devServer: {
    before(app) {
      registerRouter(app)
    }
  },
}
