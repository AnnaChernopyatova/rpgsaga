"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var InitRandomHero_1 = __importDefault(require("./InitRandomHero"));
var Round_1 = __importDefault(require("./Round"));
var Logger_1 = __importDefault(require("./Logger"));
var logger = new Logger_1.default();
var round = new Round_1.default();
var initRandomHero = new InitRandomHero_1.default();
var madge = require('madge');
/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});*/
var Game = /** @class */ (function () {
    function Game() {
        this.heroList = new Array();
    }
    Game.prototype.run = function () {
        logger.gameStarted();
        this.populate();
    };
    ;
    Game.prototype.populate = function () {
        var totalAmountOfPlayer = this.getNumberOfPlayers();
        for (var i = 0; i < totalAmountOfPlayer; i++) {
            var newHero = initRandomHero.initHero();
            this.heroList[i] = newHero;
        }
        this.makePairs();
    };
    Game.prototype.getNumberOfPlayers = function () {
        var totalAmountOfPlayers = 10;
        return totalAmountOfPlayers;
    };
    Game.prototype.makePairs = function () {
        var totalArray = new Array(this.heroList.length).fill(1);
        var pairsArray = [];
        for (var i = 0; i < (totalArray.length / 2); i++) {
            var randomPlayerOne = Math.floor(Math.random() * totalArray.length);
            if (totalArray[randomPlayerOne] === 0) {
                i--;
                continue;
            }
            var randomPlayerTwo = Math.floor(Math.random() * totalArray.length);
            if (totalArray[randomPlayerTwo] === 0) {
                i--;
                continue;
            }
            if (randomPlayerOne !== randomPlayerTwo) {
                pairsArray.push([this.heroList[randomPlayerOne], this.heroList[randomPlayerTwo]]);
                totalArray[randomPlayerOne] = 0;
                totalArray[randomPlayerTwo] = 0;
            }
            else {
                i--;
                continue;
            }
        }
        logger.showPairsOfPlayers(pairsArray);
        round.startRound(pairsArray);
    };
    Game.prototype.deleteLoser = function (loser) {
        var newArray = this.heroList.filter(function (element) { return element !== loser; });
        this.heroList = newArray;
    };
    Game.prototype.gameOver = function (heroList) {
        console.log("Game is over. The winner is " + heroList[0] + "! Congratulations.");
    };
    return Game;
}());
exports.default = Game;
//# sourceMappingURL=Game.js.map