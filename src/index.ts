import { Item } from "./Item";
import { User } from "./User";

class Shop {
  items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(name: string, price: number, description: string): void {
    const newItem = new Item(name, price, description);
    this.items.push(newItem);
  }

  getItems(): Item[] {
    return this.items;
  }
}

const user = new User('John Doe', 25);

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
