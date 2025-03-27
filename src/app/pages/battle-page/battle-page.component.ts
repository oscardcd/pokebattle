import { Component } from '@angular/core';
import { BattleComponent } from "../../components/battle/battle.component";
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-battle-page',
  imports: [BattleComponent,PokemonListComponent],
  templateUrl: './battle-page.component.html',
  styleUrl: './battle-page.component.scss'
})
export class BattlePageComponent {

}