import { Injectable, EventEmitter } from '@angular/core';
import { Clubsmodel } from './model/Clubs.model';
import { player } from './model/player.model';
import { gamenumber } from './model/gamenumber.model'; 
import { ratinglist } from './model/rating-list.model';


@Injectable({
  providedIn: 'root'
})
export class RatingService {

  //  ratingconfirmed = new EventEmitter<Clubsmodel>();
   private prating: player[];
private clubsmodel: Clubsmodel[]=[
  new Clubsmodel('RealMadrid', [new player ('vini',[new gamenumber('game1' ,[new ratinglist(1)])]) ]),


];


  constructor() { }
  getclub() {
    return this.clubsmodel.slice();
  }
//   addrating (playerrating : player){
// this.prating.push(playerrating);
// this.prating.slice();
//   }
//   addpratings(pratings: player[]){
// this.prating.push(...pratings);
// this.prating.slice();
//   }

//   addIngredient(ingredient: Ingredient) {
//     this.ingredients.push(ingredient);
//     this.ingredientsChanged.next(this.ingredients.slice());
//   }

//   addIngredients(ingredients: Ingredient[]) {
//     // for (let ingredient of ingredients) {
//     //   this.addIngredient(ingredient);
//     // }
//     this.ingredients.push(...ingredients);
//     this.ingredientsChanged.next(this.ingredients.slice());
//   }
 }

