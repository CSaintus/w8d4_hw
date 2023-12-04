"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(name, age) {
        this.quantity = 0;
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
    }
    removeQuantityFromCart(item, quantity) {
        const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
        if (index !== -1) {
            this.cart[index].quantity -= quantity;
            if (this.cart[index].quantity <= 0) {
                this.cart.splice(index, 1);
            }
        }
    }
    cartTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
    }
    printCart() {
        console.log('User Cart:');
        this.cart.forEach((item) => {
            console.log(`- ${item.name} - ${item.price}`);
        });
    }
}
exports.User = User;
