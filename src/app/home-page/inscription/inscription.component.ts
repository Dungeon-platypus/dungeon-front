import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { InscriptionService } from 'src/app/services/inscription/inscription.service';
import { exitElementFadeOutRight } from 'src/app/utils/utils';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  // formaulaire inscription
  inscriptionForm: FormGroup;

  // exit card
  exit = exitElementFadeOutRight;

  // erreurs
  erreurInscription = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private inscriptionService: InscriptionService) {

    this.inscriptionForm = this.formBuilder.group(
      {
      pseudo: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      mdp: ['', Validators.required],
      confirmMdp: ['', [Validators.required ]]
    },
    { validator: this.sameMdp('mdp', 'confirmMdp') }
    );
   }

   /** Getters pour accéder plus facilement aux attributs touched, dirty, invalid ... */
   get pseudo() { return this.inscriptionForm.get('pseudo'); }

   get email() { return this.inscriptionForm.get('email'); }

   get mdp() { return this.inscriptionForm.get('mdp'); }

   get confirmMdp() { return this.inscriptionForm.get('confirmMdp'); }

   /** Custom validator, vérifications de mots de passe identiques */
   sameMdp(mdp: string, confirmMdp: string){

    return (formGroup: FormGroup) => {
      const mdpControl = formGroup.controls[mdp];
      const confirmMdpControl = formGroup.controls[confirmMdp];

      if (confirmMdpControl.errors && !confirmMdpControl.errors.diffMdp) {
        return;
      }

      if (mdpControl.value !== confirmMdpControl.value) {
        confirmMdpControl.setErrors({ diffMdp: true });
      } else {
        confirmMdpControl.setErrors(null);
      }
    };
  }

  /** Appel le service inscription pour envoyer la demande au serveur */
  inscription(){

    this.erreurInscription = false;

    this.inscriptionService.postInscription(this.inscriptionForm.value).subscribe(
      () => this.router.navigate(['/connexion']),
      (error) => this.erreurInscription = true,
    );
  }

  ngOnInit(): void {
  }

}
