const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development", // режим разработки
  entry: "./index.js", // исходный файл с которого вебпак начинает сборку
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // файл куда вебпак складывает собранный файл
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png| svg| jpeg| gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ttf| woff| woff2| eot)$/,
        use: ["file-loader"],
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true, // автоматически открывает браузер
    hot: true, // горячая перезагрузка
    watchFiles: ["src/**/*"], // следит за изменениями файлов
  },
};
