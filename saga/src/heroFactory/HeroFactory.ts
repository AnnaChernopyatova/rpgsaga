import { Hero } from '../Hero';

export default abstract class HeroFactory {
  arrayOfNames: string[] = [
    'William',
    'Charles',
    'Andrew',
    'Hovard',
    'Roger',
    'Ben',
    'Philip',
    'Hance',
    'Gerard',
    'George',
  ];
  arrayOfSurnames: string[] = ['Black', 'Grey', 'Stuards', 'Marlow', 'Parkinson', 'Perlow', 'Lowson', 'Sanderson'];

  abstract initHero(): Hero;

  protected initRandomName() {
    const name: string = this.arrayOfNames[Math.floor(Math.random() * this.arrayOfNames.length)];
    return name;
  }

  protected initRandomLastName() {
    const lastName: string = this.arrayOfSurnames[Math.floor(Math.random() * this.arrayOfSurnames.length)];
    return lastName;
  }

  protected initRandomHP() {
    const hp: number = Math.floor(Math.random() * 31) + 70;
    return hp;
  }

  protected initRandomDamage() {
    const damage: number = Math.floor(Math.random() * 20) + 15;
    return damage;
  }
}
