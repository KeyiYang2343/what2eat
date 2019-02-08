import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialInputBoxComponent } from './material-input-box/material-input-box.component';
import { MenuSelectorComponent } from './menu-selector/menu-selector.component';

const routes: Routes = [
	{path: 'web/materials', component: MaterialInputBoxComponent},
	{path: 'web/menus', component: MenuSelectorComponent},
	{path: '**', redirectTo: 'web/materials'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
