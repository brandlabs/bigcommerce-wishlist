const path = require('path');

const common = {
    entry: './index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
        ],
    },
};

const exportModule = {
    library: 'wishlistManager',
    libraryTarget: 'amd',
    auxiliaryComment: 'Export Module',
};

module.exports = [{
    ...common,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'wishlist-manager.js',
        ...exportModule,
    },
    optimization: {
        minimize: false,
    },
}, {
    ...common,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'wishlist-manager.min.js',
        ...exportModule,
    },
}];
