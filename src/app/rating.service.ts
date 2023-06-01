import { Injectable, EventEmitter, Input, Output } from '@angular/core';
import { Clubsmodel ,Player} from './model/Clubs.model';



@Injectable({
  providedIn: 'root'
})
export class RatingService {

//  @Output() ratingconfirmed = new EventEmitter<Clubsmodel>();

// private clubsmodel: Clubsmodel[]=
// [
//   new Clubsmodel('RealMadrid', ['Vini'],[]) ,


// ];
public clubsmodel: Clubsmodel = {
  name: '',
  players: [],
 
};
public player: Player  = {
  name: '',
  ratings: [],
 
};


  constructor() { }

  // getclub() {
  //   return this.clubsmodel.slice();
  // }
//   addrating (x: Clubsmodel){
   
// this.newclubmodel.push(x);
// this.clubsmodel.slice();
//   }
addRating(rating: number , playername :string) {
  if( playername === this.player.name){
  this.player.ratings.push(rating);
  console.log(this.player); 
}else{
  console.log("error");
}
}
getClubsModel(): Clubsmodel {
  return this.clubsmodel;
}
//   addpratings(pratings: Clubsmodel){
// this.clubsmodel.push(...pratings);
// this.clubsmodel.slice();
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
