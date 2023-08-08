const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, '../dist'),
        open: true,
        host: 'localhost',
        port: 4200,
        hot: true,
        historyApiFallback: true,
    },
};
