import { Stem } from './stem.model';

export class Antwoord {
    antwoordID: number;
    antwoordPoll: string;
    pollID: number;
    lijstStemmen: Stem[]
    constructor( antwoordID: number, antwoordPoll: string, pollID: number, stemmen: Stem[]){
        this.antwoordID = antwoordID;
        this.antwoordPoll = antwoordPoll;
        this.pollID = pollID;
        this.lijstStemmen = stemmen;
    }
}
