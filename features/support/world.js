'use strict';

require('iedriver');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var fs = require('fs');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
    .withCapabilities(seleniumWebdriver.Capabilities.ie())
    .usingServer('http://127.0.0.1:4444/wd/hub')
    .build();
  var screenshotPath = "screenshots";
  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath)
  }
  this.waitForElement = function(locator) {
    var condition = seleniumWebdriver.until.elementLocated(locator);
    return this.driver.wait(condition)
  }
}

defineSupportCode(function({setDefaultTimeout, setWorldConstructor}) {
  setDefaultTimeout(30 * 1000);
  setWorldConstructor(CustomWorld);
})