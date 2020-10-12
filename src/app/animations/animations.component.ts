import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../validator.service';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],

})
export class AnimationsComponent implements OnInit {
 
  public firstForm: FormGroup;
  public secondForm : FormGroup;
  public form1= true;
  public form2 = false;
  public btn2 =false;
  public no =true;
  constructor(public validation: ValidatorService, public fb : FormBuilder) { }


  ngOnInit(): void {
    this.form();
  }

  form() {
    this.firstForm = this.fb.group({
      name: this.validation.validateForm.firstName,
      email: this.validation.validateForm.email,
    });
    this.secondForm = this.fb.group({
      name1: this.validation.validateForm.firstName,
      mobile: this.validation.validateForm.mobileNo,
    });
  }

  No()
  {
    this.form1 = false;
    this.btn2 = true;
    this.form2 = true;
    this.no = true;
    this.firstForm.reset();
  }

  yes()
  {
    this.form1 = true;
    this.form2 = false;
    this.no = true;
    this.secondForm.reset();
  
  }

  yes1()
  {
   this.form1 =false;
   this.form2 = true;
   this.no = true;
  }

  No1()
  {
   this.form2 =false;
   this.no = false;
   this.secondForm.reset();
   this.firstForm.reset();
  }
}
