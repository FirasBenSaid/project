import { Component ,Injectable,OnInit  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

import { RatingService } from '../rating.service';
import { Clubsmodel } from '../model/Clubs.model';

@Injectable()

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
  //  providers: [RatingService]
})

export class FormationComponent implements OnInit{
  @ViewChild('f', { static: false }) slForm: NgForm;
  x = 'RealMadrid';
  clubs : Clubsmodel[];
  // constructor(private clubsmodel: Clubsmodel) {

  // }
  ngOnInit() {
    // this.Clubs = this.clubsmodel.Clubs;
    console.log(this.clubs)
  }
  constructor(private ratingservice:RatingService){
this.clubs=ratingservice.getclub();
  }
  clear(){
   this.slForm.reset();
};
// onSubmit(form: NgForm) {
//   const value = form.value;
 
//   const newrating = new servicerating(value.name , value.rating);
//   // this.ratingservice.addrating(newrating);
// form.reset();


    
// }
}
