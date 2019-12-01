import { Gebruiker } from 'src/app/gebruikers/models/gebruiker.model';
import { Poll } from './poll.model';

export class PollGebruiker {
    pollGebruikerID: number;
    pollID: number;
    gebruikerID: number;
    heeftGestemd: boolean;
   // gebruiker: Gebruiker;
    // poll: Poll;
    constructor( pollGebruikerID: number, pollID: number, gebruikerID: number, heeftGestemd: boolean){
        this.pollID = pollID;
        this.pollGebruikerID = pollGebruikerID;
        this.gebruikerID = gebruikerID;
        this.heeftGestemd = heeftGestemd;
        // this.gebruiker = gebruiker;
        // this.poll = poll;
    }
}
