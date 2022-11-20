import { createSelector } from "@ngrx/store";
import { PokemonList } from "src/app/services/api.service";
import { PokedexState } from "../reducers/pokedex.reducer";

export interface AppState {
    pokedex: PokedexState
}

export const selectPokedex = (state: AppState) => state.pokedex;


export const getPokemonData = createSelector(
    selectPokedex,
    (state: PokedexState) => state.pokemonData
);
    
export const getPokemonLoading =createSelector(
    selectPokedex,
    (state: PokedexState) => state.loading
);

export const getPokemonError = createSelector(
    selectPokedex,
    (state: PokedexState) => state.error
);

export const getPokemonSearch = createSelector(
    selectPokedex,
    (state: PokedexState) => state.search
);