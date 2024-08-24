import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css'
})
export class TextareaComponent {

  @Input() height='200px'
  @Input() backGround='#fff'
  @Input() name:string='';
  @Input() placeholder:string='Write something interesting about you....';
  @Input() title:string='';
  @Input() control:FormControl =new FormControl();

  @Input() readonly=false;
}
