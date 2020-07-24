import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { RouterEvent, RouterModule } from '@angular/router';
import { CharacterComponent } from './character-card/character/character.component';


const MYCOMPONENTS = [CharacterDetailsComponent,CharacterListComponent]
@NgModule({
  declarations: [ ...MYCOMPONENTS, CharacterComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[...MYCOMPONENTS,CharacterComponent]
})
export class CharactersModule { }
