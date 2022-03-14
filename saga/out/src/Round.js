"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Duel_1 = __importDefault(require("./Duel"));
var duel = new Duel_1.default();
//const game = new Game;
var Round = /** @class */ (function () {
    function Round() {
    }
    //heroOneUsedBoosts: [string];
    //heroTwoUsedBoosts: [string];
    Round.prototype.startRound = function (pairsArray) {
        for (var i = 0;; i++) {
            if (pairsArray[0] !== undefined) {
                var loser = duel.startDuel(pairsArray[0]);
                //game.deleteLoser(loser);
                pairsArray.splice(0, 1);
                continue;
            }
            else
                break;
        }
        //console.log(game.heroList);
        /*if(game.heroList.length === 1){
            game.gameOver;
            return;
        }*/
    };
    return Round;
}());
exports.default = Round;
//# sourceMappingURL=Round.js.map