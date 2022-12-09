![logo](./images/logo.png)

# SECTION 1
# WebdriverIO
## What is WebdriverIO? 

**WebdriverIO** is a popular JavaScript test automation framework that runs on Node.js. 
It allows us to automate any application written with modern web frameworks such as React, Angular, Polymer or Vue.js as well as native mobile applications for Android and iOS.

**WebdriverIO** has its own implementation of the Webdriver specification that allows us to run tests in multiple browsers. 

Here’s a quick overview of what happens when we run our WebdriverIO test script:

* First, our test script will talk to a driver using a HTTP request.
* Then, the driver will trigger an event in the browser to take the necessary action provided via the HTTP request.

![Quick Overview](./images/webdriverio.png)

## Table of Contents
- [WebdriverIO](#webdriverio)
  - [What is WebdriverIO?](#what-is-webdriverio)
- [What will be discuss in this course?](#what-will-be-discuss-in-this-course)
  - [Prerequisite](#prerequisite)
    - [The only requirement is that you need to have Node.js installed](#the-only-requirement-is-that-you-need-to-have-nodejs-installed)
    - [Node Package Manager(npm)](#node-package-managernpm)
    - [Integrated Development Evironment(IDE)](#integrated-development-evironmentide)
    - [Language require for WebdriverIO Framework](#language-require-for-webdriverio-framework)
  - [SetUp & Resources](#setup--resources)
  - [Different Frameworks](#different-frameworks)
    - [The WDIO runner currently supports Mocha, Jasmine, and Cucumber](#the-wdio-runner-currently-supports-mocha-jasmine-and-cucumber)
  - [Assertions use in WebdriverIO](#assertions-use-in-webdriverio)
    - [WebdriverIO Assertions](#webdriverio-assertions)
  - [CI/CD Integration](#cicd-integration)
  - [WebdriverIO vs Protractor](#webdriverio-vs-protractor)
    - [**WebdriverIO:**](#webdriverio-1)
    - [**Protractor:**](#protractor)
  - [Advantages & Disadvantages](#advantages--disadvantages)
    - [Advantages:](#advantages)
    - [Disadvantages:](#disadvantages)
  - [Conclusion](#conclusion)
  
  
# What will be discuss in this course?
* Prerequisite
* SetUp & Resources
* Different Frameworks
* Assertions use in WebdriverIO
* CI/CD Integration
* WebdriverIO vs Protractor
* Advantages & Disadvantages
* Conclusion

## Prerequisite

### The only requirement is that you need to have Node.js installed
* Minimum v12.16.1 is required to use WebdriverIO v6

To verify that you have successfully installed Node.js, run the following command

```shell
node -v
```

[Click here to get Node.js](https://nodejs.org/en/download/)

### Node Package Manager(npm)
We can get **npm** with Node.js 

To verify that we have successfully installed npm, run the following command

```shell
npm -v
```

### Integrated Development Evironment(IDE)

* VS Code [(Click Here To Download)](https://code.visualstudio.com/)
* atom [(Click Here To Download)](https://atom.io/)
* Eclipse [(Click Here To Download)](https://code.visualstudio.com/)
* IntelliJ [(Click Here To Download)](https://www.jetbrains.com/idea/download/#section=windows)

### Language require for WebdriverIO Framework

* we need javaScript & typeScript
    * To get more information about javascript & typeScript use the following links:

      [Click here for javaScript](https://javascript.info/)

      [Click here for typeScript](https://www.typescriptlang.org/docs/)

## SetUp & Resources

* To create package file use following commond in project directory

```shell
npm init 
```

* To install webdriverio in system we use following commond

```shell
npm install webdriverio --save-dev
```


* To create WebdriverIO CLI tool & run configuration wizard that's help us to configure our test suit 

```shell
npx wdio
```

![npx wdio](./images/npxwdio.gif)

* To configure the different features available with WebdriverIO.These are the default configuration and we can change them later aswell.

  * @wdio/local-runner
  * @wdio/cli
  * @wdio/mocha-framework
  * @wdio/allure-reporter
  * @wdio-chromedriver-service
  * @wdio/spec-reporter

* This command will create a **wdio.conf.js** javascript configuration file


## Different Frameworks

### The WDIO runner currently supports [Mocha](https://mochajs.org/), [Jasmine](https://jasmine.github.io/), and [Cucumber](https://cucumber.io/).

## Assertions use in WebdriverIO

### WebdriverIO Assertions

We can get info about WebdriverIO Assertions types some of them Migrated from **Chai**

* [WebdriverIO Assertions](https://webdriver.io/docs/assertion/)

Detailed Information about **Chai** Assertion which are used in WebdriverIO

* [Chai Assertions](https://www.chaijs.com/api/assert/)

## CI/CD Integration

* WebdriverIO offers a tight integration to CI systems like **Jenkins**.
  To get more information about **Jenkins** integration [click Here](https://webdriver.io/docs/jenkins/).

* WebdriverIO can also integrate with **Docker** container for the more information [click Here](https://webdriver.io/docs/wdio-docker-service/).


## WebdriverIO vs Protractor

### **WebdriverIO:**

* There are built-in selectors for React.
* Built-in synchronization of code execution.
* We don’t have to use async/await.
* A small number of waiters out-of-the-box.
* Good code readability.

### **Protractor:**

* There are built-in selectors for Angular and a mechanism of waiting for the page to load and render.
* Requires to use async/await to synchronize the code execution.
* A large number of waiters out-of-the-box.
* Usage of Lazy Elements.

## Advantages & Disadvantages

### Advantages:

* Readable, simple syntax
* Easy to start	
* Simple and fast configuration	
* We can run our tests using WDIO TestRunner or Standalone Mode
* Works with many assertion libraries and testing frameworks (Jasmine, Mocha, Cucumber)	
* Tests on desktop as well as on mobile	

### Disadvantages:
* Current wdio-expect is not applicable to API tests
* Assertions are problematic at the beginning 
* Debugging possible only through WDIO task runner

## Conclusion

* Overall, WebdriverIO makes it easy to set up and configure our tests, and also provides a clean and readable syntax for writing tests. WebdriverIO also provides detailed documentation on all of its APIs as well as a step-by-step guide for integrating the tests with various services and reporters.


