import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'backbutton',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  templateUrl: './backbutton.component.html',
  styleUrl: './backbutton.component.css'
})
export class BackbuttonComponent {
  isHomePage: boolean = false;

  constructor(private router: Router) { 

  }
  /**
   * Initiate on Footer load
   */
  ngOnInit(): void {
    this.isHomePage = this.router.url === '/';
  }
  goBack() {
    this.router.navigate(['/']); // Navigate back to the previous page
  }
}
