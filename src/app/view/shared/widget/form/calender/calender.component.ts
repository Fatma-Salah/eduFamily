import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [CalendarModule, FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {
  // date2: Date | undefined;
  @Input() title:string='';
  @Input() width:string='200px';
  @Input() name:string='';
  @Input() control:FormControl =new FormControl(); 
  
}
