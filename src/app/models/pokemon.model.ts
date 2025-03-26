export class Pokemon {
    id: number;
    name: string;
    type: string[];
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    sprite: string; 
  
    constructor(
      id: number,
      name: string,
      type: string[],
      hp: number,
      attack: number,
      defense: number,
      speed: number,
      sprite: string
    ) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.hp = hp;
      this.attack = attack;
      this.defense = defense;
      this.speed = speed;
      this.sprite = sprite;
    }
  }
  