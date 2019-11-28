import { Component } from '@angular/core';
import { AuthenticateService} from 'src/app/security/services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toonBasisRoutes: Boolean = true;
  title = 'AngularVoorbereidendProject';
  constructor(private _authenticateService: AuthenticateService) {
    this._authenticateService.isLoggedin.subscribe(e=> {
      //Do something with the value of this BehaviorSubject
      //Every time the value changes this code will be triggered
      console.log(e);
      if(e == true){
        this.toonBasisRoutes = false;
      }
      if(e == false){
        this.toonBasisRoutes = true;
      }
      }) 
   }
}
