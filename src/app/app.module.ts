import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForumComponent } from './forum/forum.component';
import { GameComponent } from './game/game.component';
import { CompareComponent } from './compare/compare.component';
import { ContactComponent } from './contact/contact.component';
import { FormationComponent } from './formation/formation.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { TacticComponent } from './formation/tactic/tactic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForumComponent,
    GameComponent,
    CompareComponent,
    ContactComponent,
    FormationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    DiagramModule,
    TacticComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
