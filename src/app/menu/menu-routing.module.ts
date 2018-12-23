import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuListComponent
  },
  {
    path: 'item',
    component: MenuItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
