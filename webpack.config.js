// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    JS: path.resolve(__dirname, 'src'),
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.JS, 'app.jsx'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js',
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    combineLoaders([{
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }])
                )
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

