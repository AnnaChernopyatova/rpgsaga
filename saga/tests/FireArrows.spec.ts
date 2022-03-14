import FireArrows from '../src/boostTypes/FireArrows';

describe('object Fire Arrows matches the class', () => {
  it('should match', () => {
    // Arrange
    const fireArrows = new FireArrows();
    // Assert
    expect(fireArrows).toBeInstanceOf(FireArrows);
    expect(fireArrows.useBoost).toBeDefined;
    expect(fireArrows.checkBoost).toBeDefined;
    expect(fireArrows.useBoostEffect).toBeDefined;
  });
});
