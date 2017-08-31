'use strict';

var {defineSupportCode, Status} = require('cucumber');
var fs = require('fs');
var path = require('path');

defineSupportCode(function({BeforeAll, Before, After, AfterAll}) {
  BeforeAll(function() {
    //BeforeAll hook without 'WORLD'
  });

  Before({tags: "@smoke"}, function() {
    //BEFORE SMOKE tag hook
  });

  Before(function() {
    //BEFORE hook
  });

  After(function(testCase) {
    if (testCase.result.status === Status.FAILED) {
      var screenPath = new Date().getTime() + ".png";
      console.dir(`____Test FAILED, see screenshot here ./screenshots/${screenPath}`)
      this.driver.takeScreenshot().then(function(data) {
        var base64Data = data.replace(/^data:image\/png;base64,/,"");
        fs.writeFile(path.join('screenshots', screenPath), base64Data, 'base64', function(err) {
          if (err) console.log(err);
        });
      });
    }
    return this.driver.quit();
  });

  AfterAll(function() {
    //AfterAll hook without 'WORLD'
  });
});