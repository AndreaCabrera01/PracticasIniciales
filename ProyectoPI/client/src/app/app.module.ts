import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PublicacionesFormComponent } from './components/publicaciones-form/publicaciones-form.component';
import { PublicacionesListComponent } from './components/publicaciones-list/publicaciones-list.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FormsModule } from '@angular/forms';

import {PublicacionesService} from './services/publicaciones.service';
import { RegisterFormComponent } from './components/register-form/register-form.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PublicacionesFormComponent,
    PublicacionesListComponent,
    UsersFormComponent,
    UsersListComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PublicacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
