import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { PeliculasListComponent } from "./components/peliculas-list.component";
import { PeliculasFooterComponent } from "./components/peliculas-footer.component";
import { ContactoComponent } from "./components/contacto.component";
import { CrearPeliculaComponent } from "./components/crear-pelicula.component";


@NgModule({
  imports:      [ BrowserModule, routing, FormsModule],
  declarations: [ AppComponent, PeliculasListComponent, PeliculasFooterComponent, ContactoComponent, CrearPeliculaComponent],
  providers: 	[ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
