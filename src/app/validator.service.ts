import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import {customValidation} from './shared/CustomValidator';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  validateForm = {
    firstName: [
      '',
      [
        Validators.required,
        Validators.pattern('^[A-z]*$'),
        Validators.minLength(3),
        Validators.maxLength(50),
        customValidation(/password/)
      ],
    ],
    mobileNo: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    checkBox: [false],
    password: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9]*$')]],
    confirmPassword: ['', [Validators.required]]
  };
}
