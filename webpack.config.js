require('webpack');
const path = require('path');

const config = (env) => {
    return {
        target: 'node',
        mode: env.NODE_EVN,
        entry: {index:'./server/index', export:'./server/export'},
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
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
                }
            ]
        }
    }
}



module.exports = config