module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/react-forecast.js',
    sourceMapFilename: './dist/react-forecast.map',
    library: 'Forecast',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'react/addons': 'React'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};
