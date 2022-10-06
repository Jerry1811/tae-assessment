const { defineConfig } = require("cypress");

require('dotenv').config()

module.exports = defineConfig({
  env: {
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.TAET_GOOGLE_CLIENTID,
    googleClientSecret: process.env.TAET_GOOGLE_CLIENT_SECRET,
    email: process.env.EMAIL,
    password: process.env.PASSWORD
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://www.lambdatest.com",
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "browser": "chrome",
    "pageLoadTimeout": 100000,
    "defaultCommandTimeout": 10000,
    "video": false,
    "retries": 1,
    "scrollBehavior": "center",
    "chromeWebSecurity": false,
    "watchForFileChanges": false,
    "experimentalSessionAndOrigin": true,
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
    "configFile": "reporter-config.json"
  }
  },
});
