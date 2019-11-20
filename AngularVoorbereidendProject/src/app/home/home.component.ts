import { Component, OnInit } from '@angular/core';
import { GebruikerService } from '../gebruikers/gebruiker.service';
import { Observable } from 'rxjs';
import { Gebruiker } from '../gebruikers/models/gebruiker.model';
import { map, tap } from 'rxjs/operators';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gebruikers: Observable<Gebruiker[]>;
  aantal: number = 0;

  constructor(private _homeService: HomeService) {
    this.getAantalGebruikers();
    console.log(this.aantal);
   }

  ngOnInit() {
  }

  getAantalGebruikers(){
    console.log("test");
    this.gebruikers = this._homeService.getGebruikers()
    .pipe(
      map(result => {
        return result;
      }),
      tap(t => {
        console.log(t);
        console.log(t.length);
        this.aantal = t.length;})
    );
  }
}
