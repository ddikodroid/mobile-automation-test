exports.config = {
  runner: 'local',
  host: 'localhost',
  port: 4723,
  path: '/wd/hub',
  browserName: 'chrome',
  logLevel: 'info',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    require: ['@babel/register'],
    timeout: 1000 * 60,
  },
  maxInstances: 1,
  sync: true,
  specs: ['./login.specs.js'], // list of specs files
  capabilities: [
    {
      platformName: 'Android',
      automationName: 'UiAutomator2',
      udid: '8AHY0LAXB', // check with adb devices
      appPackage: 'com.irismobile',
      appActivity: '.MainActivity',
    },
  ],
};
