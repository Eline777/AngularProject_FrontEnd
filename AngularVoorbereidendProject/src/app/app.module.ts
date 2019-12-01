import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InloggenRegistrerenModule } from './inloggen-registreren/inloggen-registreren.module'
import { InloggenRegistrerenComponent } from './inloggen-registreren/inloggen-registreren/inloggen-registreren.component'
import { MatSidenavModule, MatListModule, MatToolbarModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityModule } from './security/security.module';
import { AccountActivatieComponent } from './account-activatie/account-activatie/account-activatie.component';
import { AccountActivatieModule } from './account-activatie/account-activatie.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthGuard } from './security/guards/auth.guard';
import { GebruikersModule } from './gebruikers/gebruikers.module';
import { HomeModule } from './home/home.module';
import { UitloggenComponent } from './uitloggen/uitloggen/uitloggen.component';
import { SecurityInterceptor } from './security/security.interceptor';
import { PollsComponent } from './polls/polls/polls.component';
import { PollsModule } from './polls/polls.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AddVriendComponent } from './vrienden/add-vriend/add-vriend.component';
import { MessagesService } from './shared/message-service/message.service';
import { MessageComponent } from './shared/message-service/message/message.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AddPollComponent } from './polls/add-poll/add-poll.component';
import { faEdit, faCheckSquare, faCheck, faCheckCircle, faTrash, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FlexLayoutModule } from "@angular/flex-layout";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inloggen', component: InloggenRegistrerenComponent },
  { path: 'registreren', component: InloggenRegistrerenComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'activeren/:activatiecode', component: AccountActivatieComponent },
  { path: 'uitloggen', component: UitloggenComponent },
  { path: 'polls', component: PollsComponent },
  { path: 'pollMaken', component: PollsComponent }

  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    UitloggenComponent,
    AddVriendComponent,
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
    HomeModule,
    InloggenRegistrerenModule,
    SharedModule.forRoot(),
    SecurityModule,
    AccountActivatieModule,
    GebruikersModule,
    HomeModule,
    PollsModule,
    MatDialogModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  entryComponents: [
    AddVriendComponent,
    AddPollComponent,
    MessageComponent,
  ],
  providers: [
    MessagesService,
    {provide: MatDialogRef},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private library: FaIconLibrary) {
    library.addIcons(faEdit, faCheckSquare, faCheck, faCheckCircle, faTrash, faPlus, faPlusCircle);
  }
}
