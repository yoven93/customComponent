import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-container',
  templateUrl: './date-container.component.html',
  styleUrls: ['./date-container.component.css']
})
export class DateContainerComponent implements OnInit {

  monthSelected: string;
  months: string[];

  @Input('currentYear') currentYear;
  @Input('currentMonth') currentMonth;

  @Output() monthSelect = new EventEmitter();

  constructor() {
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  }

  ngOnInit() {
    this.monthSelected = this.currentMonth;
  }

  select(monthSelected) {
    this.monthSelected = monthSelected;
    this.monthSelect.emit({ month: monthSelected, year: this.currentYear });
  }
}
