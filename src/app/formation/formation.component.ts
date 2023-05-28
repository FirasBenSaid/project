import { Component, Injectable,  } from '@angular/core';
import { ClubsService } from '../Clubs.service';

@Injectable()
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
  providers: [ClubsService]
})

export class FormationComponent {
  x = 'Real Madrid';
  Clubs: { name: string, players: string[] }[] = [];
  constructor(private clubsService: ClubsService) {

  }
  ngOnInit() {
    this.Clubs = this.clubsService.Clubs;
  }
}
