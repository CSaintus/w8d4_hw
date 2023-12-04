"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
// Item.ts
const uuid_1 = require("uuid");
class Item {
    constructor(name, price, description) {
        this.quantity = 0;
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
exports.Item = Item;
