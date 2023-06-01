import { Component ,ElementRef,EventEmitter,Injectable,Input,OnInit, ViewChild  } from '@angular/core';
import { RatingService } from '../rating.service';
import { Clubsmodel } from '../model/Clubs.model';

@Injectable()

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
 providers: [RatingService]
})

export class FormationComponent implements OnInit{
  x = 'RealMadrid';
//   newclub : Clubsmodel = {
//     name: 'RealMadrid',
//     players: ['Vini','courtois','Hazard']
//   };
//   clubs : Clubsmodel[]= []
//   ratingInput: number;
  ngOnInit() {
    // this.Clubs = this.clubsmodel.Clubs;
    // console.log(this.ratinginputref.nativeElement.value)
    // this.clubs =this.ratservice.getclub();
    
    
 console.log(this.newclub);
  }
//   constructor(private ratservice : RatingService){
// // this.clubs=this.ratservice.getclub();
//   }
  clear(){
  //  this.slForm.reset();
};
// addRating() {
//   this.ratservice.addRating(this.ratingInput);
//   this.ratingInput = null; // Clear the input field after adding the rating
// }

// get clubsModel() {
//   return this.ratservice.getClubsModel();
// }
newclub: Clubsmodel = {
  name: 'RealMadrid',
  players: ['Vini', 'courtois', 'Hazard']
};
ratingInput: { [key: string]: string } = {}; // Object to store player ratings

constructor(private clubsService: RatingService) {}

addRating(playerName: string ) {
  const ratingInput = this.ratingInput[playerName];
  const rating = parseFloat(ratingInput);
  this.clubsService.player.name = playerName;
 
    this.clubsService.addRating(rating , playerName);
    this.ratingInput[playerName] = ''; // Clear the input field after adding the rating
 
}

onClickSubmit() {
// const rat= this.ratinginputref.nativeElement.value;
// const pla = this.playerinputref.nativeElement.value;
// const club = this.clubinputref.nativeElement.value;;
// const newclu = new Clubsmodel(rat,pla,club);
//   this.ratingadded.emit(newclu);
// this.ratservice.addrating(newclu)
// console.log(this.ratinginputref.nativeElement.value);
// this.clubs.push()

// console.log(this.clubs);

    
}
}

