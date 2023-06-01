import { Component ,Injectable,OnInit, } from '@angular/core';
import { RatingService } from '../rating.service';
import { Clubsmodel , Player } from '../model/Clubs.model';

@Injectable()

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
   providers: [RatingService]
})

export class FormationComponent implements OnInit{
  x = 'RealMadrid';
  club : Clubsmodel;
  ngOnInit() {

    
 this.club = this.ratingservice.club;
 console.log(this.club);
  }
  addRating(player: Player) {
    const rating = Number(player.ratingInput);
    if (!isNaN(rating)) {
      player.ratings.push(rating);
      console.log(this.club);
    }
   
}

constructor(private ratingservice : RatingService) {
 
}

savedata(){


  let data = this.club;
  localStorage.setItem('session', JSON.stringify(data));
 }



}






