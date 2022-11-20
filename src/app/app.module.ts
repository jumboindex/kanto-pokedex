import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { PokedexReducer } from './store/reducers/pokedex.reducer';

import { EffectsModule } from '@ngrx/effects';
import { PokedexEffects } from './store/effects/pokedex.effects';

import { AppComponent } from './app.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { PokemonContainerComponent } from './components/pokemon-container/pokemon-container.component';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PokemonContainerComponent,
    PokemonCardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({pokedex: PokedexReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([PokedexEffects]),
    BrowserAnimationsModule,
    MatDividerModule, 
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
