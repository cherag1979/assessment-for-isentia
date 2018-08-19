'use strict';
var userData = require('../data/userdata.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = {

  webtablePage: {
    addUserLink: element(by.partialButtonText('Add User')),
    firstName: element(by.name('FirstName')),
	lastName: element(by.name('LastName')),
	username: element(by.name('UserName')),
	password: element(by.name('Password')),
	role: element(by.name('RoleId')),
	email: element(by.name('Email')),
	mobile: element(by.name('Mobilephone')),
	save: element(by.buttonText('Save'))
  },

  getURL: function(url) {
    browser.get(url);
  },

  addUser: function() {
    var page = this.webtablePage;
    page.addUserLink.click();
	page.firstName.sendKeys(userData.data.firstname);
	page.lastName.sendKeys(userData.data.lastname);
	page.username.sendKeys(userData.data.username);
	page.password.sendKeys(userData.data.password);
	element(by.cssContainingText('label.radio.ng-scope.ng-binding', userData.data.customer)).click();
	page.role.click();
	element(by.cssContainingText('option', userData.data.role)).click();
	page.email.sendKeys(userData.data.email);
	page.mobile.sendKeys(userData.data.mobile);
	page.save.click();
  },
  
  verifyUser: function() {
    console.log("START search");
	element(by.model('searchValue')).sendKeys('cvasunia');
	console.log("END search");
	
	var dataCellCss = 'td.smart-table-data-cell';
	console.log("START assertion");
	expect(element(by.cssContainingText(dataCellCss, userData.data.firstname)).isDisplayed()).to.eventually.be.true;
	expect(element(by.cssContainingText(dataCellCss, userData.data.lastname)).isDisplayed()).to.eventually.be.true;
	expect(element(by.cssContainingText(dataCellCss, userData.data.username)).isDisplayed()).to.eventually.be.true;
	expect(element(by.cssContainingText(dataCellCss, userData.data.role)).isDisplayed()).to.eventually.be.true;
	expect(element(by.cssContainingText(dataCellCss, userData.data.email)).isDisplayed()).to.eventually.be.true;
	expect(element(by.cssContainingText(dataCellCss, userData.data.mobile)).isDisplayed()).to.eventually.be.true;
	console.log("END assertion");
  }
  

};