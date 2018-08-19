var webtablePage = require('../pages/WebtablePage.js');

module.exports = function() {

	this.Given(/^I go to "([^"]*)"$/, function(url) {
	webtablePage.getURL(url); 
	});
  
	this.When(/^I add a new user$/, function() {
		webtablePage.addUser();
	});
	
	this.Then(/^new user should be added successfully$/, function() {
		webtablePage.verifyUser();
	});
	
  
  };