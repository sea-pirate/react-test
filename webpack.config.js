// https://createapp.dev/webpack
const path = require("path");
//const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDev = process.env.NODE_ENV !== 'production'; // assert isDev for vulnarable plugins

module.exports = {
    mode: isDev ? 'development' : 'production',
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
        /*port: 8088, // different port than nodemon
        proxy: {
            "^/route*": {
                target: "http://localhost:8080/route",
                //secure: false,
            },
        },*/
        //hot: true,
        //liveReload: false,
        //allowedHosts: ['host.com'],
        //allowedHosts: "auto",
        //allowedHosts: "https://8080-6d9139c2-c5d8-470f-82dd-b6931fd48be0.cs-us-central1-pits.cloudshell.dev",
        allowedHosts: "all", // wah wah DNS rebinding attacks
        client: {
            logging: 'info',
        },
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                //include: path.join(__dirname, "src", "test.jsx"),
                exclude: /node_modules/,
                //use: ['babel-loader'],
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        /*options: {
                            plugins: [
                                isDev && require.resolve('react-refresh/babel'),
                            ].filter(Boolean),
                        },*/
                    },
                ],
            },
        ],
        // todo css minifier
    },
    plugins: [
        //isDev && new webpack.HotModuleReplacementPlugin(),
        //isDev && new ReactRefreshWebpackPlugin({ overlay: false }),
        isDev && new ReactRefreshWebpackPlugin({ overlay: { sockPort: 80 }}),
    ],
};