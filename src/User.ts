import { Item } from "./Item";
import { v4 as uuidv4 } from 'uuid';

export class User {
    quantity: number = 0;
    id: string;
    name: string;
    age: number;
    cart: Item[];

  constructor(name: string, age: number) {
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.cart = [];
  }

  addToCart(item: Item): void {
    this.cart.push(item);
  }

  removeFromCart(item: Item): void {
    this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
  }


  removeQuantityFromCart(item: Item, quantity: number): void {
    const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.cart[index].quantity -= quantity;
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1);
      }
    }
  }


  cartTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  printCart(): void {
    console.log('User Cart:');
    this.cart.forEach((item) => {
      console.log(`- ${item.name} - ${item.price}`);
    });
  }
}
