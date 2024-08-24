import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() slides: Slide[] = [];
 
  activeSlideIndex = 0;
}
interface Slide {
  image: string;
  title: string;
  description: string;
  btns?:{name:string,routerLink:string}[]
}
