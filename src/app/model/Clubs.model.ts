

import { player } from './player.model';
export class Clubsmodel{
public name: string ;
public players: player[];

constructor(name: string,players: player[]) {
    this.name = name;

    this.players = players;
  }
}








