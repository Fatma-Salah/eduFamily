import { CommonModule, Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back.component.html',
  styleUrl: './back.component.css'
})
export class BackComponent {
constructor(private loc:Location) {}
  @Input() content:string='back';
  back(){
    this.loc.back()
  }
}
