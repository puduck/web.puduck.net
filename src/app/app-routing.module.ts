import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { NasComponent } from './nas/nas.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'index',  component: HomeComponent },
  { path: 'welcome',  component: WelcomeComponent },
  { path: 'nas',  component: NasComponent },
  { path: '**',  component: ErrorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
