import { Component } from '@angular/core'; 
import { LoadingService } from '../../../../core/services/interceptorServices/loading.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  loading:boolean=true;
  constructor(private loadingService: LoadingService) {
    loadingService.loading$.subscribe(
      (status)=>{
        this.loading=status
        
      }
    ) 
    
  }
}
