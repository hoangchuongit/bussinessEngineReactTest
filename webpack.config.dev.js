const webpack = require("webpack")
const path = require("path")
const merge = require("webpack-merge")

module.exports = merge(require("./webpack.config"), {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "scripts/reacttest.[name].js",
        chunkFilename: "scripts/reacttest.[id].chunk.js",
        path: path.resolve(__dirname, "./build/dist")
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