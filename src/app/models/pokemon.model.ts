export class Pokemon {
    id: number;
    name: string;
    type: string[];
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    sprites: {
      front_default: string;
      front_shiny?: string;
      back_default?: string;
      back_shiny?: string;
    } 
  
    constructor(
      id: number,
      name: string,
      type: string[],
      hp: number,
      attack: number,
      defense: number,
      speed: number,
      sprites: { front_default: string } 
    ) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.hp = hp;
      this.attack = attack;
      this.defense = defense;
      this.speed = speed;
      this.sprites = sprites;
    }
  }
  