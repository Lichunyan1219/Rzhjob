const path = require("path")
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin")
//引入自动删除dist文件下的插件
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin")
//配置出入口文件
module.exports = {
    //配置serve服务器打开端口
    devServer: {
        port: 3000, // 端口号
        open: true //自动打开
    },
    //配置开发环境解决mode警告
    mode: 'development' || 'production' || 'none',
    entry: "./src/index.js", // 入口
    output: {
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "main.js" // 出口文件名
    },
    //配置生成html插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
            filename: 'index.html' // 生成文件的名称
        }),
        //配置自动清除dist下文件插件
        new CleanWebpackPlugin(), // 删除的是ouput path 里配置的那个输出文件的文件夹
        // 默认情况下dist
    ],

}