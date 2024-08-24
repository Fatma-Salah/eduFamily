import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [MultiSelectModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent  implements OnInit {
  @Input() options: {id:number ,name:string}[]  = [{name:"...",id:1,}]
  @Input() placeholder:string='';
  @Input() name:string='';
  @Input() title:string='';
  @Input() width:string='200px';
  @Input() control:FormControl =new FormControl();

  ngOnInit() {
   this.options[0]?this.placeholder='please choose  '+this.title:'';
  }

}


