import { Component } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { FooterComponent } from '../layouts/footer/footer.component';

@Component({
  selector: 'app-juice',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './juice.component.html',
  styleUrl: './juice.component.css'
})
export class JuiceComponent {

}
