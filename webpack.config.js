module.exports = {
  // where webpack looks for the files that are required throughout the app:
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    // where webpack puts all the required files for the app:
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    // don't forget commas and quotes after each alias
    alias:{

    },
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      }
    ]
  }
};
