import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';



@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {


  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {

    // debugger;

    if(this.character.name.length === 0 ) return;

    this.onNewCharacter.emit({...this.character});
    this.character.name = '';
    this.character.power = 0;

  }

  constructor(dbzService: DbzService){

  }

}
