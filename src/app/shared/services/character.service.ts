import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '@app/component/character/interface/character';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient:HttpClient) { }


  searchCharacter(query = '', page = 1){
    return this.httpClient.get<Character[]>(`${environment.baseUrlAPI}/?name=${query}&page=${page}`)
  }



  getDetails(id:number){
    return this.httpClient.get<Character>(`${environment.baseUrlAPI}/${id}`)
  }
}
