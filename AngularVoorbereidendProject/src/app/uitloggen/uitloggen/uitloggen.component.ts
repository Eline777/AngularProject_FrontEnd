import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uitloggen',
  templateUrl: './uitloggen.component.html',
  styleUrls: ['./uitloggen.component.scss']
})
export class UitloggenComponent implements OnInit {

  constructor(private _authenticateService: AuthenticateService, private router: Router) { }

  ngOnInit() {
    this._authenticateService.logout();
    this.router.navigate(['/']);
  }

}
