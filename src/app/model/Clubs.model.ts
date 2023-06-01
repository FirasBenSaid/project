
export class Clubsmodel{
public name: string ;
public players: string[];

constructor(name: string, players: string[]) {
    this.name = name; 
    this.players = players;
   
  }
}


// export class Player {
//   public name: string;
//   public ratings: number[];
// }
export interface Player {
  name: string;
  ratings: number[];
}


