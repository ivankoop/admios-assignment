/* eslint-disable */
const path = require("path");
const fs = require("fs");
const {
  override,
  babelInclude,
  useBabelRc,
  removeModuleScopePlugin,
} = require("customize-cra");
const addRewireScssLoader = require("react-app-rewire-scss-loaders");

module.exports = (config, env) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    react: path.resolve("./node_modules/react"),
    "react-router-dom": path.resolve("./node_modules/react-router-dom"),
  };

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, "./src"),
  ];

  return Object.assign(
    config,
    override(
      removeModuleScopePlugin(),
      addRewireScssLoader(require.resolve("fast-sass-loader"), {
        implementation: require("sass"),
        includePaths: [path.resolve(__dirname, "..", "..", "node_modules")],
        data: `$public_url: '${
          process.env.NODE_ENV === "production" ? "../build" : "../public"
        }' ;`,
      }),
      useBabelRc(),
      babelInclude([path.resolve("src")])
    )(config, env)
  );
};
