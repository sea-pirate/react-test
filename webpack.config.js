// https://createapp.dev/webpack
const path = require("path");
//const webpack = require("webpack");

module.exports = {
    entry: path.join(__dirname, "src", "test.jsx"), //'./src/test.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        //compress: false,
        static: {
            directory: path.join(process.cwd(), 'public'),
        },
        hot: true, // not working
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                //include: path.join(__dirname, "src", "test.jsx"),
                exclude: /.node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    /*plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],*/
    devtool: "source-map",
};