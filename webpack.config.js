autoprefixer = require('autoprefixer');
module.exports = {
  entry: './app/main.js',

  output: {
    filename: 'build/bundle.js',
  },

  module: {
    loaders: [
      { 
        test: /\.js?$/, 
        exclude: /node_modules/, 
//        include: /react-leaflet/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-decorators-legacy' ],
          presets: ['es2015', 'react', 'stage-0'],
        },
      },

      { 
        test: /\.css$/, 
        exclude: /node_modules/, 
        loader: 'style-loader!css-loader' 
      },

      { 
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
    test: /\.png$/,
    loader: "url-loader",
    query: { mimetype: "image/png" }
}

//      { test:   /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader!postcss-loader"},
    ],


  },

  postcss: function () {
    return [autoprefixer];
  },

  resolve: {
    extensions: ['', '.js', '.json', ],
  },
};