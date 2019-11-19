import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GebruikerService } from 'src/app/gebruikers/gebruiker.service';

@Component({
  selector: 'app-account-activatie',
  templateUrl: './account-activatie.component.html',
  styleUrls: ['./account-activatie.component.scss']
})
export class AccountActivatieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private _gebruikerService: GebruikerService ) { 
    activatedRoute.paramMap.subscribe(result => {
      console.log(result);
      var code = result.get('activatiecode');
      console.log(code);

      
    })
  }

  ngOnInit() {
  }

  controleerActivatiecode(gebruikerID: Number, code: any){
    this._gebruikerService.controleerActivatieGebruiker(gebruikerID, code).subscribe(result => {
      console.log(result);
      // if(result.EmailConfirmationResponse == true)
      // this.router.navigateByUrl("/inloggen");
    });
  }
}
