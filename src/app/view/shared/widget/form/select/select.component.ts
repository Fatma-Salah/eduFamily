import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-select',
  standalone: true,
  animations:[],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
  imports: [DropdownModule,ReactiveFormsModule,CommonModule]
})
export class SelectComponent  implements OnInit {
  @Input() options: {name:string,code?:any}[] = [];
  @Input() placeholder:string='';
  @Input() name:string='';
  @Input() title!:string;
  @Input() width:string='200px';
  @Input() control:FormControl =new FormControl();
  ngOnInit() {
   this.options[0]?this.placeholder= 'please choose  '+this.title:'';
  }

}

