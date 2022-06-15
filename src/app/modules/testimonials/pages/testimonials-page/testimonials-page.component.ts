import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-page',
  templateUrl: './testimonials-page.component.html',
  styleUrls: ['./testimonials-page.component.scss']
})
export class TestimonialsPageComponent implements OnInit {


  testimonials = [ {
    name: 'Nancy Briggs',
    profesion: 'Practitioner',
    post: "I now understand the power of Lorem ipsum for healing the body, mind and spirit. I'm very fortunate to connect with certified Lorem ipsum practitioner Nancy Briggs. My 13-year-old son had severe depression and also an invasive anxiety has plagued him.",
    date: '15/12/2021  ·  8:15 AM',
    origin : 'Fear/ Phobia- Afraid to Drive'
  },
  {
    name: 'Adreia Bin',
    profesion: 'Member',
    post: "Quando recebi minha 1 sessão de enterprise no inicio da minha formação, a primeira coisa que me veio a cabeça foi...noooossaaa isso é magnifico e na mesma semana testei em meu filho de 8 anos que até então apresentava enurese noturna e já havia testado varias outras técnicas. Fazem 2 meses que fiz e com apenas 3 sessões essa questão dele já foi solucionada. Isso me mostra mais ainda que estou no caminho certo. Gratidão.",
    date: '15/12/2021  ·  8:15 AM',
    origin : 'Maravilhoso'
  },
  {
    name: 'Charlene Cooper',
    profesion: 'Member',
    post: "I received this lovely email from the handler of one of the CARDA Search & Rescue canines, a group I volunteer with to aid in the release of secondary PTSD.",
    date: '15/12/2021  ·  8:15 AM',
    origin : 'Search & Rescue Canine'
  },
  {
    name: 'Charlene Cooper',
    profesion: 'Member',
    post: "I received this lovely email from the handler of one of the CARDA Search & Rescue canines, a group I volunteer with to aid in the release of secondary PTSD.",
    date: '15/12/2021  ·  8:15 AM',
    origin : 'Search & Rescue Canine'
  }
  

]

  constructor() { }

  ngOnInit(): void {
  }

}
