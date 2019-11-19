export class Gebruiker {
    email: string;
    wachtwoord: string;
    gebruikersnaam: string;
    token: string;
    constructor( email: string, wachtwoord: string, gebruikersnaam: string, token: string){
        this.email = email;
        this.wachtwoord = wachtwoord;
        this.gebruikersnaam = gebruikersnaam;
        this.token = token;
    }
}
