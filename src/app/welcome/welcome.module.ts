import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ResetDialogComponent } from './reset-dialog/reset-dialog.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    LoginFormComponent,
    SignupFormComponent,
    ResetDialogComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [WelcomeComponent, LoginFormComponent, SignupFormComponent],
})
export class WelcomeModule {}
