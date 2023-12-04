// Item.ts
import { v4 as uuidv4 } from 'uuid';

export class Item {
    quantity: number = 0;
    id: string;
    name: string;
    price: number;
    description: string;
    

  constructor(name: string, price: number, description: string) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
