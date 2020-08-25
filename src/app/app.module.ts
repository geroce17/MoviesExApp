import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { app_routing } from './app.routes';

// services
import { PeliculasService } from './services/peliculas.service';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
