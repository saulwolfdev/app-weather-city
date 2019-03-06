const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")



module.exports = {
    entry: "./src/app/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: [
                    "file-loader?name=img/[name].[ext]",
                    "image-webpack-loader?bypassOnDebug"
                ]
            },
        ]

    },

    devServer: {
        port: 5000
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new miniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
}