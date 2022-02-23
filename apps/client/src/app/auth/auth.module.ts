import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [
    RouterModule.forRoot([
      {
        path: 'auth/login',
        component: LoginComponent,
      },
      {
        path: 'auth/forgot-password',
        component: ForgotPasswordComponent,
      },
    ]),
  ],
})
export class AuthModule {}
