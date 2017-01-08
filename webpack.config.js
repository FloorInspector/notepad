const webpack = require('webpack');
const {resolve} = require('path');

module.exports = (env) => {
  return {
    entry: "./js/app.js",
    output: {
      path: resolve(__dirname, "dist"),
      pathinfo: !env.prod,
      filename: 'app.bundle.js'
    },
    context: resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [
        {test: /\.js?$/, exclude: /node_modules/, loaders: ['babel-loader']},
        {test: /\.css$/,loader: "style-loader!css-loader?root=."},
        {test: /\.woff/, loader: "file-loader"}
      ]
    }
  }
};
