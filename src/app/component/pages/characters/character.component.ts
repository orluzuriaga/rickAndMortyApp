import { Component, Input ,ChangeDetectionStrategy} from "@angular/core";



@Component({
  selector:'app-character',
  template:
  `<div class="card">
  <div class="image">
    <img
     [src]="character.image"
     [alt]="character.name"
     class="card-img-top">
  </div>
  <div class="card-inner">
    <div class="header">
      <a [routerLink]="['/character-details/', character.id]">
         <h2>{{character.name}}</h2>
      </a>
      <h4 class="text-muted">{{character.gender}}</h4>
      <small class="text-muted">{{character.created |date}}</small>

    </div>

  </div>
</div>`
})

