import Fascination from '../src/boostTypes/Fascination';

describe('object Fascination matches the class', () => {
  it('should match', () => {
    // Arrange
    const fascination = new Fascination();
    // Assert
    expect(fascination).toBeInstanceOf(Fascination);
    expect(fascination.useBoost).toBeDefined;
    expect(fascination.checkBoost).toBeDefined;
    expect(fascination.useBoostEffect).toBeDefined;
  });
});
