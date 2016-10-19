var path = require("path");

var makeConfig = require("./webpack.common");
module.exports = makeConfig("android", "platforms/android/src/main/assets/app");

module.exports.devServer = {
    port: 3000,
    host: "0.0.0.0",
    historyApiFallback: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    outputPath: path.join(__dirname, "app")
};
