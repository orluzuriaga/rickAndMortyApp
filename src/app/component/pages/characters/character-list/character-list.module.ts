import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '../character-details/character-details.component';



const MYCOMPONENTS = [CharacterDetailsComponent,CharacterListComponent]
@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class CharacterListModule { }
