import { Component, Input, OnInit } from '@angular/core';

import { CountLog } from '../../models/count-log';

@Component({
  selector: "app-logger",
  templateUrl: "./logger.component.html",
  styleUrls: ["./logger.component.scss"],
})
export class LoggerComponent implements OnInit {
  @Input() logs: CountLog[] = [];

  constructor() {}

  ngOnInit(): void {}
}
