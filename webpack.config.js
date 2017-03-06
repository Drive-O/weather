module.exports = {
  entry: './app/components/app.jsx',
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_module/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
