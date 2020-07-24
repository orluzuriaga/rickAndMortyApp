import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '../character-details/character-details.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [],
  imports: [CommonModule,CharacterListRoutingModule]
})
export class CharacterListModule { }
