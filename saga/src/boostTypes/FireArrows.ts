import Boost from '../Boost';
import { Hero } from '../Hero';

export default class FireArrows extends Boost {
  useBoost(whoUsedBoost: Hero, opponent: Hero): void {
    whoUsedBoost.boost.setBoostInRoundStatus(true);
    this.logger.fireArrowsLog(whoUsedBoost, opponent);
  }

  useBoostEffect(whoUsedBoost: Hero, opponent: Hero) {
    if (whoUsedBoost.boost.getBoostStatus()) {
      opponent.setHealthPoints(opponent.getHealthPoints() - 3);
      this.logger.fireArrowsEffectLog(opponent);
    }
  }

  checkBoost(): boolean {
    return false;
  }

  tryUseBoost(attacker: Hero, opponent: Hero): boolean {
    if (attacker.boost.getBoostStatus() === false) {
      const chance: number = Math.floor(Math.random() * 3);
      if (chance === 3 || chance === 2) {
        attacker.boost.useBoost(attacker, opponent);
        return true;
      }
    }
    return false;
  }
}
