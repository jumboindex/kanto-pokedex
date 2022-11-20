import { createAction, props } from "@ngrx/store";
import { PokemonList } from "src/app/services/api.service";


export const getPokemon = createAction('[Pokedex] Load');
export const getPokemonSuccess = createAction('[Pokedex] Loaded Success', props<{data: PokemonList}>());
export const getPokemonError = createAction('[Pokedex] Loaded Error');
export const searchPokemon = createAction('[Pokedex] Search', props<{searchTerm: string}>());