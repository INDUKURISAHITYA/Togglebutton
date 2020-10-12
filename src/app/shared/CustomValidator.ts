import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customValidation(name: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbiddenName = name.test(control.value);
    return forbiddenName ? { forbidden: { value: control.value } } : null;
  };
}
