import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, map, catchError, of, startWith} from 'rxjs';
import { ApiService, PokemonData } from 'src/app/services/api.service';

export interface HttpRequestState<T> {
  isLoading: boolean;
  data?: T;
  error?: boolean;
}

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.css']
})
export class PokemonCardsComponent implements OnInit {

  @Input() name: string = '';
  @Input() url: string = '';
  imageLoad = true;

  State$: Observable<HttpRequestState<PokemonData>>;

  constructor(private api: ApiService) {
    this.State$ = of({isLoading: true})

   }

  ngOnInit(): void {
    this.State$ = this.api.getPokemonData(this.url).pipe(
      map( data => ({isLoading: false, data})),
      catchError(error => of({isLoading: false, error: true})),
      startWith({isLoading: true})
    )
    
  }

}
