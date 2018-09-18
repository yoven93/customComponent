import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {

  }

  // ngx-translate
  user = { name: 'yoven', age: 25 };

  toggleButtonStatus: boolean;
  toggleButtonState: string;

  currentYear: number;
  currentMonth: string;
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  ngOnInit() {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = this.months[currentDate.getMonth()];

    this.toggleButtonStatus = true;
    this.toggleButtonStatus ? this.toggleButtonState = 'ON' : this.toggleButtonState = 'OFF';

    console.log(environment.environmentName);
    console.log(window.navigator.language);
    this.switchLanguage(window.navigator.language);

    this.translate.setDefaultLang('en');
  }

  changeMe() {
    this.toggleButtonStatus = !this.toggleButtonStatus;
    console.log(this.toggleButtonStatus);
  }

  handleToggleButtonClick(toggleButtonStatus) {
    toggleButtonStatus ? this.toggleButtonState = 'ON' : this.toggleButtonState = 'OFF';
  }

  previous() {
    this.currentYear = this.currentYear - 1;
  }

  next() {
    this.currentYear = this.currentYear + 1;
    if (this.currentYear > new Date().getFullYear()) {
      this.currentYear = new Date().getFullYear();
    }
  }

  onMonthSelect(e) {
    console.log('Month Selected: ' + e.month);
    console.log('Month Index: ' + (this.months.indexOf(e.month) + 1));
    console.log('Year Selected: ' + e.year);
  }



  /**
   * ngx-translate
   */
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
