export class Registreer {
    gebruikersnaam: string;
    wachtwoord: string;
    wachtwoordBevestiging: string;
    email: string;
    voornaam: string;
    achternaam: string;
    constructor(gebruikersnaam: string, wachtwoord: string, wachtwoordBevestiging: string, email: string, voornaam: string, achternaam: string) {
        this.gebruikersnaam = gebruikersnaam;
        this.wachtwoord = wachtwoord;
        this.wachtwoordBevestiging = wachtwoordBevestiging;
        this.email = email;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
    }
}