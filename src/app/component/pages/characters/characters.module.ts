import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { RouterEvent, RouterModule } from '@angular/router';


const MYCOMPONENTS = [CharacterDetailsComponent,CharacterListComponent]
@NgModule({
  declarations: [ ...MYCOMPONENTS],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[...MYCOMPONENTS]
})
export class CharactersModule { }
