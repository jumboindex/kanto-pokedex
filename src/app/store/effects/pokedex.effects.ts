import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of, tap } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class PokedexEffects {

    loadPokedex$ = createEffect( () => this.action$.pipe(
        ofType('[Pokedex] Load'),
        mergeMap(() => this.apiService.getPokemon()
                        .pipe(
                            map( PokemonData => 
                                ({type: '[Pokedex] Loaded Success', data: PokemonData })),
                            catchError(()=> of({type: '[Pokedex] Loaded Error'}))
            ))
        )         
    );

    constructor( 
                private action$: Actions,
                private apiService: ApiService) 
    { }
}
