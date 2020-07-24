import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/component/character/interface/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  character:Character

}
