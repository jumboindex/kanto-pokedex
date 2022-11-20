import { createReducer, on } from "@ngrx/store";
import { PokemonList, PokemonData } from "src/app/services/api.service";
import * as PokedexActions from "../actions/pokedex.actions";

export interface PokedexState {
    pokemonData: PokemonList | any
    loading: boolean,
    error: boolean,
    search?: []
};

const initialState: PokedexState = {
    pokemonData: {},
    loading: true,
    error:false,
    search: []
}

export const PokedexReducer = createReducer(initialState, 
    on(PokedexActions.getPokemon, state => ({ ...state, loading: true, error: false  })),
    on(PokedexActions.getPokemonSuccess, (state, { data }  ) => (
         { pokemonData: data, loading: false, error: false })),
    on(PokedexActions.getPokemonError, state => ({...state, loading: false, error: true})),
    on(PokedexActions.searchPokemon, (state, { searchTerm }) => {
        if (searchTerm === '') return {...state, search:[]};
        const searchData = state.pokemonData.results.filter( (pokemon: { name: string; }) => pokemon.name.includes(searchTerm))
        return { ...state, search: searchData }
    }
    ));
