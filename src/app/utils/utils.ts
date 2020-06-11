/** Fonction permettant de faire disparaitre un élément vers la droite et de naviger vers une autre route */
export function exitElementFadeOutRight(elementToMove: string, route: string) {

  const element = document.querySelector(elementToMove);

  element.classList.add('animate__animated', 'animate__fadeOutRight');

  element.addEventListener('animationend', () => {
    this.router.navigate([route]);
  });

}
