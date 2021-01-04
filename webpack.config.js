const webpack = require('webpack');
const path = require('path');

const config = {
    target:'node',
    mode: 'development',
    entry: './src/server/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
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
                use: [
                  {
                    loader: 'url-loader',
                    options: { 
                        limit: 1000, // Convert images < 1kb to base64 strings
                        name: 'assets/[name].[ext]'
                    }
                  },
                ],
              }
        ]
    }
}

module.exports = config