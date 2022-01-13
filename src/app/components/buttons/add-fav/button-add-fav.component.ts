import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-add-fav',
  templateUrl: './button-add-fav.component.html',
  styleUrls: ['./button-add-fav.component.scss'],
})
export class ButtonAddFavComponent implements OnInit {
  isBtnTriggered!: boolean;
  @Output() onAddClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  addBtnFunction() {
    this.onAddClick.emit();
  }

  handleMousedown() {
    return (this.isBtnTriggered = true);
  }

  handleMouseup() {
    return (this.isBtnTriggered = false);
  }
  ngOnInit(): void {}
}
