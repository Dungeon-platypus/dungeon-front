export class Classe {

  name: string;
  niveau: number;
  pseudo: string;

  hp: number;
  mp: number;

  force: number;
  minForce: number;
  maxForce: number;

  intelligence: number;
  minIntelligence: number;
  maxIntelligence: number;

  dexterite: number;
  minDexterite: number;
  maxDexterite: number;

  pointsCaracTotal: number;
  pointsCaracRestant: number;

  constructor(params: any) {
    Object.assign(this, params);
  }

}
