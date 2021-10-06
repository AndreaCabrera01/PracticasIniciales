import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicacionesListComponent } from './components/publicaciones-list/publicaciones-list.component';
import { PublicacionesFormComponent } from './components/publicaciones-form/publicaciones-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PerfilComponent} from './components/perfil/perfil.component';
import { PublicacionesComentariosComponent } from './components/publicaciones-comentarios/publicaciones-comentarios.component';
import { PublicacionesComentariosListComponent} from './components/publicaciones-comentarios-list/publicaciones-comentarios-list.component';


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
    path: 'perfil/:id',
    component: PerfilComponent
  },
  {
    path: 'publicaciones/comentarios/:id',
    component: PublicacionesComentariosComponent
  },
  {
    //AGREGAR EL VER COMENTARIOS
    path: 'publicaciones/vercomentarios/:id',
    component: PublicacionesComentariosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
