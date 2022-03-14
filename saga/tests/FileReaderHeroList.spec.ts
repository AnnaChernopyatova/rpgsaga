import FileReaderHeroList from '../src/FileReaderHeroList';
import { Hero } from '../src/Hero';

describe('parse files with all the heroes data', () => {
  it('should parse correct heroes', () => {
    // Arrange
    const heroList = new FileReaderHeroList();
    // Act
    heroList.makelist();
    // Assert
    for (const hero of heroList.heroList) {
      expect(hero).toBeInstanceOf(Hero);
    }
  });
});
