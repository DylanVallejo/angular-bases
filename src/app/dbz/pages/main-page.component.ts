import { Component, Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  public list: Character[]=[];

  constructor(private dbzService: DbzService ){
    // this.list = dbzService.characters;
    // dbzService.onDeleteCharacterMain;
    // dbzService.onNewCharacterMain;
  }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzService.adCharacter(character);
  }



}
