import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cart',
  templateUrl: './login-cart.component.html',
  styleUrls: ['./login-cart.component.css']
})
export class LoginCartComponent implements OnInit {
  loginForm: FormGroup;
  formBuilder: any;

  constructor(private fb: FormBuilder, private http: HttpClient,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  submitForm(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.http.post('http://localhost:3000/login', loginData).subscribe(
        (response) => {
          console.log('Login successful');
          // Perform necessary actions after successful login
        },
        (error) => {
          console.log('Login failed');
          // Handle login failure
        }
      );
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {
    this.http.post<any>("http://localhost:3000/loginUser",this.loginForm.value).subscribe(res=>{
      alert("Login Successfull");
      this.loginForm.reset();
      this.router.navigate(['homepage']);
    },error=>{
      alert("Login Failed");
    })
    if (this.loginForm.invalid) {
      return;
    }
  // Perform login logic here (e.g., API call, authentication, etc.)
  const email = this.email.value;
  const password = this.password.value;

  // Clear form fields after successful login
  this.loginForm.reset();
 
  }
  
}
 