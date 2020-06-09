import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';

export const ROUTES: Routes = [
  { path: 'connexion', component: ConnexionComponent},
  { path: '', pathMatch: 'full', redirectTo: '/connexion'}
]
