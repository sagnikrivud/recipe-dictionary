import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../layouts/header/header.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, HttpClientModule, FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  formData: any = {};

  constructor(private http: HttpClient) {}
  onSubmit(form: any) {
    if (!form.valid) {
      return;
    }
    // this.http.post<any>('your-api-endpoint', this.formData)
    //   .subscribe(response => {
    //     console.log('Form submitted successfully!', response);
    //     // Optionally, you can handle the response here
    //   }, error => {
    //     console.error('Error submitting form:', error);
    //     // Optionally, you can handle the error here
    //   });
    console.log('Form submitted successfully!');
  }
}
