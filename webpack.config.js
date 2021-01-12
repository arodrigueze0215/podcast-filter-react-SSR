require('webpack');
const path = require('path');
const miniCss = require('mini-css-extract-plugin');

const config = {
    target: 'node',
    mode: 'production',
    entry: './server/index',
    output: {
        path: path.resolve(__dirname, 'api'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: { 
                        limit: 1000, // Convert images < 1kb to base64 strings
                        name: 'assets/[name].[ext]'
                    }
                },
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                use:[
                    miniCss.loader,
                    'css-loader',
                    'stylus-loader'
                ] // compiles Styl to CSS
            },
        ]
    },
    plugins: [
        new miniCss({filename:'assets/style.css'}),        
    ],
}



module.exports = config