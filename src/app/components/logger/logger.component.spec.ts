import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LoggerComponent } from './logger.component';
import { CounterComponent } from '../counter/counter.component'

describe('LoggerComponent', () => {
  let component: LoggerComponent;
  let fixture: ComponentFixture<LoggerComponent>;

  let htmlElement: HTMLElement;
  let inputElement: HTMLInputElement;
  let increaseButton: HTMLInputElement;
  let decreaseButton: HTMLInputElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggerComponent, CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Get all of the HTML elements
    htmlElement = fixture.nativeElement as HTMLElement;
    inputElement = htmlElement.querySelector("#counter_input");
    increaseButton = htmlElement.querySelector("#increase_btn");
    decreaseButton = htmlElement.querySelector("#decrease_btn");
  });

  it('should create the logger component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have no logs when initiate the app', () => {
    const loggerElement: HTMLElement = fixture.nativeElement;
    expect(loggerElement.textContent).toContain("No logs were found");
  });

  /*it('should increase the total to 1 and render it', () => {
    const loggerElement: HTMLElement = fixture.nativeElement;
    // Simulate an increase
    increaseButton.click();

    // Detect changes and wait for the to occur
    fixture.detectChanges();
    tick();

    // Check the new value
    expect(loggerElement.textContent).toContain("with value 1");
  });*/

});
