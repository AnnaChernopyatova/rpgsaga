import FileReaderHeroList from '../src/FileReaderHeroList';
import SerializerHeroList from '../src/SerializerHeroList';

describe('serialize heroes into string', () => {
  it('should serialize correctly', () => {
    // Arrange
    const heroList = new FileReaderHeroList();
    const serializer = new SerializerHeroList();
    // Act
    heroList.makelist();
    const serializedList = serializer.serializeList(heroList.heroList);
    // Assert
    expect(serializedList.length).toBe(heroList.heroList.length);
    for (const serializedHero of serializedList) {
      expect(
        /^[\],:{}\s]*$/.test(
          serializedHero
            .replace(/\\["\\/bfnrtu]/g, '@')
            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g, ']')
            .replace(/(?:^|:|,)(?:\s*\[)+/g, ''),
        ),
      ).toBeTruthy;
    }
  });
});
