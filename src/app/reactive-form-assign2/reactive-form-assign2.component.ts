import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-assign2',
  templateUrl: './reactive-form-assign2.component.html',
  styleUrls: ['./reactive-form-assign2.component.css']
})
export class ReactiveFormAssign2Component implements OnInit {
  userDetailsForm: FormGroup;
  accountDetailsForm: FormGroup;

  //username validation- symbol not allowed in username
  notAllowedNames = ['`!@#$%^&*()_+?'];

  genders = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' }
  ];

  //checkbox validation
  // isCheckboxChecked: boolean = false;

  //country validation with country code
  countries: { name: string; code: string }[] = [
    { name: 'USA', code: '+1' },
    { name: 'Canada', code: '+1' },
    { name: 'UK', code: '+44' },
    { name: 'Australia', code: '+61' },
    { name: 'India', code: '+91' }
  ];

  constructor() {
   
   }

  ngOnInit(): void {
    this.userDetailsForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      countryCode: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{1,4}$')
      ]),
      phone: new FormControl('', Validators.required),
      bio: new FormControl('', Validators.required),
      termsAndConditions: new FormControl(false, Validators.requiredTrue)
    });

    this.accountDetailsForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required)
    }, { validators: this.passwordMatchValidator });
    
  }

  //user name validation
  //we create instances of form control and form group classes, both these classes derived from the AbstractControl base class.
  //.test- used to check if the username matches the defined pattern.
  validateUsername(control: AbstractControl): ValidationErrors | null {
    const username = control.value;
    const pattern = /^[a-zA-Z0-9]+$/;

    if (username && !pattern.test(username)) {
      return { pattern: true };
    }

    return null;
  }


  // //checkbox validation - only enable submit button when checkbox is checked
  // updateSubmitButtonStatus(checked: boolean): void {
  //   this.isCheckboxChecked = checked;
  // }

  // Declare the 'submitButtonDisabled' property
  submitButtonDisabled: boolean = true;

  //passward confirmation validation
  //AbstractControl is object as a parameter
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmpassword').value;

    //'!==' -values do not match ,password is not same
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  }
onSubmit(): void {
  if (this.userDetailsForm.valid && this.accountDetailsForm.valid) {
    // Both forms are valid, process the form data

    // Access the form values
    const userDetails = this.userDetailsForm.value;
    const accountDetails = this.accountDetailsForm.value;

    // Perform any necessary actions with the form data
    console.log('User Details:', userDetails);
    console.log('Account Details:', accountDetails);

    // Reset the forms
    this.userDetailsForm.reset();
    this.accountDetailsForm.reset();
  }
}

  }
  




