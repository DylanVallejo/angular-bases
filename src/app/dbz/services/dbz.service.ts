import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';


// al definir root se aplicara el patron singleton que nos permite usarlo en toda la app
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]= [
    {
      name: 'Krillin',
      power: 1000
    },{
      name:'Goku',
      power: 10000
    }
  ];

  onNewCharacterMain( character:Character): void {
    this.characters.push(character);
  }

  onDeleteCharacterMain(index:number):void{
    this.characters.splice(index,1);
  }

}
