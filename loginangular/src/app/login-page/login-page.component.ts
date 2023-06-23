import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('https://reqres.in/api/login', loginData).subscribe(
      (response: any) => {

        this.showSuccessAlert();

        window.location.href = '/home';
      },
      (error: any) => {

        this.showErrorAlert(error.error.error);
      }
    );
  }

  showErrorAlert(errorMessage: string) {
    alert('Login Failed: ' + errorMessage);
  }

  showSuccessAlert() {
    alert('Login Successful');
  }
}
