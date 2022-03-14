"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __importDefault(require("./Logger"));
var logger = new Logger_1.default;
var Duel = /** @class */ (function () {
    function Duel() {
    }
    Duel.prototype.startDuel = function (pairOfPlayers) {
        logger.duelStarted(pairOfPlayers);
        var number = this.whoGoesFirst();
        var attacker, opponent;
        if (number !== 0) {
            attacker = pairOfPlayers[1];
            opponent = pairOfPlayers[0];
        }
        else {
            attacker = pairOfPlayers[0];
            opponent = pairOfPlayers[1];
        }
        logger.firstAttackLog(attacker);
        for (; attacker.getHealthPoints() > 0 && opponent.getHealthPoints() > 0;) {
            attacker.attack(attacker, opponent);
            logger.attackLog(attacker, opponent);
            if (opponent.getHealthPoints() <= 0) {
                this.stopDuel(attacker);
                return opponent;
            }
            opponent.attack(opponent, attacker);
            logger.attackLog(opponent, attacker);
        }
        if (opponent.getHealthPoints() <= 0) {
            this.stopDuel(attacker);
            return opponent;
        }
        else {
            this.stopDuel(opponent);
            return attacker;
        }
    };
    Duel.prototype.whoGoesFirst = function () {
        var number = Math.floor(Math.random());
        return number;
    };
    Duel.prototype.stopDuel = function (attacker) {
        logger.stopDuelLog(attacker);
    };
    return Duel;
}());
exports.default = Duel;
//# sourceMappingURL=Duel.js.map