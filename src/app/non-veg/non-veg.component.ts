import { Component } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { FooterComponent } from '../layouts/footer/footer.component';

@Component({
  selector: 'app-non-veg',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './non-veg.component.html',
  styleUrl: './non-veg.component.css'
})
export class NonVegComponent {

}
