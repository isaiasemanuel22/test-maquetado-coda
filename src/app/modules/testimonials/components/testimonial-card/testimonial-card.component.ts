import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {


  @Input() testimonial:any;


  width!:number
  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit(){
  }
}
