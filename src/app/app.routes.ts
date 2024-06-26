import { Routes } from '@angular/router';
import { VegComponent } from './veg/veg.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { DessertComponent } from './dessert/dessert.component';
import { JuiceComponent } from './juice/juice.component';
import { HomeComponent } from './home/home.component';
import { VegItemComponent} from './veg/items/items.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'veg', component: VegComponent },
  { path: 'non-veg', component: NonVegComponent },
  { path: 'dessert', component: DessertComponent },
  { path: 'juice', component: JuiceComponent },
  { path: 'veg/items', component:VegItemComponent},
  { path: 'contact/us', component:ContactusComponent}
];
