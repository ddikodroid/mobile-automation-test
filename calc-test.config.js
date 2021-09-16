const { join } = require('path');
const video = require('wdio-video-reporter');
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
  reporters: [
    [video, { saveAllVideos: true, videoSlowdownMultiplier: 100 }],
    [
      'allure',
      {
        outputDir: './__result__calc/allure',
      },
    ],
    [
      'json',
      {
        outputDir: './__result__calc/json',
      },
    ],
  ],
  specs: ['./specs/**/calc*.spec.js'], // list of specs files
  capabilities: [
    {
      platformName: 'Android',
      automationName: 'UiAutomator2',
      udid: '8AHY0LAXB', // check with adb devices
    //   udid: 'emulator-5554', //avd
    //   avd: 'pixel',
      app: join(process.cwd(), './app/calc.apk'),
      appPackage: 'com.calculator',
      appActivity: '.MainActivity',
      newCommandTimeout: 1000 * 60,
    },
  ],
};
