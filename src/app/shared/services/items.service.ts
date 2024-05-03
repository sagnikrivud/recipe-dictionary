import { Injectable, inject } from '@angular/core';
import { Firestore } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { IFood } from '../Interfaces/food.model';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  item$!: Observable<IFood[]>; //! = (Non null assertion operator)
  firestore: Firestore = inject(Firestore);
  constructor() {
    
  }
  getItems(){  

  }

}
