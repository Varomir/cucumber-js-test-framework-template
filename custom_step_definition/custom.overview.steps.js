var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  Given('I open a webdriver HUB page', function(callback) {
    console.dir('Use some custom step definition folder');
    callback();
  });

  When('I clicked to {string} button', function(text) {
    console.dir('Run some amazing action here with: ' + text);
  });

  Then('I will see only one existing session', function() {
    console.dir('And what do you want to see here?');
  });
  
  Then('I will see one open {string} session', function(text) {
    console.log('Passed text from Then step was: ' + text);
  });
});
