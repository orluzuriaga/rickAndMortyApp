import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterCardComponent } from './character-card.component';

const routes: Routes = [{ path: '', component: CharacterCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterCardRoutingModule { }
