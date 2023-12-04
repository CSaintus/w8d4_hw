"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./Item");
const User_1 = require("./User");
class Shop {
    constructor() {
        this.items = [];
    }
    addItem(name, price, description) {
        const newItem = new Item_1.Item(name, price, description);
        this.items.push(newItem);
    }
    getItems() {
        return this.items;
    }
}
const user = new User_1.User('John Doe', 25);
const shop = new Shop();
shop.addItem('Item A', 10, 'Description for Item A');
shop.addItem('Item B', 15, 'Description for Item B');
shop.addItem('Item C', 20, 'Description for Item C');
const itemsToAdd = shop.getItems();
user.addToCart(itemsToAdd[0]);
user.addToCart(itemsToAdd[1]);
user.printCart();
user.removeFromCart(itemsToAdd[0]);
user.printCart();
console.log('Cart Total:', user.cartTotal());
