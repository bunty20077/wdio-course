# WebdriverIO Web Automation

WebDriverIO is used here for Web Automation Testing using Javascript.

- [WebdriverIO](https://webdriver.io/)



## Project Configuration
Project has main file named package.json. This is the heart of any Node project. It records important metadata about a project.
It also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

package.json
```bash
{
  "name": "wdio-course",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "wdio": "wdio run ./wdio.conf.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@wdio/cli": "^8.0.5",
    "faker": "^6.6.6"
  },
  "devDependencies": {
    "@wdio/local-runner": "^8.0.5",
    "@wdio/mocha-framework": "^8.0.2",
    "@wdio/spec-reporter": "^8.0.0",
    "chromedriver": "^108.0.0",
    "wdio-chromedriver-service": "^8.0.0"
  }
}

```


## Installation

Install WebdriverIO with npm

```bash
Create a new npm project 
-------------------------
mkdir <projectname>
cd <projectname>

Install Webdriver io CLI
-------------------------
npm install @wdio/cli

Setup Config
-------------
npx wdio config

Webdriver Command List
-------------------------
http://v4.webdriver.io/api/protocol/touchDown.html
https://v6.webdriver.io/docs/selectors.html

Xpath Selector
----------------
https://devhints.io/xpath

VS Code Autocompletion
-------------------------
https://webdriver.io/docs/autocompletion/


To make group of test 
-------------------------
Add Below Lines in wdio.conf.js

   suites: {
        smoke: [
            './test/specs/**/home.js',
            './test/specs/**/contact.js'
        ],
          component: [
            './test/specs/**/nav.js',
        ]
    },
```
 ## Installing Jenkins
 ```
brew install jenkins-lts
 ```
 
## Run from Jenkins

Run Jenkins locally
```bash
  jenkins-lts
```
Source Code Management
```bash
  Set git and provide public url for Repo
  For credentials , generate PAT from Git-> Developers Settings and 
  provide that one as pasword along with username( not email)
```

Build Environment
```bash
  Provide Node & npm bin/ folder to PATH - click this checkbox option
```

Provide these commands inside Shell on Jenkins under Build Steps
```bash
npm install
export BROWSERSTACK_USERNAME=********************
export BROWSERSTACK_ACCESS_KEY=******************
export TARGET_ENV={param.Environment}
npx wdio --suite smoke
```

Post-build Actions set to Allure-Reports plugin


Need to install plugin from Global Configuration
```bash
  node
  allure
  allure-commands
```  
## Usage/Examples

```javascript
specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //Define custome Suite
    suites: {
        smoke: [
            './test/specs/**/home.js',
            './test/specs/**/contact.js'
        ],
        component: [
            './test/specs/**/nav.js',
        ]
    },
```
To exclude the test , include those test file spec names inside exclude block of wdio.config.js

## Running Tests

Command to run a single suite

```bash
export TARGET_ENV=qa
npx wdio --suite smoke
```

Command to run a group of suites
```bash
export TARGET_ENV=prod
npx wdio --suite smoke --suite component
```

Command to run specific spec file
```bash
export TARGET_ENV=qa
npx wdio --spec test/specs/home.js
```

 To run in Firefox add binary path if Firefox doesnot run automatically
```bash
 {
        browserName: 'firefox',
            'moz:firefoxOptions': {
                binary: '/Applications/Firefox.app/Contents/MacOS/firefox-bin'
            }
    },
```

## Authors

- [Sayantan Tarafdar](https://github.com/bunty20077)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Demo

Insert gif or link to demo


## Tech Stack

**Javascript**
**WebDriverIO**


