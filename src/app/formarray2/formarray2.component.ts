import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../validator.service';
import {passwordValidator} from '../shared/passwordValidator';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formarray2',
  templateUrl: './formarray2.component.html',
  styleUrls: ['./formarray2.component.css'],
})
export class Formarray2Component implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private validation: ValidatorService) {}

  ngOnInit() {
    this.createItem();
  }

  createItem() {
    this.myForm = this.fb.group({
      name: this.validation.validateForm.firstName,
      mobile: this.validation.validateForm.mobileNo,
      email: this.validation.validateForm.email,
      checkBox: this.validation.validateForm.checkBox,
      confirmPassword: this.validation.validateForm.confirmPassword,
      password: this.validation.validateForm.password
    }, { validator: passwordValidator});

    this.myForm.get('checkBox').valueChanges.subscribe((checkBox) => {
      const emailModify = this.myForm.get('email');
      if (checkBox) {
        emailModify.setValidators([Validators.required, Validators.email]);
      } else {
        emailModify.clearValidators();
      }
      emailModify.updateValueAndValidity();
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
