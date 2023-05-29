import { Component, Injectable, OnInit,  } from '@angular/core';


import { RatingService } from '../rating.service';
import { Clubsmodel } from '../Clubs.model';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
  //  providers: [RatingService]
})

export class FormationComponent implements OnInit{
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
}
