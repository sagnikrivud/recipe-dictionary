import { Component, inject } from '@angular/core';
import { Firestore } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { IFood } from '../../shared/Interfaces/food.model';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  
}
