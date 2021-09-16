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
    [video, { saveAllVideos: true, videoSlowdownMultiplier: 10 }],
    [
      'allure',
      {
        outputDir: './__result__/allure',
      },
    ],
    [
      'json',
      {
        outputDir: './__result__/json',
      },
    ],
  ],
  specs: ['./specs/**/yt*.spec.js'], // list of specs files
  capabilities: [
    {
      platformName: 'Android',
      automationName: 'UiAutomator2',
      // udid: '8AHY0LAXB', // check with adb devices
      udid: 'emulator-5554', //avd
      avd: 'pixel',
      avdArgs: '-no-window',
      app: join(process.cwd(), './app/yt.apk'),
      appPackage: 'com.youtubesearchapi',
      appActivity: '.MainActivity',
      newCommandTimeout: 1000 * 60,
      isHeadless: true,
    },
  ],
};
