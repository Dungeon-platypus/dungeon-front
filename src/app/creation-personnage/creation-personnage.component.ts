import { Component, OnInit } from '@angular/core';
import { CreationPersonnageService } from '../services/creation-personnage/creation-personnage.service';
import { Classe } from '../models/classe';

@Component({
  selector: 'app-creation-personnage',
  templateUrl: './creation-personnage.component.html',
  styleUrls: ['./creation-personnage.component.css']
})
export class CreationPersonnageComponent implements OnInit {

  classes: Classe[];

  // erreurs
  erreursGetClasses = false;

  constructor(private creationPersonnageService: CreationPersonnageService ) { }

  ngOnInit(): void {

    this.creationPersonnageService.getClasses().subscribe(
      (classesServeur) => this.classes = classesServeur,
      () => this.erreursGetClasses = true,
    );

    console.log(this.classes);
  }

}
