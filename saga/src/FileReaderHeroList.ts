import fs from 'fs';

import HeroList from './HeroList';
import Wizard from './heroTypes/Wizard';
import Fascination from './boostTypes/Fascination';
import Archer from './heroTypes/Archer';
import FireArrows from './boostTypes/FireArrows';
import Knight from './heroTypes/Knight';
import RetaliationStrike from './boostTypes/RetaliationStrike';
import Peasant from './heroTypes/Peasant';
import DummyBoost from './boostTypes/DummyBoost';
import { Hero } from './Hero';

export default class FileReaderHeroList extends HeroList {
  makelist(): void {
    const files: string[] = fs.readdirSync('./src/heroes/');
    const objectsList: Array<Hero> = [];
    for (const file of files) {
      objectsList.push(JSON.parse(fs.readFileSync(`./src/heroes/${file}`).toString()));
    }
    this.assignClassesToObjects(objectsList);
  }

  private assignClassesToObjects(objectsList: Array<Hero>): void {
    for (const object of objectsList) {
      switch (object.type) {
        case 'Wizard':
          this.heroList.push(
            new Wizard(object.firstName, object.lastName, object.damagePoints, object.healthPoints, new Fascination()),
          );
          break;
        case 'Archer':
          this.heroList.push(
            new Archer(object.firstName, object.lastName, object.damagePoints, object.healthPoints, new FireArrows()),
          );
          break;
        case 'Knight':
          this.heroList.push(
            new Knight(
              object.firstName,
              object.lastName,
              object.damagePoints,
              object.healthPoints,
              new RetaliationStrike(),
            ),
          );
          break;
        case 'Peasant':
          this.heroList.push(
            new Peasant(object.firstName, object.lastName, object.damagePoints, object.healthPoints, new DummyBoost()),
          );
      }
    }
  }
}
