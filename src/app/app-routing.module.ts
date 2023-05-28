import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompareComponent } from './compare/compare.component'
import { ForumComponent } from './forum/forum.component';
import { GameComponent } from './game/game.component';
import { ContactComponent } from './contact/contact.component';
import { FormationComponent } from './formation/formation.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/formation', pathMatch: 'full' },
  { path: 'compare', component: CompareComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'game', component: GameComponent },
  { path: 'formation', component: FormationComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
