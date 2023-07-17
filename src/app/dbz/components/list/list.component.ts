import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dbz-list-characters',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListCharactersComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 500
  }];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  
  onDeleteCharacter(index: number):void {
    this.onDelete.emit(index);
  }

}
