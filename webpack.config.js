const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        vendor: [
            "jquery",
            "lodash",
            "moment",
            "react",
            "react-bootstrap",
            "react-dom",
            "react-router",
            "react-router-dom"
        ],
        app: "./src/app/app.tsx"
    },
    output: {
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modules: [
            path.resolve(__dirname, "./src/app"),
            "./node_modules"
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"   
        }),
        new CleanWebpackPlugin(["./build/*.*", "./build/dist"]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CopyWebpackPlugin([{
            from: "./src/index.html"
        }, {
            from: "./src/assets",
            to: "./assets"
        }]),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            chunksSortMode: "dependency"
        })
    ]
}