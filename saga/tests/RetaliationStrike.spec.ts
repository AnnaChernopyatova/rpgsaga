import RetaliationStrike from '../src/boostTypes/RetaliationStrike';

describe('object Retaliation Strike matches the class', () => {
  it('should match', () => {
    // Arrange
    const retaliationStrike = new RetaliationStrike();
    // Assert
    expect(retaliationStrike).toBeInstanceOf(RetaliationStrike);
    expect(retaliationStrike.useBoost).toBeDefined;
    expect(retaliationStrike.checkBoost).toBeDefined;
    expect(retaliationStrike.useBoostEffect).toBeDefined;
  });
});
