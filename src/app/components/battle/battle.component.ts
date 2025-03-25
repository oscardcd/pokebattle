import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-battle',
  imports: [PokemonCardComponent],
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent {
  pokemon1: any;
  pokemon2: any;
  winner: string = '';

  constructor(private pokemonService: PokemonService) {}

  loadPokemon(pokemonName: string, player: number) {
    this.pokemonService.getPokemon(pokemonName).subscribe(data => {
      if (player === 1) this.pokemon1 = data;
      else this.pokemon2 = data;
    });
  }

  fight() {
    if (this.pokemon1 && this.pokemon2) {
      const attack1 = this.pokemon1.stats[1].base_stat;
      const attack2 = this.pokemon2.stats[1].base_stat;
      this.winner = attack1 > attack2 ? this.pokemon1.name : this.pokemon2.name;
    }
  }
}
