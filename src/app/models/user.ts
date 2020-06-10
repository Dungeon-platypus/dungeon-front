export class User {

  pseudo: string;
  email: string;
  mdp: string;

  constructor(params: any) {
    Object.assign(this, params);
  }

}
