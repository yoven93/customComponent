import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggleButtonState: string;
  
  handleToggleButtonClick(toggleButtonStatus) {
    toggleButtonStatus? this.toggleButtonState = 'ON' : this.toggleButtonState = 'OFF';
  }
}
