const webpack=require('webpack');
const ExtractTextPlugin=require('extract-text-webpack-plugin');  //css单独打包
const HtmlWebpackPlugin=require('html-webpack-plugin');       //生成html文件
const OpenBrowserPlugin=require('open-browser-webpack-plugin');
const path=require('path');

module.exports={
    entry:{
        app:'./src/index'
    },
    output:{
        filename:'[name].js',
        path:path.join(__dirname,'/dist'),
        publicPath:'/'
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:[ 'es2015','react']
                }
            },
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                loader:ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader!sass-loader!autoprefixer-loader'})
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                include: /iconfont/,
                loader: 'file-loader?name=images/iconfont/[name].[ext]'
            },
            {
                test: /\.(png|jpg)$/,
                include: /default/,
                loader: 'url?limit=20000&name=images/default/[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            }
        ]
    },
    plugins:[
        //new OpenBrowserPlugin({url:'http://localhost:8088'}),     //自动打开浏览器
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            title:'cnode',
            template: path.join(__dirname,"/src/html/index.html"), //html模板路径
            filename: 'index.html', //生成的html存放路径，相对于 path
            hash: true,    //为静态资源生成hash值
            inject:true,        ////要把script插入到标签里
            favicon: path.join(__dirname, '/src/images/default/cnode_icon_32.png')
        }),
        new ExtractTextPlugin('[name].css') //css单独打包
    ],
    devtool:'cheap-module-sourc-map',
    resolve: {
        extensions: ['.js', '.jsx'] //后缀名自动补全
    },
    devServer:{
        historyApiFallback: true,
        //hot: true,// 在package.json的script里命令里配置比较好,就能自动添加HotModuleReplacementPlugin，同时将服务转化为热加载形式
        inline: true,
        progress: true,
        proxy: {
            "/api/*": {
                target: "https://cnodejs.org",//后台服务器所在的地址
                secure: false
            }
        },
        contentBase: "./dist",
        colors: true,
        port:8088,
        open:true
    }
};