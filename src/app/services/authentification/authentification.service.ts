import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL_BACKEND = environment.baseUrl + 'authentification/';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  /** Envoie une demande d'authentification au serveur */
  postAuthentification(userData: User): Observable<User> {

    return this.http.post<User>(URL_BACKEND, userData);
  }
}
