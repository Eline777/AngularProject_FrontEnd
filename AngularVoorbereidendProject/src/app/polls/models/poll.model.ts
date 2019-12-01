import { Antwoord } from './antwoord.model';
import { PollGebruiker } from './poll-gebruiker.model';

export class Poll {
    pollID: number;
    naam: string;
    makerID: number;
    lijstMogelijkeAntwoorden: Antwoord[];
    LijstGebruikersPerPoll: PollGebruiker[];
    constructor( id: number, naam: string, makerID: number, antwoorden: Antwoord[], pollGebruikers: PollGebruiker[]){
        this.pollID = id;
        this.naam = naam;
        this.makerID = makerID;
        this.lijstMogelijkeAntwoorden = antwoorden;
        this.LijstGebruikersPerPoll = pollGebruikers;
    }
}
