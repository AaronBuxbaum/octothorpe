const nodeExternals = require('webpack-node-externals')();

const options = {
    entry: './src/server.ts',
    devtool: 'source-map',
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [nodeExternals],
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};

module.exports = options;