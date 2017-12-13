import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GnomeListComponent} from './gnomes/gnome-list/gnome-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: GnomeListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
