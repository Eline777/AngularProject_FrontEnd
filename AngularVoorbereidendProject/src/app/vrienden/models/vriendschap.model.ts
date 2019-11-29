export class Vriendschap {
    vriendschapID: number;
    gebruikerEenID: number;
    gebruikerTweeID: number;
    status: number; // 0 = verzoek verzonden, 1 = aanvaard, 2 = geweigerd
    actieGebruikerID: number; // ID van de gebruiker die als laatste de status aangepast heeft, deze gebruiker kan bv een geweigerd verzoek toch nog aanvaarden of andersom, (of om te weten welke gebruiker het verzoek gestuurd heeft)
    emailVriend: string; // Om een vriendschapverzoek te mailen
    constructor(gebruikerEenID: number, gebruikerTweeID: number, status: number, actieGebruikerID: number, emailVriend: string){
        this.gebruikerEenID = gebruikerEenID;
        this.gebruikerTweeID = gebruikerTweeID;
        this.status = status;
        this.actieGebruikerID = actieGebruikerID;
        this.emailVriend = emailVriend;
    }
}
