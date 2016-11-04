import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";
import {ContactoComponent} from "./components/contacto.component";
import {CrearPeliculaComponent} from "./components/crear-pelicula.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/peliculas',
		pathMatch: 'full'
	},
	{path: "peliculas", component: PeliculasListComponent },
	{path: "crear-pelicula", component: CrearPeliculaComponent},
	{path: "crear-pelicula/:titulo/:director/:anio", component: CrearPeliculaComponent},
	{path: "contacto", component: ContactoComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


// @RouteConfig([
// 	{path: "/peliculas", name: "Peliculas", component: PeliculasListComponent, useAsDefault: true},
// 	{path: "/crear-pelicula", name: "CrearPelicula", component: CrearPeliculaComponent},
// 	{path: "/crear-pelicula/:titulo/:director/:anio", name: "CrearPeliculaBasadaEnOtra", component: CrearPeliculaComponent},
// 	{path: "/contacto", name: "Contacto", component: ContactoComponent}
// ])