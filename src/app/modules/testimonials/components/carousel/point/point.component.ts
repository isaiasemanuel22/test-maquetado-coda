import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  @Input() set activeButton (active:boolean){
    this.active = active;
  }
  @Input() index = -1; 

  @Output() setButton = new EventEmitter<number>()
  active = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeActive(){
    this.setButton.emit(this.index);
    this.active = true;
  }
}
