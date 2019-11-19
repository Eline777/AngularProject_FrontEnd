import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { VriendenComponent } from '../vrienden/vrienden/vrienden.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


const appRoutes: Routes = [
  { path: 'vrienden', component: VriendenComponent }
  
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    VriendenComponent,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ]
})
export class DashboardModule { }
