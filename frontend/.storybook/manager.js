import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import { version } from "../package.json";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: `Admios Assignment Frontend v.${version}`,
  },
});
