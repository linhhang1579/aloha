import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragScrollModule } from 'ngx-drag-scroll';

import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MaterialConfigurationModule } from '../shared/material-configuration/material-configuration.module';

@NgModule({
  declarations: [
    MenuListComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    DragScrollModule,
    MaterialConfigurationModule
  ]
})
export class MenuModule {
}
