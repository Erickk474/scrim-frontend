import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public inputData: any = {
    name: '',
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  public setValue(event: any, data: string) {
    this.inputData[data] = event;
  }

  public show() {
    console.log(this.inputData);
  }
}
