import Boost from '../Boost';
import { Hero } from '../Hero';

export default class RetaliationStrike extends Boost {
  useBoost(whoUsedBoost: Hero, opponent: Hero): void {
    const damage = Math.floor(whoUsedBoost.getDamagePoints() * 0.3);
    opponent.setHealthPoints(opponent.getHealthPoints() - damage);
    whoUsedBoost.boost.setBoostJustNow(true);
    this.logger.retaliationStrikeLog(whoUsedBoost, opponent, damage);
  }
  checkBoost() {
    return false;
  }
  useBoostEffect() {
    return false;
  }
}
