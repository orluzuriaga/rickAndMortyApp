import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { RouterEvent, RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharacterCardComponent } from './character-card/character-card.component';


const MYCOMPONENTS = [CharacterDetailsComponent,CharacterListComponent,CharacterCardComponent]
@NgModule({
  declarations: [ ...MYCOMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule

  ],
  exports:[...MYCOMPONENTS]
})
export class CharactersModule { }
