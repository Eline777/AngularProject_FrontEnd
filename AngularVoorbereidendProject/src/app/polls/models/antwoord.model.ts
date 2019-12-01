import { Stem } from './stem.model';
import { Poll } from './poll.model';

export class Antwoord {
    antwoordID: number;
    antwoordPoll: string;
    pollID: number;
    lijstStemmen: Stem[];
    // poll: Poll;
    constructor( antwoordID: number, antwoordPoll: string, pollID: number, stemmen: Stem[]){
        this.antwoordID = antwoordID;
        this.antwoordPoll = antwoordPoll;
        this.pollID = pollID;
        this.lijstStemmen = stemmen;
        // this.poll = poll;
    }
}
