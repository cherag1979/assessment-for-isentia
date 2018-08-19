describe('Add user', function() {
  it('should be able to add new user', function() {
	browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
	
	element(by.partialButtonText('Add User')).click();
	element(by.name('FirstName')).sendKeys('Cherag');
	element(by.name('LastName')).sendKeys('Vasunia');
	element(by.name('UserName')).sendKeys('cvasunia');
	element(by.name('Password')).sendKeys('password');
	element.all(by.name('optionsRadios')).get(0).click();
	element(by.name('RoleId')).click();
	element(by.cssContainingText('option', 'Customer')).click();
	element(by.name('Email')).sendKeys('che@rag.com');
	element(by.name('Mobilephone')).sendKeys('0412345678');
	element(by.buttonText('Save')).click();
  });
});