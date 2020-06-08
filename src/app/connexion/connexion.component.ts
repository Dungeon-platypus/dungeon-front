import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user: User = new User({});

  // erreurs
  erreurConnexion = false;

  constructor() { }

  connexion(){

    this.erreurConnexion = true;
  }

  ngOnInit(): void {
  }

}
