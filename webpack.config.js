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
            loader: 'babel-loader',
          },
        { test: /\.html$/, loader: "html-loader" },
        { test: /\.css$/, loader: "style!css" }
      ]
    },
    devtool: "#inline-source-map"
}