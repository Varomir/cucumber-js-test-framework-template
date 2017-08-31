'use strict';

var {defineSupportCode} = require('cucumber');
var {By} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({Given, When, Then}) {
  Given('I open a webdriver HUB page', function() {
    //console.log('FIRST STEP ==> initial test state');
    return this.driver.get('http://127.0.0.1:4444/wd/hub/static/resource/hub.html');
  });

  When('I clicked to {string} button', function(text) {
    //console.log('SECOND STEP ==> does console.log works correctly?');
    var rsBtn = "//button[contains(text(),'" + text + "')]";
    this.driver.findElement(By.xpath(rsBtn)).click();
  });

  Then('I will see one open {string} session', function(text, next) {
    //console.log('LAST FINAL STEP ==> ASSERTION here ' + text);
    var tabList = "//div[@role='tablist']/div";
    this.driver.findElements(By.xpath(tabList))
      .then(function(elements) {
        expect(elements.length).to.not.equal(0);
        next();
      });
  });

  Then('I will see only one existing session', function(next) {
    //console.log('LAST FINAL STEP ==> Some text assertion here');
    //this.driver.findElement(By.css('.modal-dialog-title-text')).getText().then(label => console.dir(`Text is ${label}`));
    this.driver.findElement(By.css('.modal-dialog-title-text'))
      .getText().then(function(label) {
        expect(label).equal('Create new session');
        //expect(label).equal('Create a New Session');
        next();
      });
  });
});