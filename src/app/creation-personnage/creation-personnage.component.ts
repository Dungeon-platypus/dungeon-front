import { Component, OnInit } from '@angular/core';
import { CreationPersonnageService } from '../services/creation-personnage/creation-personnage.service';
import { Classe } from '../models/classe';
import { faCheck, faPencilAlt, faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-creation-personnage',
  templateUrl: './creation-personnage.component.html',
  styleUrls: ['./creation-personnage.component.css']
})
export class CreationPersonnageComponent implements OnInit {

  /** liste des classes disponibles */
  classes: Classe[];
  selectedClasse: Classe;

  // icons
  faCheck = faCheck;
  faPencilAlt = faPencilAlt;
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;

  // erreurs
  erreursGetClasses = false;
  erreurGenerationPersonnage = false;
  erreurChangementStat = false;

  constructor(private creationPersonnageService: CreationPersonnageService) { }

  /** Envoie une requête au serveur pour obtenir la génération d'un personnage */
  generationPersonnage(classeSelect: Classe) {

    this.erreurGenerationPersonnage = false;

    this.creationPersonnageService.getGenerationPersonnage(classeSelect.name).subscribe(
      (classeGenerer) => this.selectedClasse = classeGenerer,
      () => this.erreurGenerationPersonnage = true,
    );
  }

  /** Ajoute un point à la cractéristiques donnée si possible */
  plusStatistique(statName: string) {

    const maxStatName = 'max' + statName[0].toUpperCase() + statName.substring(1);

    if (this.selectedClasse.pointsCaracRestant > 0) {

      if (statName === 'hp' || statName === 'mp') {

        this.selectedClasse[statName] += 5;
        this.selectedClasse.pointsCaracRestant--;

      } else if (this.selectedClasse[statName] < this.selectedClasse[maxStatName]) {

        this.selectedClasse[statName]++;
        this.selectedClasse.pointsCaracRestant--;
      }
    }
  }

  /** Enlève un point à la cractéristiques donnée si possible */
  minusStatistique(statName: string) {

    const minStatName = 'min' + statName[0].toUpperCase() + statName.substring(1);

    if ((statName === 'hp' || statName === 'mp') && this.selectedClasse[statName] > 5) {

      this.selectedClasse[statName] -= 5;
      this.selectedClasse.pointsCaracRestant++;

    } else if (this.selectedClasse[statName] > this.selectedClasse[minStatName]) {

      this.selectedClasse[statName]--;
      this.selectedClasse.pointsCaracRestant++;
    }


  }

  /** Indique si un boutons de stats doit être désactivé  */
  disableStatButton(statName: string, typeButton: string) {

    const maxStatName = 'max' + statName[0].toUpperCase() + statName.substring(1);
    const minStatName = 'min' + statName[0].toUpperCase() + statName.substring(1);

    return ((statName === 'hp' || statName === 'mp') && typeButton === '-' && this.selectedClasse[statName] === 5)
      || (typeButton === '+' && this.selectedClasse.pointsCaracRestant === 0)
      || (typeButton === '+' && this.selectedClasse[statName] === this.selectedClasse[maxStatName])
      || (typeButton === '-' && this.selectedClasse[statName] === this.selectedClasse[minStatName]);
  }

  ngOnInit(): void {

    // récupération de la liste des classes
    this.creationPersonnageService.getClasses().subscribe(
      (classesServeur) => this.classes = classesServeur,
      () => this.erreursGetClasses = true,
    );

  }

}
