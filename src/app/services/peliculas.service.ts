import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeliculasService {

  private apikey:string = "35f741b0e2e48e6a4154c82aad0557d9";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private httpClient: HttpClient ) { }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.httpClient.get( url );
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.httpClient.get( url );
  }

}
