"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInRange = void 0;
function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randomInRange = randomInRange;
