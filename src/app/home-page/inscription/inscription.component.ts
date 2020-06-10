import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {

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

  inscription(){
    console.log(this.inscriptionForm.value);
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
