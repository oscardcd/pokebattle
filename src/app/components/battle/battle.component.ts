import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-battle',
  imports: [PokemonCardComponent],
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent {
  pokemon1?: Pokemon;
  pokemon2?: Pokemon;
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
      const attack1 = this.pokemon1.attack;
      const attack2 = this.pokemon2.attack;
      this.winner = attack1 > attack2 ? this.pokemon1.name : this.pokemon2.name;
    }
  }
}
