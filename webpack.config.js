module.exports = {
	context: __dirname + "/app",
    entry: './app.module.js',
    output: {
        path: __dirname + "/dist",
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          { test: /\.html$/, loader: "html-loader" },
	      {
	        test: /\.scss$/,
	        loaders: [ 'style', 'css', 'sass' ]
	      },
	      {
	        test: /\.less$/,
	        loaders: [ 'style', 'css', 'less' ]
	      },
	      {
	        test: /\.css$/,
	        loaders: [ 'style', 'css']
	      },
	      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
      ]
    },
    devtool: "#inline-source-map"
}