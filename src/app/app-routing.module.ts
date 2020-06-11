import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreationPersonnageComponent } from './creation-personnage/creation-personnage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/connexion'},
  { path: 'creation-personnage', component: CreationPersonnageComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
