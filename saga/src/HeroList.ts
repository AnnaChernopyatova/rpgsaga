import { Hero } from './Hero';
import ArcherFactory from './heroFactory/ArcherFactory';
import KnightFactory from './heroFactory/KnightFactory';
import WizardFactory from './heroFactory/WizardFactory';
import PeasantFactory from './heroFactory/PeasantFactory';

export default abstract class HeroList {
  protected knightFactory?: KnightFactory;
  protected wizardFactory?: WizardFactory;
  protected archerFactory?: ArcherFactory;
  protected peasantFactory?: PeasantFactory;

  protected heroKindsArray!: [KnightFactory, WizardFactory, ArcherFactory, PeasantFactory];

  heroList: Hero[] = [];

  abstract makelist(number: number): void;

  deleteLoserFromList(loser: Hero): void {
    const newArray = this.heroList.filter(element => element !== loser);
    this.heroList = newArray;
  }
}
