import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/component/character/interface/character';
import { CharacterService } from '@app/shared/services/character.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  /*

  */
  character$:Observable<Character>;

  constructor(private router:ActivatedRoute, private characterSvc:CharacterService, private location:Location ) { }

  ngOnInit(): void {
    this.router.params.pipe(take(1))
    .subscribe((params) =>{
      const id = params['id']
      this.character$ = this.characterSvc.getDetails(id)
    } )
  }

  goBack(){
    this.location.back()
  }

}
