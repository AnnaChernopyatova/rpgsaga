import Boost from '../Boost';
import { Hero } from '../Hero';

export default class Fascination extends Boost {
  useBoost(attacker: Hero, opponent: Hero): void {
    attacker.boost.setBoostInRoundStatus(true);
    opponent.missTurn = true;
    this.logger.fascinationLog(attacker);
  }

  checkBoost(attacker: Hero) {
    if (attacker.missTurn === true) {
      this.logger.missTurn(attacker);
      attacker.missTurn = false;
      return true;
    } else {
      return false;
    }
  }

  useBoostEffect() {
    return false;
  }
}
