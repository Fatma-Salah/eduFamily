
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-next-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './next-btn.component.html',
  styleUrl: './next-btn.component.css',
})
export class NextBtnComponent {
@Input() content:string='save';
@Input() padding:string='0px 40px';
@Input() bg:string="var(--mainColor)";
@Input() isLoading:boolean=false;
@Input() disabled:boolean=false;

}
