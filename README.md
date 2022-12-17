### Final Project || QualityWorks UI Automation Bootcamp
Authored By: Jonelle Ramlal

### Description

This repository was created for the final project of the QualityWorks UI Automation Bootcamp. 
It written entirely in JavaScript and uses the WebdriverIO test automation framework. 
The application can be found [here](https://ui-automation-camp.vercel.app/). 
Automated tests were created for the following areas/workflows/section of the application: 

1. Add To Cart
2. Authentication 
3. Cart
4. Checkout
5. Contact
6. Product Details
7. Product Homepage/Gallery
8. Search
9. Sort/Filter

### Dependencies
1. NodeJS v16.18.0 or above
3. NPM version 8.19.2 or above
3. Google Chrome browser
4. Faker-JS
5. Allure Reporter
6. Java JDK version 17

## Getting Started
Clone the repository & install dependencies  
```$ git clone```  
```$ cd automation-project-jramlal```  
```$ npm install @faker-js/faker --save-dev```  
```$ npm install @wdio/allure-reporter --save-dev```


# Folder Structure
- **allure-reports:** Allure reporter files.
- **test/data:** Files with the data used for data driven tests.
- **test/pageobjects:** Page object files for the selectors and functions used throughout the project.
- **test/specs:** JavaScript files containing the actual tests to be run .


# Execute Tests

Each test corresponds with the sections of the application that required automated testing. This will also generate an Allure report. 

 ```npm run addtocart```  
 ```npm run auth```  
 ```npm run cart```  
 ```npm run checkout```  
 ```npm run contact```  
 ```npm run details```  
 ```npm run homepage```  
 ```npm run search```  
 ```npm run sort```



# View Allure Report Using Browser-Based GUI 

```allure serve allure-results && allure open```

# Execute tests in a different browser

***Please ensure the browser is installed on the device.***

- This test suite will be executed in Chrome by default however cross browser testing is supported. 
- To run the tests in a different browser, edit the browserName field within the wdio.config.js. For instance, if you'd like to use firefox, the file should look like this:  

```capabilities: [{

        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'firefox',
        acceptInsecureCerts: true
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
    
    ```
