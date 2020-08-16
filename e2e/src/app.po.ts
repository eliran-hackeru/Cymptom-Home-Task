import { browser, by, element, Key } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('#header')).getText() as Promise<string>;
  }

  selectUpKey() {
    browser
      .actions()
      .sendKeys(Key.ARROW_UP)
      .perform();
  }

  selectDownKey() {
    browser
      .actions()
      .sendKeys(Key.ARROW_DOWN)
      .perform();
  }

  getCounterValue() {
    return element(by.id('counter_input')).getAttribute('ng-reflect-model') as Promise<string>;
  }

  increaseButton() {
    return element(by.id('increase_btn')).click;
  }

  decreaseButton() {
    return element(by.id('decrease_btn')).click();
  }

  clearButton() {
    return element(by.className('form-control mt-2')).click();
  }
}
