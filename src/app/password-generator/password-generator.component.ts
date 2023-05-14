import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})


export class PasswordGeneratorComponent implements OnInit {
  password: string;
  includeNumbers: boolean = false;
  includeLetters: boolean = false;
  includeSymbols: boolean = false;
  passwordLength: number = null;
  generatedPassword: string = '';
  errorMessage: string = '';

  constructor() {
    this.password = '';

  }
  generatePassword(): void {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_+';
    let validChars = '';

    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    if (this.passwordLength < 6 || this.passwordLength > 16) {
      this.errorMessage = 'Password length should be between 6 and 16';
      return;
    } else {
      this.errorMessage = '';
    } 

    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }

    this.generatedPassword = password;
  }

  ngOnInit() {
  }

}

