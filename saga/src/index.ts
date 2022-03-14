import prompt from 'prompt';

import Logger from './Logger';
import DeserializedGame from './DesrializedGame';
import GeneratedGame from './GeneratedGame';
import Game from './Game';

function main() {
  const logger = new Logger();
  const flag: string = process.argv[2];

  prompt.start();
  try {
    let game: Game;
    switch (flag) {
      case 'deser':
        game = new DeserializedGame();
        game.run();
        break;
      case 'generate':
        game = new GeneratedGame();
        game.run();
        break;
      default:
        throw new Error();
    }
  } catch (error) {
    logger.npmErrorLog();
  }
}

main();
