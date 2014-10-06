'use strict';

module.exports = {
  entry: __dirname + "/src/Choices.jsx",
  output: {
    path: __dirname + '/dist',
    filename: 'react-choices.js',
    library: 'Choices',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  },
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.es6']
  }
};
