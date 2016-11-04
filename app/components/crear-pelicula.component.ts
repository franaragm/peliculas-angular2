import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/core';
import { OnInit } from '@angular/core';

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
				private router: Router,
				private route: ActivatedRoute){

	}

	onSubmit(){
		this._peliculasService.insertPelicula(this.nuevaPelicula);
		this.router.navigate(["Peliculas"]);
	}

	ngOnInit():any{
		this.TituloPelicula = this.route.params.get("titulo");
		this.nuevaPelicula = new Pelicula(
			0,
			this.route.params.get("titulo"),
			this.route.params.get("director"),
			parseInt(this.route.params.get("anio"))
			);
	}
}