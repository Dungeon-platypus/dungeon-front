import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home-page/home-page.module';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './home-page/connexion/connexion.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InscriptionComponent } from './home-page/inscription/inscription.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CreationPersonnageComponent } from './creation-personnage/creation-personnage.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    HomePageComponent,
    InscriptionComponent,
    NotFoundComponent,
    CreationPersonnageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
