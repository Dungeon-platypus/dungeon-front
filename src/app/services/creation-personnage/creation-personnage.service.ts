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
    const classeArray = [new Classe({name: 'guerrier'}), new Classe({name: 'mage'}), new Classe({name: 'archer'})];
    return of(classeArray);
  }

  getGenerationPersonnage(classeName: string): Observable<Classe>{

    //return this.http.get<Classe>(`${BACKEND_URL}/generation?classe=${classeName}`);

    // temp
    const classeGenerer = new Classe({name: classeName, niveau: 1, pseudo: 'Klaff the platypus knight', hp: 125, mp: 75,
      force: 15, minForce: 9, maxForce: 19,
      intelligence: 5, minIntelligence: 2, maxIntelligence: 15,
      dexterite: 13, minDexterite: 6, maxDexterite: 16,
      pointsCaracRestant: 7, pointsCaracTotal: 80 });

    return of(classeGenerer);
  }
}
