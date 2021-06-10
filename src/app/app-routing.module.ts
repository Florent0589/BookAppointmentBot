import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {ChatterComponent} from './chatter/chatter.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'chatter', component: ChatterComponent },

  // otherwise redirect to home
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
