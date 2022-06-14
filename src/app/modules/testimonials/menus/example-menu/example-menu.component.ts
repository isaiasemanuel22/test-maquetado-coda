import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'example-menu',
  templateUrl: './example-menu.component.html',
  styleUrls: ['./example-menu.component.scss']
})
export class ExampleMenuComponent implements OnInit {

  @Input() set testimonials(testimonials:any[]){
    this.userTestimonials = testimonials
  }

  userTestimonials:any[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
