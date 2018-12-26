import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragScrollModule } from 'ngx-drag-scroll/lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { MaterialConfigurationModule } from './material-configuration/material-configuration.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoadingScreenComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragScrollModule,
    MaterialConfigurationModule
  ],
  exports: [
    LoadingScreenComponent,
    DragScrollModule,
    MaterialConfigurationModule
  ]
})
export class SharedModule {
}
