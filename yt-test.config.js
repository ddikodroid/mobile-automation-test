const { join } = require('path');

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
  specs: ['./specs/**/yt*.spec.js'], // list of specs files
  capabilities: [
    {
      platformName: 'Android',
      automationName: 'UiAutomator2',
      // udid: '8AHY0LAXB', // check with adb devices
      udid: 'emulator-5554', //avd
      avd: 'pixel',
      app: join(process.cwd(), './app/yt.apk'),
      appPackage: 'com.youtubesearchapi',
      appActivity: '.MainActivity',
    },
  ],
};
