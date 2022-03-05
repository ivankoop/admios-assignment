const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const useRtl = false;
const useExternalCss = false;
const customProperties = require("postcss-custom-properties");
module.exports = {
  stories: [
    "../src/**/*.story.tsx",
    "../src/**/*.story.js",
    "../src/**/*.story.mdx",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    const fastSassLoader = {
      loader: require.resolve("fast-sass-loader"),
      options: {
        implementation: require("sass"),
        includePaths: [path.resolve(__dirname, "..", "..", "node_modules")],
        data: `$public_url: '${process.env.PUBLIC_URL}';`,
      },
    };

    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: [
        {
          loader: useExternalCss ? MiniCssExtractPlugin.loader : "style-loader",
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 2,
            sourceMap: true,
          },
        },
        {
          loader: "postcss-loader",
          options: {
            plugins: () => {
              const autoPrefixer = require("autoprefixer")({
                overrideBrowserslist: ["last 1 version", "ie >= 11"],
              });
              return [
                customProperties(),
                autoPrefixer,
                ...(useRtl ? [rtlcss] : []),
              ];
            },
            sourceMap: true,
            data: `$public_url: '${process.env.PUBLIC_URL}';`,
          },
        },
        fastSassLoader,
      ],
    });

    config.module.rules.push({
      test: /(\.ts|\.tsx)$/,
      loader: "ts-loader",
      options: {
        configFile: "tsconfig.storybook.json",
      },
    });

    config.module.rules.push({
      test: /(\.js|\.jsx)$/,
      loader: "babel-loader",
    });

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];

    return config;
  },
};
