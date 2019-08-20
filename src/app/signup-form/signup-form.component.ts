import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  Salutions: any = ['Mrs.', 'Ms.', 'Miss', 'Dr.', 'Mr.']

  Country: any = ['Abu Dhabi', 'India', 'United State', 'United Kingdom', 'China', 'Japan', 'Singapore']

signupProfileForm = this.fb.group({  

  salutions: ['', [Validators.required]],
  firstName: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
  lastName: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
  email: ['', [Validators.required]],
  phone: ['', [Validators.required, Validators.minLength(10)]],
  address: ['',[Validators.required]],
  areaCode: ['', [Validators.required]],
  streetAddress: ['', [Validators.required]],
  streetAddressLine2: ['', [Validators.required]],
  city: ['', [Validators.required]],
  state: ['', [Validators.required]],
  postal: ['', [Validators.required]],
  country: ['', [Validators.required]],
  comments: ['', [Validators.required]]
});

  constructor(private  fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.signupProfileForm.value);
  }
  get salutions() {
    return this.signupProfileForm.get('salutions');
  }
  get firstName(){
    return this.signupProfileForm.get('firstName');
  }
  get lastName() {
    return this.signupProfileForm.get('lastName');
  }
  get email() {
    return this.signupProfileForm.get('email');
  }
  get phone() {
    return this.signupProfileForm.get('phone');
  }
  get address(){
    return this.signupProfileForm.get('address');
  }
  get areaCode() {
    return this.signupProfileForm.get('areaCode');
  }
  get streetAddress() {
    return this.signupProfileForm.get('streetAddress');
  }
  get streetAddressLine2() {
    return this.signupProfileForm.get('streetAddressLine2');
  }
  get city() {
    return this.signupProfileForm.get('city');
  }
  get state() {
    return this.signupProfileForm.get('state');
  }
  get postal() {
    return this.signupProfileForm.get('postal');
  }
  get country() {
    return this.signupProfileForm.get('country');
  }
  get comments() {
    return this.signupProfileForm.get('comments');
  }
}
