import { Component } from '@angular/core';
import { NavbarComponent } from "../../core/includes/navbar/navbar.component";
import { FooterComponent } from "../../core/includes/footer/footer.component";
import { SharedModule } from '../../../shared/modules/shared.module';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,SharedModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
