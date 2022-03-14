"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Archer_1 = __importDefault(require("./Archer"));
var Wizard_1 = __importDefault(require("./Wizard"));
var Knight_1 = __importDefault(require("./Knight"));
var InitRandomHero = /** @class */ (function () {
    function InitRandomHero() {
        this.arrayOfTypes = ['Wizard', 'Knight', 'Archer'];
        this.arrayOfNames = ['William', 'Charles', 'Andrew', 'Hovard', 'Roger', 'Ben', 'Philip', 'Hance', 'Gerard', 'George'];
        this.arrayOfSurnames = ['Black', 'Grey', 'Stuards', 'Marlow', 'Parkinson', 'Perlow', 'Lowson', 'Sanderson'];
    }
    InitRandomHero.prototype.initHero = function () {
        var type = this.initRandomType();
        var name = this.initRandomName();
        var lastName = this.initRandomLastName();
        var hp = this.initRandomHP();
        var damage = this.initRandomDamage();
        var newHero = this.initHeroType(type);
        newHero.setFirstName(name);
        newHero.setLastName(lastName);
        newHero.setDamagePoints(damage);
        newHero.setHealthPoints(hp);
        return newHero;
    };
    InitRandomHero.prototype.initHeroType = function (type) {
        var completeHero;
        switch (type) {
            case 0:
                completeHero = new Wizard_1.default();
                break;
            case 1:
                completeHero = new Knight_1.default();
                break;
            case 2:
                completeHero = new Archer_1.default();
                break;
        }
        return completeHero;
    };
    InitRandomHero.prototype.initRandomType = function () {
        var type = Math.floor(Math.random() * this.arrayOfTypes.length);
        return type;
    };
    InitRandomHero.prototype.initRandomName = function () {
        var name = this.arrayOfNames[Math.floor(Math.random() * this.arrayOfNames.length)];
        return name;
    };
    InitRandomHero.prototype.initRandomLastName = function () {
        var lastName = this.arrayOfSurnames[Math.floor(Math.random() * this.arrayOfSurnames.length)];
        return lastName;
    };
    InitRandomHero.prototype.initRandomHP = function () {
        var hp = (Math.floor(Math.random() * 31) + 70);
        return hp;
    };
    InitRandomHero.prototype.initRandomDamage = function () {
        var damage = (Math.floor(Math.random() * 20) + 15);
        return damage;
    };
    return InitRandomHero;
}());
exports.default = InitRandomHero;
//# sourceMappingURL=InitRandomHero.js.map