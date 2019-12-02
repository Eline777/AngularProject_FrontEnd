export class Gebruiker {
    email: string;
    wachtwoord: string;
    gebruikersnaam: string;
    token: string;
    gebruikerID: number;
    voornaam: string;
    achternaam: string;
    constructor(email: string, wachtwoord: string, gebruikersnaam: string, token: string, voornaam: string, achternaam: string) {
        this.email = email;
        this.wachtwoord = wachtwoord;
        this.gebruikersnaam = gebruikersnaam;
        this.token = token;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
    }
}