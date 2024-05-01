import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'section-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isHomePage: boolean = false;

  constructor(private router: Router, private _location: Location) { 

  }
  /**
   * Initiate on Footer load
   */
  ngOnInit(): void {
    this.isHomePage = this.router.url === '/';
  }
  goBack() {
    this._location.back();
  }
}
