import { merge } from "webpack-merge";
import commonConfiguration from "./webpack.common.js";

export default merge(commonConfiguration, {
  mode: "development",
  devServer: {
    static: "./dist",
    open: true,
    liveReload: true,
  },
});
