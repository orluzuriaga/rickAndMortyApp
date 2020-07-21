import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';


const MYCOMPONENTS = [CharacterDetailsComponent,CharacterListComponent]
@NgModule({
  declarations: [ ...MYCOMPONENTS],
  imports: [
    CommonModule
  ],
  exports:[...MYCOMPONENTS]
})
export class CharactersModule { }
