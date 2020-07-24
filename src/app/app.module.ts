import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterCardModule } from './component/pages/characters/character-card/character-card.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CharacterCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
