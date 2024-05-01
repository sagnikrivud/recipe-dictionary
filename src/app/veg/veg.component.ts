import { Component } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { FooterComponent } from '../layouts/footer/footer.component';

@Component({
  selector: 'app-veg',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './veg.component.html',
  styleUrl: './veg.component.css'
})
export class VegComponent {

}
