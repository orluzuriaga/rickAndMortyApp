import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailsRoutingModule } from './character-details-routing.module';
import { CharacterDetailsComponent } from './character-details.component';
import { CharacterCardComponent } from '../character-card/character-card.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterDetailsRoutingModule
  ]
})
export class CharacterDetailsModule { }
