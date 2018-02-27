import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ErrorComponent } from './common/error/error.component';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

import { IndexComponent } from './user/index/index.component';
import { NasComponent } from './user/nas/nas.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    NasComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
