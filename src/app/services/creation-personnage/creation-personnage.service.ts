import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Classe } from 'src/app/models/classe';
import { Observable, of } from 'rxjs';

const BACKEND_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CreationPersonnageService {

  constructor(private http: HttpClient) { }

  getClasses(): Observable<Classe[]>{

    // return this.http.get<Classe[]>(`${BACKEND_URL}/classe/all`);

    // temp
    const classeArray = [new Classe({name: 'guerrier'}), new Classe({name: 'mage'}), new Classe({name: 'archer'}), new Classe({name: 'invocateur'})];
    return of(classeArray);
  }
}
