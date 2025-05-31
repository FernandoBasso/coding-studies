import { log } from '../utils';

class Product {
  private _title: string;
  private _price: number;

  set price(val: number) {
    if (val < 0)
      throw new RangeError('Price must be >= 0');

    this._price = val;
  }

  constructor(title: string, price: number) {
    this._title = title;
    this._price = price;
  }

  getPriceWithTax(tax: number) {
    const { _price: price } = this;

    // return this._price * (1 + tax);

    return price + price * tax;
  }
}

const tr1 = new Product('Tomb Raider I 1996', 30);

log(tr1.getPriceWithTax(10));
