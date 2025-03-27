import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit{
  @ViewChild('pokemonCard') pokemonCard: any;

  pokemonList: any[] = [];

  loading = true;
  hasMoreElements = true;
  observer!: IntersectionObserver;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }



  private loadPokemonList() {
    this.loading = true;
    this.pokemonService.getPokemonList().pipe(
      map(pokemons =>  this.pokemonList=[...pokemons]  )
    );
    

  }

  // private loadMorePokemons() {
  //   this.loading = true;
  
  //   this.pokemonService.getPokemonList().subscribe((data) => {
  //     this.pokemonList = this.pokemonList.concat(data);
  //     this.loading = false;
  //   });
  // }
}
