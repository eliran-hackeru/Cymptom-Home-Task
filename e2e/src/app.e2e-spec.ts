import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render the page header', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('QA Automation Task');
  });

  it('should render default value of 0 for the counter', () => {
    page.navigateTo();
    expect(page.getCounterValue()).toBe('0');
  });

  it('should increase the counter value', () => {
    page.navigateTo;
    page.increaseButton();
    page.increaseButton();
    expect(page.getCounterValue()).toBe('2');
  })

  it('should decrease the counter value', () => {
    page.navigateTo;
    page.decreaseButton();
    page.decreaseButton();
    expect(page.getCounterValue()).toBe('0');
  })

  it('should increase and decrease the counter value', () => {
    page.navigateTo;
    page.increaseButton();
    page.decreaseButton();
    expect(page.getCounterValue()).toBe('0');
  })

  it('should be able to clear the counter', ()=> {
    page.navigateTo;
    page.increaseButton();
    page.clearButton();
    expect(page.getCounterValue()).toBe('0');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
