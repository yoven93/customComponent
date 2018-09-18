import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {

  @Input() label: string;

  @Input('on') on: boolean;
  knobStyle: string;

  @Output() onToggle: EventEmitter<Boolean>;

  constructor() {
    this.on = false;
    this.onToggle = new EventEmitter<Boolean>();
  }

  toggle() {
    this.on = !this.on;
    // this.applyKnobStyle();
    this.onToggle.emit(this.on);
  }

  // applyKnobStyle() {
  //   this.on ? this.knobStyle = 'knob on' : this.knobStyle = 'knob';
  // }
}
