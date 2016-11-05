import { Component } from '@angular/core';
import { Pelicula } from "../model/pelicula";
import { PeliculasService } from "../services/peliculas.service";

@Component({
	selector: "peliculas-list",
	templateUrl: "app/view/peliculas-list.html",
	providers: [ PeliculasService ]
})

export class PeliculasListComponent{
	public pelicula:Pelicula;
	public peliculaElegida:Pelicula;
	public mostrarDatos:boolean;
	public peliculas;
 	
	constructor(private _peliculasService: PeliculasService){

		this.mostrarDatos = false;	

		this.peliculas = this._peliculasService.getPeliculas();

		this.peliculaElegida = this.peliculas[0];
		this.pelicula = this.peliculas[0];
	}

	debug(titulo = null){
		if(titulo != null){
			console.log(this.pelicula.titulo);
		}else{
			console.log(this.pelicula);
		}
			
	}

	onShowHide(value){
		this.mostrarDatos = value;
	}

	onCambiarPelicula(pelicula){
		this.pelicula = pelicula;
		this.peliculaElegida = pelicula;
	}
}