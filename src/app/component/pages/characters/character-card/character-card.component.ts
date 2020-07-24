import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/component/character/interface/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  constructor() { }

  @Input()
  character:Character;
  
  ngOnInit(): void {
  }

}
