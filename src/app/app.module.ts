import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
