import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Pelicula } from "../model/pelicula";
import { PeliculasService } from "../services/peliculas.service";

@Component({
	templateUrl: "app/view/crear-pelicula.html",
	providers: [PeliculasService]
})


export class CrearPeliculaComponent implements OnInit{
	public TituloPelicula = "";
	public nuevaPelicula: Pelicula;

	constructor(private _peliculasService: PeliculasService, 
				private _router: Router,
				private _actroute: ActivatedRoute){

	}

	onSubmit(){
		this._peliculasService.insertPelicula(this.nuevaPelicula);
		this._router.navigate(["/peliculas"]);
	}

	ngOnInit(){
		this._actroute.params.forEach((params: Params) => {
			this.TituloPelicula = params["titulo"];

			this.nuevaPelicula = new Pelicula(
				0,
				params["titulo"],
				params["director"],
				parseInt(params["anio"])
			);
		});

	}
}


