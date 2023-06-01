export class Clubsmodel {
  public name: string;
  public players: Player[];

  constructor(name: string, players: Player[]) {
    this.name = name;
    this.players = players;
  }
}

export class Player {
  name: string;
  ratings: number[];
  ratingInput: string;

  constructor(name: string, ratings: number[] , ratingIput:string) {
    this.name = name;
    this.ratings = ratings;
    this.ratingInput= ratingIput;
  }
}
