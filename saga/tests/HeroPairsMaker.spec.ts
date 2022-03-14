import { Hero } from '../src/Hero';
import HeroPairsMaker from '../src/HeroPairsMaker';
import Pair from '../src/Pair';
import RandomGeneratorHeroList from '../src/RandomGeneratorHeroList';

describe('all the apirs are unique', () => {
  it('should make unique pairs', () => {
    // Arrange
    const heroPairs = new HeroPairsMaker();
    const heroList = new RandomGeneratorHeroList();
    // Act
    heroList.makelist(8);
    const pairsArray: Pair<Hero>[] = heroPairs.makePairs(heroList.heroList);
    // Assert
    expect(pairsArray.length).toBe(4);
    for (let i = 0; i < pairsArray.length; i++) {
      expect(pairsArray[i].first).not.toBe(pairsArray[i].second);
    }

    heroList.heroList.forEach(hero => {
      let counter = 0;
      pairsArray.forEach(pair => {
        if (hero === pair.first || hero === pair.second) {
          counter++;
        }
      });

      expect(counter).toBe(1);
    });
  });
});
