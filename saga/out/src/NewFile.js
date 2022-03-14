"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = exports.Knight = exports.Wizard = exports.Hero = void 0;
var Hero = /** @class */ (function () {
    function Hero(name) {
        this.name = name;
    }
    return Hero;
}());
exports.Hero = Hero;
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hp = 80;
        _this.damage = 30;
        return _this;
    }
    Wizard.prototype.attack = function (targetPlayer) {
    };
    return Wizard;
}(Hero));
exports.Wizard = Wizard;
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hp = 85;
        _this.damage = 20;
        return _this;
    }
    return Knight;
}(Hero));
exports.Knight = Knight;
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hp = 90;
        _this.damage = 25;
        return _this;
    }
    return Archer;
}(Hero));
exports.Archer = Archer;
var playerOne = new Archer('Charly');
var playerTwo = new Wizard('Ben');
function Duel(playerOne, playerTwo) {
    return playerOne.hp -= playerTwo.damage;
}
console.log(Duel(playerOne, playerTwo));
/*const question = () => {
            return new Promise((resolve, reject) => {
                readline.question("How many players do you want to watch fighting? (It must be an even number!)", (answer: number) => {
                    totalAmountOfPlayers = answer;
                    if(totalAmountOfPlayers%2 !== 0){
                        this.getNumberOfPlayers;
                    }
                    //resolve();
                })
                readline.close();
                console.log(totalAmountOfPlayers);
            });

            
        }
        question();*/ 
//# sourceMappingURL=NewFile.js.map