const MY_PATH = require('./consts');
const devConfig = require('./dev');
const webpack = require('webpack');
const baseConfig = require("./base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    ...baseConfig, 
    mode: 'production',
    output: {
        ...baseConfig.output, 
        path: MY_PATH.BUILD_PATH,
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [
            ...baseConfig.module.rules,
            {
                test: /(\.less|\.css)$/,
                use: [
                    { loader : MiniCssExtractPlugin.loader }, 
                    { loader : "css-loader" }, 
                    { 
                        loader : "less-loader",
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        ...baseConfig.plugins,
        new MiniCssExtractPlugin({
            //提取为外部css代码
            filename: 'css/main.[chunkhash:5].css',
            chunkFilename: 'css/main.[contenthash:5].css'
        }),
        new CleanWebpackPlugin(['dist'], {
            // Default: webpack位置所在的文件夹
            root: MY_PATH.ROOT_PATH,
        }),
    ],
    devtool: 'none'
}