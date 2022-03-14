import Boost from '../Boost';
import DummyError from '../Errors/DummyError';
import { Hero } from '../Hero';

export default class DummyBoost extends Boost {
  useBoost(attacker: Hero): void {
    throw new DummyError(`Such Dummy heroes can't take part in duels!`, attacker);
  }
  checkBoost(attacker: Hero): boolean {
    throw new DummyError(`Such Dummy heroes can't take part in duels!`, attacker);
  }
  useBoostEffect(attacker: Hero): void {
    throw new DummyError(`Such Dummy heroes can't take part in duels!`, attacker);
  }
}
