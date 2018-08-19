const webpack = require("webpack")
const path = require("path")
const merge = require("webpack-merge")

module.exports = merge(require("./webpack.config"), {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "scripts/reacttest.[name].js",
        chunkFilename: "scripts/reacttest.[name].chunk.js",
        path: path.resolve(__dirname, "./build/dist")
    },
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -20,
                    chunks: "all"
                }
            }
        }
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "build/dist"),
        port: 3300,
        compress: true,
        publicPath: "/",
        stats: "minimal"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development"),
                "__HotAPI__": JSON.stringify("http://localhost:3300"),
            }
        })
    ]
})