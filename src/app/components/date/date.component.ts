import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit, OnChanges {

  @Output() selectEvent = new EventEmitter();

  @Input('month') month;
  @Input('year') year;
  @Input('monthSelected') monthSelected;

  isSelected: boolean;

  monthStyle: string;

  constructor() { }

  ngOnInit() { }

  select() {
    this.selectEvent.emit(this.month);
  }

  ngOnChanges() {
    if (this.monthSelected === this.month) {
      this.monthStyle = 'month selected';
      this.isSelected = true;
    } else {
      this.monthStyle = 'month';
      this.isSelected = false;
    }
  }
}
