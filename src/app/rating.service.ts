import { Injectable, EventEmitter } from '@angular/core';
import { Clubsmodel } from './Clubs.model';
import { player } from './player.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

   ratingconfirmed = new EventEmitter<Clubsmodel>();
private clubsmodel: Clubsmodel[]=[
  new Clubsmodel('RealMadrid', [new player('vini'), new player('courtois')]),


];


  constructor() { }
  getclub() {
    return this.clubsmodel.slice();
  }
}

