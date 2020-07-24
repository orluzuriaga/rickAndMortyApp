import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterCardRoutingModule } from './character-card-routing.module';
import { CharacterCardComponent } from './character-card.component';
import { RouterLink, RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from '../character-details/character-details.component';
import { CharacterListComponent } from '../character-list/character-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterCardRoutingModule,
    RouterModule
  ]
})
export class CharacterCardModule { }
