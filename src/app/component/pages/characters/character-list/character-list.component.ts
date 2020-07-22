import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Character } from '@app/component/character/interface/character';
import { CharacterService } from '@app/shared/services/character.service';
import { take, filter } from "rxjs/operators";

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

  constructor(
    private characterService:CharacterService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    //this.getDataFromService()
    this.getCharacter()
  }


  private getDataFromService():void{
    this.characterService
    .searchCharacter(this.query, this.pageNum)
    .pipe(take(1))
    .subscribe((res:any) => {

      if(res?.results?.length){
        const {info, results} = res;
        //Concateno la información que ya tenía "character" con la nuevos resultados
        this.characters = [...this.characters, ...results]
        this.info = info
      }else{
         this.characters = []
      }

    })
  }


  private getCharacter(){

    this.route.queryParams
    .pipe(take(1))
    .subscribe((params:ParamMap) => {


      //Recupero el valor escrito en el input
      this.query = params['q'];
      this.getDataFromService();
    });
  }


  /**
   * Captura la URL cuando cambie
   */

   private onUrlChanged():void{

    this.router.events
    .pipe(
       filter((event) => event instanceof NavigationEnd)
    ).subscribe(()=>{
      this.characters = [];
      this.pageNum = 1;
      this.getCharacter()
    })
   }


}
