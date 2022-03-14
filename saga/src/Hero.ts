import Boost from './Boost';

export abstract class Hero {
  readonly type!: string;
  firstName: string;
  lastName: string;
  damagePoints: number;
  healthPoints: number;
  fullHealthPoints: number;
  boost: Boost;
  missTurn = false;

  constructor(firstName: string, lastName: string, damagePoints: number, healthPoints: number, boost: Boost) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.damagePoints = damagePoints;
    this.healthPoints = healthPoints;
    this.fullHealthPoints = healthPoints;
    this.boost = boost;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getDamagePoints() {
    return this.damagePoints;
  }

  getHealthPoints() {
    return this.healthPoints;
  }

  setHealthPoints(value: number) {
    this.healthPoints = value;
  }

  getFullHealth() {
    return this.fullHealthPoints;
  }

  attack(attacker: Hero, opponent: Hero) {
    opponent.setHealthPoints(opponent.getHealthPoints() - attacker.getDamagePoints());
  }

  prepareForRound(): void {
    this.setHealthPoints(this.getFullHealth());
    this.boost.setBoostInRoundStatus(false);
    this.boost.setBoostJustNow(false);
  }
}

Hero.prototype.toString = function (): string {
  return `${this.getFirstName()} ${this.getLastName().substring(0, 1)}.`;
};
