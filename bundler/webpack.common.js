import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: path.resolve(__dirname, "../src/index.js"),
  devServer: {
    historyApiFallback: true,
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "../static"), to: "static" }],
    }),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "../public"), to: "public" }],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
      minify: true,
    }),
  ],
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      // HTML
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },

      // CSS
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },

      // JS
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      // Shaders
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ["raw-loader", "glslify-loader"],
      },
    ],
  },

  //       // Images
  //       {
  //         test: /\.(jpg|png|gif|svg)$/,
  //         use: [
  //           {
  //             loader: 'file-loader',
  //             options: {
  //               outputPath: 'assets/images/',
  //             },
  //           },
  //         ],
  //       },

  //       // Models
  //       {
  //         test: /\.(glb|gltf|fbx|obj)$/,
  //         use: [
  //           {
  //             loader: 'file-loader',
  //             options: {
  //               outputPath: 'assets/models/',
  //             },
  //           },
  //         ],
  //       },

  //       // MP3
  //       {
  //         test: /\.(mp3)$/,
  //         use: [
  //           {
  //             loader: 'file-loader',
  //             options: {
  //               outputPath: 'assets/audios/',
  //             },
  //           },
  //         ],
  //       },

  //       // Shaders
  //       {
  //         test: /\.(glsl|vs|fs|vert|frag)$/,
  //         exclude: /node_modules/,
  //         use: ['raw-loader', 'glslify-loader'],
  //       },
  //     ],
  //   },
};
