const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './lib/batchServiceClient.ts',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'var',
    library: 'className'
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /(node_modules|test)/,
        options: {
          configFileName: './tsconfig.browser.json'
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      moment: path.resolve('./node_modules/moment'),
      "ms-rest-ts": path.resolve('./node_modules/ms-rest-ts/dist/node/lib/msRest.js'),
      "ms-rest-azure-ts": path.resolve('./node_modules/ms-rest-azure-ts/dist/node/lib/msRestAzure.js')
    }
  },
  node: {
    fs: false,
    net: false,
    //process: false,
    path: false,
    dns: false,
    tls: false,
    tty: false,
    v8: false,
    Buffer: false
  }
};