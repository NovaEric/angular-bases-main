import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    
    public characters: Character[] = [
        {
            name: 'Goku',
            power: 10500
        },
        {
            name: 'Piccolo',
            power: 6000
        },
        {
            name: 'Vegeta',
            power: 9000
        }
    ];
    
    onNewCharacter( character: Character ):void {
        this.characters.push(character);
    }
    
    onDeleteCharacter( index: number ):void {
        this.characters.splice(index, 1);
    }
    
}