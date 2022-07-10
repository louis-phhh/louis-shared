"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genEntityId = void 0;
const random_in_range_util_1 = require("./random-in-range.util");
function genEntityId() {
    return (0, random_in_range_util_1.randomInRange)(1, 2147483647);
}
exports.genEntityId = genEntityId;
