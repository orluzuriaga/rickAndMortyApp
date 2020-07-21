import { Component, OnInit } from '@angular/core';
import { Character } from '@app/component/character/interface/character';
import { CharacterService } from '@app/shared/services/character.service';
import { take } from "rxjs/operators";

type RequestInfo={
  next:string
}


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})


export class CharacterListComponent implements OnInit {

  characters:Character[] = []


   info:RequestInfo = {
     next:null
   }

  private pageNum=1
  private query:string
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(private characterService:CharacterService) { }

  ngOnInit(): void {
    this.getDataFromService()
  }


  private getDataFromService():void{
    this.characterService.searchCharacter(this.query, this.pageNum)
    .pipe(
      take(1)
    ).subscribe((res:any) => {
      const {info, results} = res;
      this.characters = [...this.characters, ...results]
      this.info = info
    })
  }

}
