import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-common',
  templateUrl: './button-common.component.html',
  styleUrls: ['./button-common.component.scss'],
})
export class ButtonCommonComponent implements OnInit {
  @Input() text!: string;
  isBtnTriggered!: boolean;

  @Output() onBtnClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  btnFunction() {
    this.onBtnClick.emit();
  }

  handleMousedown() {
    return (this.isBtnTriggered = true);
  }

  handleMouseup() {
    return (this.isBtnTriggered = false);
  }

  ngOnInit(): void {}
}
