// https://createapp.dev/webpack
const path = require("path");
//const webpack = require("webpack");

module.exports = {
    entry: [
        path.join(__dirname, "src", "test.jsx"), //'./src/test.jsx',
        "webpack-dev-server/client",//?https://8080-6d9139c2-c5d8-470f-82dd-b6931fd48be0.cs-us-central1-pits.cloudshell.dev",
        //"webpack/hot/dev-server",
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        static: {
            directory: path.join(process.cwd(), 'public'),
        },
        port: 8080,
        hot: true,
        //liveReload: false,
        //allowedHosts: ['host.com'],
        //allowedHosts: "auto",
        //allowedHosts: "https://8080-6d9139c2-c5d8-470f-82dd-b6931fd48be0.cs-us-central1-pits.cloudshell.dev",
        allowedHosts: "all", // wah wah DNS rebinding attacks
        client: {
            logging: 'info',
        },
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
        // todo css minifier
    },
    /*plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],*/
    devtool: "source-map",
};