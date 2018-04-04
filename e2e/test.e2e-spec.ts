import { browser, element, by, ElementFinder } from 'protractor';

let clickerField: ElementFinder = element(by.css('.text-input'));
 
describe('Example E2E Test', () => {
 
  beforeEach(() => {
    browser.get('');
  });
 
  it('the home tab is displayed by default', () => {
 
      expect(element(by.css('[aria-selected=true] .tab-button-text')) // Grab the title of the selected tab
        .getAttribute('innerHTML')) // Get the text content
        .toContain('Home'); // Check if it contains the text "Home"
 
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

  it('the user can browse to the contact tab and view the ionic twitter handle', () => {
 
    // Click the 'About' tab
    element(by.css('[aria-controls=tabpanel-t0-2]')).click().then(() => {
 
      // Wait for the page transition
      browser.driver.sleep(1000);
 
      expect(element(by.css('ion-list ion-item ion-label')) // Grab the label of the list item
        .getAttribute('innerHTML')) // Get the text content
        .toContain('@ionicframework'); // Check if it contains the text "@ionicframework"
 
    });
 
  });
 
});