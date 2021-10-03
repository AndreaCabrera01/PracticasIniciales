import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicacionesListComponent } from './components/publicaciones-list/publicaciones-list.component';
import { PublicacionesFormComponent } from './components/publicaciones-form/publicaciones-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent
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
  },
  {
    path: 'publicaciones/ver/:id',
    component: PublicacionesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
