export class PollGebruiker {
    pollID: number;
    pollGebruikerID: number;
    gebruikerID: number;
    HeeftGestemd: boolean;
    constructor( pollGebruikerID: number, pollID: number, gebruikerID: number, heeftGestemd: boolean){
        this.pollID = pollID;
        this.pollGebruikerID = pollGebruikerID;
        this.gebruikerID = gebruikerID;
        this.HeeftGestemd = heeftGestemd;
    }
}
