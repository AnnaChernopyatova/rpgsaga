import { Hero } from './Hero';
import Pair from './Pair';

export default class HeroPairsMaker {
  makePairs(heroList: Hero[]) {
    const pairsArray: Pair<Hero>[] = [];
    const totalArray = [...heroList];

    while (totalArray.length > 0) {
      const randomPlayerOne: Hero = totalArray.splice(Math.floor(Math.random() * totalArray.length), 1)[0];
      const randomPlayerTwo: Hero = totalArray.splice(Math.floor(Math.random() * totalArray.length), 1)[0];
      const pairOfHeroes = new Pair<Hero>(randomPlayerOne, randomPlayerTwo);
      pairsArray.push(pairOfHeroes);
    }

    return pairsArray;
  }
}
