import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


export type PokemonList = {
  count?: number,
  next?: string,
  previous?: boolean,
  results?: PokemonData[] | any[]
}

export type PokemonData = {
  abilities?: object[] | any,
  base_experience?: number,
  forms?: object[],
  game_indices?: object[],
  height?: number,
  held_items?: [],
  id?: number, 
  is_default?: boolean,
  location_area_encounters?: string, 
  moves?: object[],
  name?: string, 
  order?: number,
  past_types?: [],
  species?: object,
  sprites?: any,
  stats?: object[],
  types?: object[] | any,
  weight?: number
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiEndpoint: string = "https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) { }

  getPokemon () : Observable<PokemonList> {
    return this.http.get<PokemonList>(`${this.apiEndpoint}?limit=151`)
  }

  getPokemonData (url: String) : Observable<PokemonData> {
    return this.http.get<PokemonData>(`${url}`)
  }

}
