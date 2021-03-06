import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CounterComponent } from './counter.component';

describe("CounterComponent", () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  let htmlElement: HTMLElement;
  let inputElement: HTMLInputElement;
  let increaseButton: HTMLInputElement;
  let decreaseButton: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Get all of the HTML elements
    htmlElement = fixture.nativeElement as HTMLElement;
    inputElement = htmlElement.querySelector("#counter_input");
    increaseButton = htmlElement.querySelector("#increase_btn");
    decreaseButton = htmlElement.querySelector("#decrease_btn");
  }));

  it("should create the counter component", () => {
    expect(component).toBeTruthy();
  });

  it("should render default value of 0", async(() => {
    expect(inputElement.value).toBe("0");
  }));

  it("should increase the value to 1 and render it", fakeAsync(() => {
    increaseButton.click();

    // Detect changes and wait for the to occur
    fixture.detectChanges();
    tick();

    // Check the new value
    expect(inputElement.value).toBe("1");
  }));

  it("should increase the value to 1 using the arrow up key", fakeAsync(() => {
    // Simulate an arrow up event
    const keyDownEvent: KeyboardEvent = new KeyboardEvent("keydown", {
      key: "ArrowUp",
    });
    inputElement.dispatchEvent(keyDownEvent);

    // Detect changes and wait for the to occur
    fixture.detectChanges();
    tick();

    // Check the new value
    expect(inputElement.value).toBe("1");
  }));

  it("should not decrease the value to -1 and render it", fakeAsync(() => {
    decreaseButton.click();

    // Detect changes and wait for the to occur
    fixture.detectChanges();
    tick();

    // Check the new value
    expect(inputElement.value).toBe("0");
  }));

  it("should not decrease the value to -1 using the arrow down key", fakeAsync(() => {
    // Simulate an arrow down event
    const keyDownEvent: KeyboardEvent = new KeyboardEvent("keydown", {
      key: "ArrowDown",
    });
    inputElement.dispatchEvent(keyDownEvent);

    // Detect changes and wait for the to occur
    fixture.detectChanges();
    tick();

    // Check the new value
    expect(inputElement.value).toBe("0");
  }));

  it("should render the value directly by the keyboard", fakeAsync(() => {
    // Simulate a positive number
    inputElement.value = "100";

    // Detect changes and wait for the to occur
    fixture.detectChanges();
    tick();

    // Check the new value
    expect(inputElement.value).toBe("100");
  }));

  it("should not render the value directly if it's a negative number", fakeAsync(() => {
    // Simulate a positive number
    inputElement.value = "-100";

    // Detect changes and wait for the to occur
    fixture.detectChanges();
    tick();

    // Check the new value
    expect(inputElement.value).toBe("0");
  }));

  // TODO: Check all of the remaining cases, such as arrow keys input, custom values, etc...
});
