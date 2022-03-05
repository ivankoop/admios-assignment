module.exports = (api) => {
  const presets = [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@emotion/babel-preset-css-prop",
  ];
  const plugins = ["babel-plugin-emotion"];

  /** this is just for minimal working purposes,
   * for testing larger applications it is
   * advisable to cache the transpiled modules in
   * node_modules/.bin/.cache/@babel/register* */
  api.cache(false);
  return {
    presets,
    plugins,
  };
};
