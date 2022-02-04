import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRouter: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

export const LoginRouting: ModuleWithProviders<any> =
  RouterModule.forChild(loginRouter);