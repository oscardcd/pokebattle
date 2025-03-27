import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { map } from 'rxjs/operators';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent],
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
    this.pokemonService.getPokemonList().subscribe((data) => {
      this.pokemonList = data;
      this.loading = false;
    });
    // pipe(
    //   map(pokemons =>  this.pokemonList=[...pokemons]  )
    // );
    

  }

  // private loadMorePokemons() {
  //   this.loading = true;
  
  //   this.pokemonService.getPokemonList().subscribe((data) => {
  //     this.pokemonList = this.pokemonList.concat(data);
  //     this.loading = false;
  //   });
  // }
}
