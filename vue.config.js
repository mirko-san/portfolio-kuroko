const { defineConfig } = require("@vue/cli-service");
const { VuetifyPlugin } = require("webpack-plugin-vuetify");

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: [new VuetifyPlugin({ autoImport: true })],
  },
});
