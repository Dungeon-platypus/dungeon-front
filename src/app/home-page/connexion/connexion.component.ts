import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';
import { exitElementFadeOutRight } from 'src/app/utils/utils';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user: User = new User({});

  exit = exitElementFadeOutRight;

  // erreurs
  erreurConnexion = false;

  constructor(private router: Router, private authentificationService: AuthentificationService) { }

  /** Envoie une demande d'authentification au serveur */
  connexion() {

    this.erreurConnexion = false;

    this.authentificationService.postAuthentification(this.user).subscribe(
      () => this.router.navigate(['/profil']),
      (error) => this.erreurConnexion = true,
    );
  }

  ngOnInit(): void {
  }

}
