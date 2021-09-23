import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicacionesListComponent } from './components/publicaciones-list/publicaciones-list.component';
import { PublicacionesFormComponent } from './components/publicaciones-form/publicaciones-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'publicaciones',
    component: PublicacionesListComponent
  },
  {
    path: 'publicaciones/add',
    component: PublicacionesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
