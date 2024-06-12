import { Component } from '@angular/core';
import { DefaultLayoutCrudComponent } from '../../components/default-layout-crud/default-layout-crud.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLayoutCrudComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
