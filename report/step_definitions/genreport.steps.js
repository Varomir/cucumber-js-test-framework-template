'use strict';

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Then}) {

  Then('I have to run task special task for generate report', function() {
    var reporter = require('cucumber-html-reporter');
    var reportOptions = {
      theme: 'bootstrap',
      jsonFile: 'report/cucumber-report.json',
      output: 'report/cucumber-report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      ignoreBadJsonFile: true,
      metadata: {
        "App Version": "1.0.0",
        "Test Environment": "Local"
      }
    };
    reporter.generate(reportOptions);
  });
});
