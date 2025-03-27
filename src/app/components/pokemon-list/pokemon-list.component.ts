import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit, AfterViewInit {
  @ViewChild('pokemonCard') pokemonCard: any;

  pokemonList: any[] = [];

  loading = true;
  hasMoreElements = true;
  observer!: IntersectionObserver;

  constructor(private pokemonService: PokemonService) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
   this.loadPokemonList();
  }



  private loadPokemonList() {
    this.loading = true;
    // Simular llamada API
    this.pokemonService.getPokemonList().subscribe((data) => {
      this.pokemonList = data;
      this.loading=false;
    });
  }

  private loadMorePokemons() {
    this.loading = true;
    // Simular llamada API
    this.pokemonService.getPokemonList().subscribe((data) => {
      this.pokemonList = this.pokemonList.concat(data);
      this.loading = false;
    });
  }
}
