var path = require('path');
// 这个包的作用就是在内存中自动生成一个index.html页面
var htmlwp = require("html-webpack-plugin");

// 此配置文件在控制台上使用 webpack 的时候后面如果不加任何参数，则默认会查找 webpack.config.js的配置文件去执行
module.exports = {
    // 1.0 配置打包时的入口文件
    entry: './src/main.js', //表示打包的时候自动查找当前目录下面的src下面的main.js作为入口文件

    // 2.0 配置打包时的生成文件
    output: {
        // path.join() 将多个路径拼接成一个路径，不管/分隔符有几个均可以
        path: path.join(__dirname, '/dist'),
        filename: 'build.js'
    },
    // 3.0 配置相关的loader
    module: {
        loaders: [{
                // 打包的时候碰到.css文件则被这个正则匹配
                test: /\.css$/,
                // 交给'style-loader','css-loader' 去进行打包
                // 编写的顺序一定是：先'style-loader' 然后再是'css-loader'
                // webpack的顺序，先使用css-loader再使用style-loader
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                // 在使用npm安装的 node-sass的时候会自动跑到github上去下载，会很慢，这时请使用 cnpm i node-sass sass-loader --save-dev
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            // 配置图片的正则表达式和loader
            {
                // 表示匹配.png,.jpg,.gif的任一一个
                test: /\.(png|jpg|gif)$/,
                // url-loader这种写法不管图片大小均以base64的形式打包到build.js中,那么如果图片很大的话，会导致
                //build.js文件也很大，性能低下
                // loader:['url-loader']  
                // 上述问题可以使用 limit=10240(Byte) （10K） 来限定如果超过这个值，则拷贝原图片，否则则打包到build.js中
                loader: ['url-loader?limit=10240']
            },
            // 配置 .vue文件的打包正则
            {
                // 匹配一个vue的组件页面
                test: /\.vue$/,
                loader: ['vue-loader']
            },
            // 如果使用的webpack1.0的话这个配置就会起作用
            {
                // es6语法通常是写在 .js文件中
                test: /\.js$/,
                loader: ['babel-loader'], //负责将es6转换成es5
                // 排除node_modules下面的所有js文件
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
        ]
    },
    plugins: [
        new htmlwp({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}