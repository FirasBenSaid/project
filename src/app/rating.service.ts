import { Injectable} from '@angular/core';
import { Clubsmodel ,Player} from './model/Clubs.model';



@Injectable({
  providedIn: 'root'
})
export class RatingService {


  club: Clubsmodel;
  selectedPlayer: Player;

  constructor() { 
    const player1 = new Player('Courtois', [],'');
    const player2 = new Player('Carvajal D.', [],'');
    const player3 = new Player('Militao E.', [],'');
    const player4 = new Player('Alaba D.  ', [],'');
    const player5 = new Player('Camavinga E.', [],'');
    const player6 = new Player('Valverde F.  ', [],'');
    const player7 = new Player('Kroos T.'  , [],'');
    const player8 = new Player('Modric L.  ', [],'');
    const player9 = new Player('Rodrygo  ', [],'');
    const player10 = new Player('Benzema K. (C)', [],'');
    const player11 = new Player('Vinicius Junior', [],'');
  
    const players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11];
    this.club = new Clubsmodel('RealMadrid', players);
  }


selectPlayer(player: Player) {
  this.selectedPlayer = player;
}
}