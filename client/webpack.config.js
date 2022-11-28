const path = require('path')

const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const conf = {
    entry: './src/main.js',

    output: {
        path: `${ __dirname }/dist`,
        filename: `scripts/[name].[contenthash].js`,
        clean: true
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new MiniCssExtractPlugin({ 
            filename: `styles/main.[contenthash].css`
        }),
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin()
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    minSize: 40,
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]|/,
                    name: 'vendors',
                    filename: `scripts/[name].[contenthash].js`
                }
            }
        }
    },
    
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                generator: {
                    filename: 'images/[contenthash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.mp4$/,
                generator: {
                    filename: 'videos/[contenthash][ext]'
                }
            }
        ]
    },

    resolve: {
        alias: {
            '@design': path.resolve('src/styles/index.scss')
        }
    }
}

module.exports = conf
