const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "browser": "chrome",
    "pageLoadTimeout": 40000,
    "defaultCommandTimeout": 10000,
    "video": false,
    "headless": false,
    "retries": 1,
    "scrollBehavior": "center",
    "chromeWebSecurity": false,
    "watchForFileChanges": false,
  },
});
