const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin

const { NodeGlobalsPolyfillPlugin } = require("@esbuild-plugins/node-globals-polyfill");
const { NodeModulesPolyfillPlugin } = require("@esbuild-plugins/node-modules-polyfill");

export default defineConfig({

  fixturesFolder: 'cypress/fixtures',
  watchForFileChanges: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC',
    experimentalSessionAndOrigin: true,

    async setupNodeEvents(on:Cypress.PluginEvents, config:Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);

      const bundler = createBundler({
        plugins: [
          NodeModulesPolyfillPlugin(),
          NodeGlobalsPolyfillPlugin({
            process: true,
            buffer: true
          }),
          createEsbuildPlugin(config)
        ],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
  },
});
