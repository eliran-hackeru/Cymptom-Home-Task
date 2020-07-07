import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"],
})
export class CounterComponent implements OnInit {
  private _value: number = 0;
  @Input() set value(value: number) {
    if (value === this._value) return;
    this._value = value;
    this.counterChange.next(value);
  }

  get value(): number {
    return this._value;
  }

  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  increaseCounter() {
    ++this.value;
  }

  decreaseCounter() {
    if (this.value - 1 < 0) return; // Don't allow minus values
    --this.value;
  }

  onInputValueChange(event: Event) {
    this.counterChange.next(this.value);
  }

  /**
   * Because by default, the arrow keys on input[type="number"] have their own logic
   * for increasing\decreasing the value, we override them and create our own logic.
   * @param $event
   */
  onInputKeydown($event: KeyboardEvent) {
    // We want to change the behavior only of arrow keys
    const handledKeys = ["ArrowDown", "ArrowUp"];

    if (handledKeys.indexOf($event.key) > -1) {
      $event.preventDefault();

      switch ($event.key) {
        case "ArrowUp":
          ++this.value;
          break;
        case "ArrowDown":
          --this.value;
          break;
      }
    }
  }
}
