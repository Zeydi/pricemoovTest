module.exports = {
  entry: './public/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'public/components/Main.js',
      DropdownAgencies: 'public/components/DropdownAgencies.js',
      DropdownCategories: 'public/components/DropdownCategories.js',
      Prices: 'public/components/Prices.js',
      Price: 'public/components/Price.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
       test   : /\.css$/,
       loaders: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};
