const path = require('path');

module.exports = {
   entry: path.resolve(__dirname, 'src', 'App.jsx'),
   output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
   module: {
      rules: [
         {
            test: /\.(jsx|js)?$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  // attach the presets to the loader (most projects use .babelrc file instead)
                  presets: ['@babel/preset-env', '@babel/preset-react']
               }
            }
         },
         {
            test: /\.css$/,
            use: ['css-loader', 'style-loader']
         }
      ]
   }
};
