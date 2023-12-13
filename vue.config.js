const { defineConfig } = require('@vue/cli-service')
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  // 设置正向代理服务器
  // devServer:{
  //   proxy:"http://localhost:3000"
  // }
  configureWebpack:{
    devtool: "source-map", // Source map generation must be turned on
    plugins: [
      sentryWebpackPlugin({
        org: "厚浦",
        project: "vue-sentry",
        // Auth tokens can be obtained from https://sentry.io/orgredirect/organizations/:orgslug/settings/auth-tokens/
        authToken: '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',
      }),
  ],
  }
})
