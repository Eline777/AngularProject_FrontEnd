import { Antwoord } from './antwoord.model';
import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';

export class Stem {
    stemID: number;
    antwoordID: number;
    gebruikerID: number;
    // antwoord: Antwoord;
    // gebruiker: Gebruiker;
    constructor( stemID: number, antwoordID: number, gebruikerID: number){
        this.antwoordID = antwoordID;
        this.stemID = stemID;
        this.gebruikerID = gebruikerID;
        // this.antwoord = antwoord;
        // this.gebruiker = gebruiker;
    }
}
