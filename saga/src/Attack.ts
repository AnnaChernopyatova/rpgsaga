import { Hero } from './Hero';
import Logger from './Logger';

export default class Attack {
  logger = new Logger();
  checkAttack(attacker: Hero, opponent: Hero) {
    attacker.boost.useBoostEffect(attacker, opponent);
    if (opponent.boost.checkBoost(attacker, opponent)) {
      return;
    } else {
      if (attacker.boost.tryUseBoost(attacker, opponent)) {
        return;
      } else {
        attacker.attack(attacker, opponent);
        this.logger.attackLog(attacker, opponent);
      }
    }
  }
}
