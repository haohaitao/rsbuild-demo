import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import git from "git-rev-sync";

const rspack = require("@rspack/core");

process.env.GIT_COMMIT = git.short();
process.env.GIT_BRANCH = git.branch();
export default defineConfig({
  html: {
    template: "./public/index.html",
  },
  plugins: [pluginReact()],
  tools: {
    // 与底层工具有关的选项
    rspack: {
      plugins: [
        new rspack.DefinePlugin({
          "process.env": JSON.stringify(process.env),
        }),
      ],
    },
  },
});
