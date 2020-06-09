import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home-page/home-page.module';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './home-page/connexion/connexion.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InscriptionComponent } from './home-page/inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    HomePageComponent,
    InscriptionComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
