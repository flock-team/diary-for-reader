import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { WelcomeRoutingModule } from "./welcome-routing.module";
import { WelcomeComponent } from "./welcome/welcome.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { WelcomeDialogComponent } from './welcome-dialog/welcome-dialog.component';

@NgModule({
  declarations: [WelcomeComponent, WelcomeDialogComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  entryComponents: [WelcomeComponent]
})
export class WelcomeModule {}
