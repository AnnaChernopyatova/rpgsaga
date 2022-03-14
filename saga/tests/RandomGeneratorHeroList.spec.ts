import RandomGeneratorHeroList from '../src/RandomGeneratorHeroList';

describe('use all of the herolist methods', () => {
  it('should be successful', () => {
    // Arrange
    const heroList = new RandomGeneratorHeroList();
    // Act
    heroList.makelist(8);
    heroList.deleteLoserFromList(heroList.heroList[0]);
    // Assert
    expect(heroList.heroList).toBeDefined;
    expect(heroList.heroList.length).toBe(7);
  });
});
