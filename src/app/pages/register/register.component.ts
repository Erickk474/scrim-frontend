import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserValidators } from '../../shared/classes/form-validators/user-validator';
import { UserService, UserPayload } from '../../shared/services/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup;

  // Form settings
  public nickMinLength: number = 2;
  public nickMaxLength: number = 16;
  public nameMinLength: number = 3;
  public nameMaxLength: number = 30;
  public passwordMinLength: number = 8;

  constructor(
    private userService: UserService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  public fillAllFormFields() {
    this.form.setValue({
      confirmPassword: '123_@ABCd',
      email: 'kinho@gmail.com',
      firstName: 'joao',
      lastName: 'silva',
      nickname: 'Killer',
      password: '123_@ABCd',
    });
  }

  public createForm() {
    this.form = this.fb.group(
      {
        firstName: [
          null,
          Validators.compose([
            Validators.required,
            UserValidators.patternValidator(/\d/, { hasNumber: true }, true),
            Validators.minLength(this.nameMinLength),
            Validators.maxLength(this.nameMaxLength),
          ]),
        ],

        lastName: [
          null,
          Validators.compose([
            Validators.required,
            UserValidators.patternValidator(/\d/, { hasNumber: true }, true),
            Validators.minLength(this.nameMinLength),
            Validators.maxLength(this.nameMaxLength),
          ]),
        ],

        nickname: [
          null,
          Validators.compose([
            Validators.required,
            UserValidators.patternValidator(/\d/, { hasNumber: true }, true),
            Validators.minLength(this.nickMinLength),
            Validators.maxLength(this.nickMaxLength),
          ]),
        ],

        email: [
          null,
          Validators.compose([Validators.required, Validators.email]),
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(this.passwordMinLength),
            UserValidators.patternValidator(/\d/, { hasNumber: true }),
            UserValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true,
            }),
            UserValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
            UserValidators.patternValidator(/[@#$\^%&_]/, {
              hasSpecialCharacters: true,
            }),
          ]),
        ],
        confirmPassword: [null, Validators.compose([Validators.required])],
      },
      { validator: UserValidators.passwordMatchValidator }
    );
  }

  public checkField(field: string, error: string) {
    return this.form.controls[field].hasError(error);
  }

  public checkValid(field: string) {
    return (
      this.form.controls[field] &&
      this.form.controls[field].touched &&
      this.form.controls[field].invalid
    );
  }

  public createUser() {
    console.log(this.form.value);
    this.emitModalSuccess();
    // const payload: UserPayload = { username, email, password };
    // this.userService.create(payload).subscribe(
    //   (res: any) => {
    //     this.emitModalSuccess();
    //   },
    //   ({ error }) => {
    //     this.emitModalError('Oops', error.message);
    //   }
    // );
  }

  public emitModalSuccess() {
    Swal.fire({
      title: 'Created successfuly',
      text: 'Your account has been created, now you can log in',
      icon: 'success',
      confirmButtonText: 'Confirm',
    }).then(() => {
      this.route.navigate(['login']);
    });
  }

  public emitModalError(title: string, text: string = 'An error has ocurred') {
    Swal.fire({
      title,
      text,
      icon: 'error',
      timer: 2000,
      showConfirmButton: false,
    });
  }
}
