import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, map } from 'rxjs'
import { PokemonList, PokemonData } from 'src/app/services/api.service';
import { getPokemon, searchPokemon } from 'src/app/store/actions/pokedex.actions';
import { AppState, getPokemonData, getPokemonError, getPokemonLoading, getPokemonSearch } from 'src/app/store/selectors/pokedex.selectors';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.css']
})
export class PokemonContainerComponent implements OnInit {

  pokemonData$: Observable<PokemonList>;
  isLoading$: Observable<boolean>;
  error$: Observable<boolean>;
  search$: Observable<PokemonData | any>;

  searchTerm: string = '';

  constructor(private store: Store<AppState>) { 
    this.pokemonData$ = this.store.select(getPokemonData);
    this.isLoading$ = this.store.select(getPokemonLoading);
    this.error$ = this.store.select(getPokemonError);
    this.search$ = this.store.select(getPokemonSearch)
  }

  
  ngOnInit(): void {
    this.store.dispatch(getPokemon());
  }

  handleSearch() {
    const searchTerm = this.searchTerm.trim();
    this.store.dispatch(searchPokemon({searchTerm: searchTerm}))
  }

}
