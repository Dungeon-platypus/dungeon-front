import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  user: User = new User({});

  // erreurs
  erreurConnexion = false;

  constructor(private router: Router) { }

  connexion() {

    this.erreurConnexion = true;
  }

  fadeOutRightAndNextRoute(route: string) {

    const element = document.querySelector('.card');

    element.classList.add('animate__animated', 'animate__fadeOutRight');

    element.addEventListener('animationend', () => {
      this.router.navigate([route]);
    });

  }

  ngOnInit(): void {
  }

}
