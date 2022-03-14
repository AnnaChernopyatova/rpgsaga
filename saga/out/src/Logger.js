"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.gameStarted = function () {
        console.log('The game has started!');
    };
    Logger.prototype.showPairsOfPlayers = function (pairsArray) {
        var str = "Here is the list of pairs for the round:";
        for (var i = 0; i < pairsArray.length; i++) {
            str += "\n            Pair " + (i + 1) + ": " + pairsArray[i][0].toString() + " vs " + pairsArray[i][1].toString();
        }
        console.log(str);
    };
    Logger.prototype.duelStarted = function (pairOfPlayers) {
        console.log("The duel between " + pairOfPlayers[0].toString() + " and " + pairOfPlayers[1].toString() + " has started.");
    };
    Logger.prototype.firstAttackLog = function (attacker) {
        console.log(attacker.toString() + " attacks first.");
    };
    Logger.prototype.attackLog = function (attacker, opponent) {
        console.log(attacker.toString() + " damages " + opponent.toString() + " on " + attacker.getDamagePoints() + " points. His health left is " + opponent.getHealthPoints());
    };
    Logger.prototype.stopDuelLog = function (attacker) {
        console.log(attacker.toString() + " has won!");
    };
    Logger.prototype.gameOverLog = function (winner) {
        console.log("Game over. " + winner.toString() + " is the winner!");
    };
    return Logger;
}());
exports.default = Logger;
//# sourceMappingURL=Logger.js.map