import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormBuilder } from '@angular/forms';
import { MaterialModule } from '../../material/material.module'



@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ],
  providers: [FormBuilder]
})
export class LoginModule { }
