import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './user/index/index.component';
import { NasComponent } from './user/nas/nas.component';

const routes: Routes = [
  { path: '',  redirectTo: '/index',  pathMatch: 'full' },
  { path: 'index',  component: IndexComponent },
  { path: 'nas',  component: NasComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
