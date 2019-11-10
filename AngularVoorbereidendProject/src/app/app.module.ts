import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InloggenRegistrerenModule } from './inloggen-registreren/inloggen-registreren.module'
import { InloggenRegistrerenComponent } from './inloggen-registreren/inloggen-registreren/inloggen-registreren.component'
import { MatSidenavModule, MatListModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inloggen', component: InloggenRegistrerenComponent },
  { path: 'registreren', component: InloggenRegistrerenComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule, 
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    InloggenRegistrerenModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
