const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://stackadapt-interview.us-east-1.elasticbeanstalk.com/',
    env: {
      username: "arzagama@gmail.com",
      password: "N*7#030mEUzN"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
