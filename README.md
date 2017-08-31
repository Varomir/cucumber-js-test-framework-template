# Automated Testing in JavaScript with Cucumber-JS and Selenium-Webdriver and Internet Explorer

### Install

``` shell
npm install
```
#### Configure local environment for Selenium and InternetExplorer.

Download `selenium-server` from:
[Google Storage](http://selenium-release.storage.googleapis.com/3.5/selenium-server-standalone-3.5.2.jar)


Download `IEDriverServer.exe` from:
[Internet Explorer Driver 64x](http://selenium-release.storage.googleapis.com/3.5/IEDriverServer_x64_3.5.1.zip)

Put `IEDriverServer.exe` to the same directory where `selenium-server` located, like `~/Server/`

Run server `java -jar selenium-server-standalone-3.5.2.jar` and validate [localhost](http://127.0.0.1:4444/wd/hub)

Configure Internet Explorer security mode and `Zoom (100%)`.
`Protected Mode` settings should be the same for all zones.
Enable Protected Mode must be set to the same value (enabled or disabled) for all zones.


### Running tests on the desktop
``` shell
./node_modules/.bin/cucumber-js features/overview.feature features/local-env.feature -f json:report/cucumber-report.json
```

or use alias for brevity
``` shell
npm run e2e-test
```

run generate test report
``` shell
npm run e2e-report
```


### Run Cucumber features with custom stepdefinition
``` shell
./node_modules/.bin/cucumber-js -r custom_step_definition
```
