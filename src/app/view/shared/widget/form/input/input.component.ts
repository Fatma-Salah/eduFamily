import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnChanges{

  @Input() type:string='text';
  @Input() width:string='200px';
  @Input() value:string='';
  @Input() label:string='';
  @Input() fontSize:string='16px';
  @Input() placeholder:string=this.label;
  @Input() name:string='';
  @Input() readonly=false;
  @Input() control:FormControl =new FormControl();

  ngOnChanges(changes: SimpleChanges): void {
if(changes['label']){
  this.placeholder='please choose  '+this.label
}
  }
}
