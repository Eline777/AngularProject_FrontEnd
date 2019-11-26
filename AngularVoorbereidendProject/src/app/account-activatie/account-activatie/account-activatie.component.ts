import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GebruikerService } from 'src/app/gebruikers/gebruiker.service';

@Component({
  selector: 'app-account-activatie',
  templateUrl: './account-activatie.component.html',
  styleUrls: ['./account-activatie.component.scss']
})
export class AccountActivatieComponent implements OnInit {
tekstActivatieSuccesvol: string = "Uw account werd succesvol geactiveerd. U kan nu inloggen.";
// tekstVoorActivatie: string = "Gelieve via de link in uw mail uw registratie te bevestigen";
teTonenTekst: string = "Gelieve via de link in uw mail uw registratie te bevestigen";
  constructor(private activatedRoute: ActivatedRoute, private _gebruikerService: GebruikerService ) { 
    activatedRoute.paramMap.subscribe(result => {
      console.log(result);
      var code = result.get('activatiecode');
      console.log(code);
      this.controleerActivatiecode(code);
      
    })
  }

  ngOnInit() {
  }

  controleerActivatiecode(code: any){
    this._gebruikerService.controleerActivatieGebruiker(code).subscribe(result => {
      console.log(result);
      //const emailConfirmationResponse = result.json();
       if(result = true){
        //this.router.navigateByUrl("/inloggen");
        this.teTonenTekst = this.tekstActivatieSuccesvol;
       }
      
    });
  }
}
