import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PeliculasListComponent} from "./components/peliculas-list.component";
import {ContactoComponent} from "./components/contacto.component";
import {CrearPeliculaComponent} from "./components/crear-pelicula.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'peliculas',
		pathMatch: 'full'
	},
	{path: "peliculas", component: PeliculasListComponent },
	{path: "crear-pelicula", component: CrearPeliculaComponent},
	{path: "crear-pelicula/:titulo/:director/:anio", component: CrearPeliculaComponent},
	{path: "contacto", component: ContactoComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);