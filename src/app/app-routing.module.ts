import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},
{ path: 'home', loadChildren: () => import('./component/pages/home/home.module').then(m => m.HomeModule) },
{ path: 'character-list', loadChildren: () => import('./component/pages/characters/character-list/character-list.module').then(m => m.CharacterListModule) },
{ path: 'character-details/:id', loadChildren: () => import('./component/pages/characters/character-details/character-details.module').then(m => m.CharacterDetailsModule) },

{ path: 'character-card', loadChildren: () => import('./component/pages/characters/character-card/character-card.module').then(m => m.CharacterCardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
