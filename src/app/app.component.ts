import { Component, OnInit } from '@angular/core';
import { HttpClientService } from './core/services/http-client.service'; 
import { LoaderComponent } from './view/shared/widget/loader/loader.component';
import { SharedModule } from './shared/modules/shared.module'; 
import { BackToTopComponent } from "./view/shared/widget/back-to-top/back-to-top.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, LoaderComponent, BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[HttpClientService]
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private ser:HttpClientService) {}
  ngOnInit(): void {
    this.ser.get('home').subscribe((d)=>{console.log(d)}
    )
  }
  title = 'eduFamily'; 
}
