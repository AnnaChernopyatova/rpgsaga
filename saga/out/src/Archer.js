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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Hero_1 = require("./Hero");
var Boost_1 = __importDefault(require("./Boost"));
var boost = new Boost_1.default();
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'Archer';
        return _this;
    }
    Archer.prototype.useBoost = function (whoUsedBoost, opponent) {
        boost.useBoost(whoUsedBoost, opponent);
    };
    return Archer;
}(Hero_1.Hero));
exports.default = Archer;
//# sourceMappingURL=Archer.js.map