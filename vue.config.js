const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080, // 你可以改变这个端口号
    allowedHosts: 'all'
  }
})