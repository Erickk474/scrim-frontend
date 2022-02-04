import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

const registerRouter: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];

export const RegisterRouting: ModuleWithProviders<any> =
  RouterModule.forChild(registerRouter);