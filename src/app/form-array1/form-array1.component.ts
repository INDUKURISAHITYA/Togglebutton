import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidatorService } from '../validator.service';

@Component({
  selector: 'app-form-array1',
  templateUrl: './form-array1.component.html',
  styleUrls: ['./form-array1.component.css'],
})
export class FormArray1Component implements OnInit {
  name = this.valid.validateForm.firstName;
  pay = this.valid.validateForm.mobileNo;

  // arr: FormArray;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public valid: ValidatorService
  ) {}

  ngOnInit(): void {}

  public myForm = this.fb.group({
    arr: this.fb.array([this.createItem()]),
  });

  createItem(): FormGroup {
    return this.fb.group({
      name: this.name,
      pay: this.pay,
    });
  }

  get arr()
  {
     return this.myForm.get('arr') as FormArray;
  }

  addItem() {
    this.arr.push(this.createItem());
  }

  onSubmit() {
    let data: any = this.myForm.value;
    this.router.navigate(['/bind'], {
      queryParams: { data: JSON.stringify(data) },
    });
  }

  remove(i)
  {
    this.arr.removeAt(i);
  }
}
