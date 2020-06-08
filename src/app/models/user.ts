export class User {

  email: string;
  mdp: string;

  constructor(params: any) {
    Object.assign(this, params);
  }

}
