import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [
    MenuListComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
  ]
})
export class MenuModule {
}
