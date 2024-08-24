import { Component } from '@angular/core';
import { CarouselComponent } from "../../shared/widget/carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  carouselSlides = [
    {
      image: 'assets/images/photo-1513542789411-b6a5d4f31634.avif',
      title: 'best online courses',
      description: 'get educated online from your home',
      btns:[
        {name:"sign in",routerLink:'login'},
        {name:"Join us",routerLink:'register'},
      ]
    }
  ];
}
