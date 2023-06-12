import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-reactive-form-assig',
  templateUrl: './reactive-form-assig.component.html',
  styleUrls: ['./reactive-form-assig.component.css']
})
export class ReactiveFormAssigComponent implements OnInit {
  myReactiveForm: FormGroup;
  myReactiveForm1: FormGroup;
  submitted = false;
  genders = [
    { id : '1', value: 'Male'},
    { id: '2', value: 'Female'}
  ]
  countryArr = ['India', 'USA', 'UK', 'Japan', 'France', 'Canada'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myReactiveForm = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(10)]],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10), this.customPhoneValidator]],
                bioTextArea: ['', Validators.required]
    });

    this.myReactiveForm1 = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('[a-zA-Z0-9]+')
      ]],  
      email: ['', [
        Validators.required,Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
      ]],
                  password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  onSubmit(): void {
    this.submitted = true;



    // Process the form data
    console.log('Form submitted');
    console.log('User Details:', this.myReactiveForm.value);
    console.log('Account Details:', this.myReactiveForm1.value);
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password').value;
    const confirmPassword = formGroup.get('confirmpassword').value;

    if (password !== confirmPassword) {
      formGroup.get('confirmpassword').setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmpassword').setErrors(null);
    }
  }

  // Custom phone number validator function
customPhoneValidator(control: AbstractControl): ValidationErrors | null {
  const phoneNumber = control.value;
  const pattern = /^[0-9]{10}$/; // Regular expression pattern for a 10-digit phone number

  if (!pattern.test(phoneNumber)) {
    return { invalidPhone: true }; // Return a ValidationErrors object if the phone number is invalid
  }

  return null; // Return null if the phone number is valid
}
}