"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var Boost_1 = __importDefault(require("./Boost"));
var boost = new Boost_1.default();
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.setFirstName = function (name) {
        this.firstName = name;
    };
    Hero.prototype.getFirstName = function () {
        return this.firstName;
    };
    Hero.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Hero.prototype.getLastName = function () {
        return this.lastName;
    };
    Hero.prototype.setDamagePoints = function (damage) {
        this.damagePoints = damage;
    };
    Hero.prototype.getDamagePoints = function () {
        return this.damagePoints;
    };
    Hero.prototype.setHealthPoints = function (hp) {
        this.healthPoints = hp;
    };
    Hero.prototype.getHealthPoints = function () {
        return this.healthPoints;
    };
    Hero.prototype.attack = function (attacker, opponent) {
        var chance = Math.floor(Math.random() * 3);
        if (chance === 3 || chance === 2) {
            console.log('Im here');
            this.useBoost(attacker, opponent);
            //console.log(attacker.useBoost(attacker, opponent))
        }
        opponent.setHealthPoints(opponent.getHealthPoints() - attacker.getDamagePoints());
    };
    Hero.prototype.useBoost = function (whoUsedBoost, opponent) {
        console.log('Boost is used!');
        boost.useBoost(whoUsedBoost, opponent);
    };
    return Hero;
}());
exports.Hero = Hero;
Hero.prototype.toString = function () {
    return this.firstName + " " + this.lastName.substring(0, 1) + ".";
};
//# sourceMappingURL=Hero.js.map