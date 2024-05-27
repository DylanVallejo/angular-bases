import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

// al definir root se aplicara el patron singleton que nos permite usarlo en toda la app
@Injectable({
  providedIn: 'root'
})
export class DbzService {



  public characters: Character[]= [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },{
      id: uuid(),
      name:'Goku',
      power: 10000
    }
  ];

  adCharacter( character:Character): void {

    const newCharacter:Character = { id:uuid(),...character };

    this.characters.push(newCharacter);

  }

  onDeleteCharacterById(index:string):void{
    console.log(this.characters.filter(character => character.id !== index))
    this.characters = this.characters.filter(character => character.id !== index);
  }

}
