import { Component ,Injectable,OnInit, } from '@angular/core';
import { RatingService } from '../rating.service';
import { Clubsmodel , Player } from '../model/Clubs.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
   providers: [RatingService]
})

export class FormationComponent implements OnInit{
  x = 'RealMadrid';
  loadedclub : Clubsmodel;
  club : Clubsmodel;
  ngOnInit() {

   
 this.club = this.ratingservice.club;

//  console.log(this.club);

  }


constructor(private ratingservice : RatingService , private http: HttpClient) {
 
}
session : Clubsmodel;
savedata(){


 
 }
 addRating(player: Player) {
  const rating = Number(player.ratingInput);
  if (!isNaN(rating)) {
    player.ratings.push(rating);
    this.http.put(`https://football-bb769-default-rtdb.firebaseio.com/Country/Club/Player/Game/rating.json`, this.club)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
loaddata(){

 this.http.get<{[key :string]: Clubsmodel}>(`https://football-bb769-default-rtdb.firebaseio.com/Country/Club/Player/Game/rating.json`).pipe(map (responseData => {

  const ratingArray = [];
  for (const key in responseData) {
    if (responseData.hasOwnProperty(key)) {
      ratingArray.push({ ...responseData[key], id: key });
    }
  }
  return ratingArray;
 })
 ) .subscribe(posts => {
  // ...
  console.log(posts);
});
}
 
}








