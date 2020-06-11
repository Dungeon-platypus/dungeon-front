import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const URL_BACKEND = environment.baseUrl + 'inscription/';
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) { }

  /** Envoie la demande d'inscription au serveur */
  postInscription(userData: User): Observable<User> {

    return this.http.post<User>(URL_BACKEND, userData);
  }
}
