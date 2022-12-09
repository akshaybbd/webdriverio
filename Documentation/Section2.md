# SECTION 2

# ASSIGNMENTS

# What is spec,describe & it block?
* Describe - A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
* Specs - Specs are defined by calling the global Jasmine function it, which, like describe takes a string and a function.
* It - It Just Functions,Since describe and it blocks are functions, they can contain any executable code necessary to implement the test.

```javascript
describe("A suite", function() {
  it("contains spec with an expectation", function() {
     expect(true).toBe(true);
  });
});
```

## WebdriverIO Assignment I  

1) Create Project using WebdriverIO dependency
2) Using wdio create CLI tool & run configuration 
3) Write a simple spec & try to execute it
4) Include browser in your spec
-------

## Locators in WebdriverIO

### Lacators used in WebdriverIO
* id
* name
* tagname
* className
* linktext
* partiallinktext
* css
* xpath

### Example

```javascript
describe("A suite", function() {
  it("contains spec with an expectation", async ()=> {
     await browser.url("https://www.example.com");
     await browser.pause(2000);
     await $(id="example").click();	
  });
});
```

## WebdriverIO Assignment II 

1) Include all locators in your spec (use dummy website <https://timetracker.ctepl.com/actitime/login.jsp> )

------
## Introduction of Cucumber framework in WebdriverIO
* To Include cucumber dependency npm install cucumber --save-dev 


### What is BDD Cucumber?
* BDD is an extension of Test-Driven Development (TDD) that emphasizes developing features based on a user story and writing code that provides a solution to real problems.Cucumber is a software tool that supports behavior-driven development.It offers a way to write tests that anybody can understand.

### Introducion to feature file
* Feature files are written in the Given-When-Then [GWT] format.The feature file is an entry point, to write the cucumber tests and used as a live document at the time of testing.

### Keywords used in feature file(for example)
```javascipt
        Given User is on Login page
        When  User Enter <Username> and <Password>
        Then  User should be able to login into HRM App

        Examples:
            | Username | Password |
            | Admin    | admin123 |
```


### Introduction to step definations(for example)
* Steps Definition file contains the actual code to execute the Test Scenario in the Features file.Cucumber finds the Step Definition file with the help of the Glue code in Cucumber Options.

```javascript
Given ({......});
When  ({.......});
Then  ({.......});
```
## WebdriverIO Assignment III

1) Create your first feature file for login fuctionality (use above website)
2) Create step defination for login feature file which is define in eariler assignment

-------------
## WebdriverIO Assignment IV

1) Use Cucumber framework for end to end testing (use guru99 website <https://www.guru99.com/>)

--------

## References

* [WebdriverIO Official documents](https://webdriver.io/)
* [Udemy Course](https://www.udemy.com/course/webdriverio-tutorial-nodejs-javascript/)
* [JavaScript Tutorial](https://www.w3schools.com/js/)
* [TypeScript Tutorial](https://www.w3schools.com/typescript/index.php)







