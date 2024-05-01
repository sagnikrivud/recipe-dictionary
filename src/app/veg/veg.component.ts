import { Component } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { RouterModule } from '@angular/router';
import { BackbuttonComponent } from '../layouts/backbutton/backbutton.component';

@Component({
  selector: 'app-veg',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, BackbuttonComponent],
  templateUrl: './veg.component.html',
  styleUrl: './veg.component.css'
})
export class VegComponent {

}
