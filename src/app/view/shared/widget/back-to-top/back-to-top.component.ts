import { Component, HostListener } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [],
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent { 
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  // Listen to window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const backToTopButton = this.el.nativeElement.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
      this.renderer.setStyle(backToTopButton, 'display', 'block');
    } else {
      this.renderer.setStyle(backToTopButton, 'display', 'none');
    }
  }

  // Scroll to top functionality
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
