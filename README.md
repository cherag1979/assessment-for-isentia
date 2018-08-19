
# Sample Project using Protractor Cucumber Framework.



## Environment

* protractor version 5.2.4
* cucumber version 1.3.1
* npm version 6.2.0
* Platform - OSX - El Capitan 10.11.3


## Prerequisites

On Mac:
* Run below commands from terminal to check if you already have git and npm installed on mac
* git --version
* npm --version
* If command not found, in order to install git and npm you will need a package manager tool such homebrew
* From your terminal do brew -v
* If command not found then run command: ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* After Installation successful!, run below commands to install git and maven
* brew install git
* brew install node
* Do the following installs using npm
npm install -g protractor
npm install -s cucumber@1.3.1
install --save-dev protractor-cucumber-framework


## Running the tests

* Clone this repository from GitHub or
* Copy the clone URL of this Github repository
* Open Terminal on Mac or cmd on windows and go into the folder where repository needs to be saved
* Do git clone <url>
* Run the test by executing this command: protractor conf.js
