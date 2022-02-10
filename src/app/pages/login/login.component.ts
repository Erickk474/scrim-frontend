import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserValidators } from '../../shared/classes/form-validators/user-validator';
import { UserService } from '../../shared/services/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private userService: UserService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.form = this.fb.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [null, Validators.compose([Validators.required])],
    });
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

  public authUser() {
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
