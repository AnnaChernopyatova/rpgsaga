import { Hero } from './Hero';
import Pair from './Pair';

export default class Logger {
  gameStarted(): void {
    console.log('The game has started!');
  }

  showPairsOfPlayers(pairsArray: Pair<Hero>[]): void {
    let str = `Here is the list of pairs for the round:`;
    for (let i = 0; i < pairsArray.length; i++) {
      str += `
            Pair ${i + 1}: ${pairsArray[i].first.toString()} vs ${pairsArray[i].second.toString()}`;
    }
    console.log(str);
  }

  duelStarted(pairOfPlayers: Pair<Hero>): void {
    console.log(
      `The duel between ${pairOfPlayers.first.toString()} and ${pairOfPlayers.second.toString()} has started.`,
    );
  }

  missTurn(opponent: Hero): void {
    console.log(`${opponent.toString()} misses his turn because the Wizard used fascination.`);
  }

  firstAttackLog(attacker: Hero): void {
    console.log(`${attacker.toString()} attacks first.`);
  }

  attackLog(attacker: Hero, opponent: Hero): void {
    console.log(
      `${attacker.toString()} damages ${opponent.toString()} on ${attacker.getDamagePoints()} points. His health left is ${opponent.getHealthPoints()}`,
    );
  }

  retaliationStrikeLog(whoUsedBoost: Hero, opponent: Hero, damage: number): void {
    console.log(
      `${whoUsedBoost.toString()} uses retaliation strike boost and damages ${opponent.toString()} additionally on ${damage} points.`,
    );
  }

  fascinationLog(whoUsedBoost: Hero): void {
    console.log(`${whoUsedBoost.toString()} uses fascination boost.`);
  }

  fireArrowsLog(whoUsedBoost: Hero, opponent: Hero): void {
    console.log(
      `${whoUsedBoost.toString()} uses fire arrows, and now ${opponent.toString()} will lose 3 health points additionally every turn.`,
    );
  }

  fireArrowsEffectLog(opponent: Hero): void {
    console.log(`${opponent.toString()} loses 3 additionnal health points due to the fire arrows effect.`);
  }

  stopDuelLog(attacker: Hero): void {
    console.log(`${attacker.toString()} has won!`);
  }

  roundStarts(numberOfRound: number): void {
    console.log(`Round number ${numberOfRound} starts.`);
  }

  gameOverLog(winner: Hero): void {
    console.log(`Game over. ${winner.toString()} is the winner!`);
  }

  errorLog(): void {
    console.error(`Please enter a number that will be a deuce in any degree.`);
  }

  dummyHeroLog(dummy: Hero): void {
    console.error(`${dummy.toString()} appeares to be a peasant, so he automatically loses.`);
  }

  npmErrorLog(): void {
    console.error(
      `Please enter either 'deser', if ypu want to start the game using deserialization, or 'generate', if you want to use random generation of heroes.`,
    );
  }
}
