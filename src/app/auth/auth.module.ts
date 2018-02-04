import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import {AuthStoreService} from "./store/auth-store.service";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ],
  providers: [
    AuthStoreService
  ]
})
export class AuthModule {}
