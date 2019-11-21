const webpack = require('webpack');
const config = {
    entry:  __dirname + '/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['react']
                }
              }
            ],
          }, 
          {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            loader: "file-loader",
            // Removed a / from /static
            options: { name: 'static/[name].[ext]' }
          }
        ]
      }
};
module.exports = config;