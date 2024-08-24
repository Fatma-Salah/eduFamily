import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';


const module=[
  CommonModule,ReactiveFormsModule,HttpClientModule,RouterOutlet
]
@NgModule({
  declarations: [],
  imports: [
    ...module
  ],
  exports:[...module]
})
export class SharedModule { }
