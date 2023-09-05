import { merge } from "webpack-merge";
import commonConfiguration from "./webpack.common.js";
import CopyPlugin from "copy-webpack-plugin";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(commonConfiguration, {
  mode: "development",
  devServer: {
    static: "./dist",
    open: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "static",
          to: "static",
        },
      ],
    }),
  ],
});
