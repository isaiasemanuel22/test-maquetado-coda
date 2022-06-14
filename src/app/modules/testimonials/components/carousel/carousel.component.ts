import { AfterViewInit, Component, ContentChildren, HostListener, OnInit, QueryList, ViewChild } from '@angular/core';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';


export class Point{
  state:boolean = false
  index:number = -1
}


@Component({
  selector: 'carousel-coda',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit, AfterViewInit {


  totalCards: number = 0
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number = 1;
  totalPages!: number;
  overflowWidth!: string;
  cardWidth!: string;
  containerWidth!: number;

  @ContentChildren(TestimonialCardComponent) contentChildren!: QueryList<TestimonialCardComponent>;
  
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }



  points:Point[] = []

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.totalCards = this.contentChildren.length;
    this.contentChildren.forEach((element , index) =>{
      if(this.points.length == 0){
        this.points.push({
          state:true,
          index:index
        })
      }else{
        this.points.push({
          state:false,
          index:index
        })
      }
    } )
  }


  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  changeActive(index:number){
    this.points.find(element => element.state == true)!.state = false;
    this.points[index].state = true;
  }

  getCardsPerPage() {
   // return Math.floor(this..nativeElement.offsetWidth / 300);
   return 1
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }
}
