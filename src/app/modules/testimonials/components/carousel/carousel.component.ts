import { AfterViewInit, Component, ContentChildren, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild } from '@angular/core';
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

export class CarouselComponent implements OnInit {




  /*arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15];
  totalCards: number = 0
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number = 1;
  totalPages!: number;
  overflowWidth!: string;
  cardWidth!: string;
  containerWidth!: number;

  @ViewChild("container", { static: true, read: ElementRef })
  container!: ElementRef;

  
  
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
  changePage(incrementor:any) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }*/


  arr: any[] = [];
  totalCards: number =0
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number = 1;
  totalPages!: number;
  overflowWidth!: string;
  cardWidth!: string;
  containerWidth!: number;
  points:Point[] = []

  @Input() set arrayCards (cards:any[]){
    this.arr = cards;
    this.totalCards = this.arr.length;
  }

  @ViewChild("container", { static: true, read: ElementRef })
  container!: ElementRef;
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

  ngOnInit() {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
  }

  ngAfterViewInit(){

   

  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.calcPoints();
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}%) / ${this.cardsPerPage})`;

      console.log(this.totalPages)
      console.log(this.overflowWidth);
      console.log(this.cardWidth);
      console.log(this.cardsPerPage);
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 400);
  }

  changePage(incrementor:any) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
      
     this.changeActive(this.currentPage-1); 
  }

  
  changeActive(index:number){
    this.points.find(element => element.state == true)!.state = false;
    this.points[index].state = true;
  }

  calcPoints(){
    this.points = []
    for(let i = 0; i < this.totalPages; i++ ){
      if(this.points.length == 0){
        this.points.push({
          state:true,
          index:i
        })
      }else{
        this.points.push({
          state:false,
          index:i
        })
      }
    }

    this.changeActive(this.currentPage-1);
  }
}
