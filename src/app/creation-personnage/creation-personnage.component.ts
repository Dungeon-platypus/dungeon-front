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

  constructor(private creationPersonnageService: CreationPersonnageService ) { }

  generationPersonnage(classeSelect: Classe){
    this.selectedClasse = classeSelect;
  }

  ngOnInit(): void {

    // récupération de la liste des classes
    this.creationPersonnageService.getClasses().subscribe(
      (classesServeur) => this.classes = classesServeur,
      () => this.erreursGetClasses = true,
    );

  }

}
