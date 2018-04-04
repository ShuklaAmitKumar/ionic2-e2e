
import { browser, element, by, ElementFinder } from 'protractor';

describe('LOGIN E2E Test', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('has an input box for user name', () => {
    element(by.css('.text-input')).isPresent().then(present => expect(present).toEqual(true));
  });
 
  it('has an input box for user password', () => {
    var foo = element(by.id('password'));
      expect(foo.getAttribute('type')).toEqual('password');
  });

  it('has an login button', () => {
    var foo = element(by.id('loginButton'));
      expect(foo.getAttribute('color')).toEqual('danger');
  });

  it('has text on login button', () => {
    var foo = element(by.id('loginButton'));
    expect(foo.getText()).toEqual('LOGIN');
  });

  it('should navigate to other page', () => {
    // 'shukla.amit2222@gmail.com'.split('').forEach((c) => element(by.css('.text-input')).sendKeys(c));
    element(by.css('.text-input')).sendKeys("sagar");
    'shukla.amit'.split('').forEach((c) => element(by.css('input[type=password]')).sendKeys(c));
    element(by.id('loginButton')).click();
    browser.driver.sleep(1000);
    
    expect(element(by.css('.toolbar-title')).getText().then(text => expect(text).toEqual('About')));
    });
});