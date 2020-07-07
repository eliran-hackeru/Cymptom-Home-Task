import { Component, ViewChild } from '@angular/core';

import { CounterComponent } from './components/counter/counter.component';
import { CountLog } from './models/count-log';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild(CounterComponent) counterComponent: CounterComponent;
  logs: CountLog[] = [];

  /**
   * When the counter was clicked and it's value changed, log each click.
   * @param value
   */
  onCounterChange(value: number) {
    const loggedDate = new Date();
    loggedDate.setSeconds(loggedDate.getSeconds() + 60);

    const log: CountLog = { value, timestamp: loggedDate };
    this.logs.push(log);
  }

  /**
   * Clear the counter and logs.
   */
  clear() {
    this.logs = [];
    this.counterComponent.value = 0;
  }
}
