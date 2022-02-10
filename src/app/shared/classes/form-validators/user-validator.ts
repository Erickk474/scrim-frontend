import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class UserValidators {
  static patternValidator(
    regex: RegExp,
    error: ValidationErrors,
    denyExp: boolean = false
  ): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return {};
      }

      if (denyExp) {
        return !regex.test(control.value) ? {} : error;
      } else {
        return regex.test(control.value) ? {} : error;
      }
    };
  }

  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password')?.value;
    const confirmPassword: string = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ NoPasswordMatch: true });
    }
  }
}
