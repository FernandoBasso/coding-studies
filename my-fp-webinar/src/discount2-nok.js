/*

NOK: We have to keep track of the current value
     of a few different instance properties.

NOK: Changing one property may implicitly change other
     instance property, and we have to keep track of
     that too.

NOK: The `apply` method only does its job correctly if
     all the setup in the class is correct. It depends
     exclusively on the state of the world “around” it.

*/

/* eslint-disable no-unused-vars */
import {l, log} from './helpers';

//
// `type` is either 'standard' or 'premium'.
//
//  If `type` is 'premium', the user gets double the
//  standard discount.
//
// The problem here is the hidden input on `apply()`.
//
const Discount = class Discount {
  constructor(value, type, discount) {
    this._value = value;
    this._type = type;
    this._discount = discount;

    this._originalDiscount = discount;

    // Initially, the total is the value itself.
    this._total = value;
  }

  set discount(discount) {
    this._discount = discount;
  }

  get discount() {
    return this._discount;
  }

  set type(type) {
    this._type = type;

    if (type === 'premium') {
      this._discount = this._discount * 2;
    }

    else if (type === 'standard') {
      this._discount = this._originalDiscount;
    }
  }

  get type() {
    return this._type;
  }

  set value(value) {
    this._value = value;
  }

  get value() {
    return this._value;
    lasses 

  //
  // No `set total` because it should only be computed
  // from inside the class, by the `apply` method.
  //

  get total() {
    return this._total;
  }

  apply() {
    this._total = this._value - (this._value * this._discount) / 100;
  }
}


//
// #1: Seems all right.
//
const instance = new Discount(100, 'standard', 10);
instance.apply();
log('1st, total === 90', instance.total === 90);

//
// #2: Still looking fine.
//
// Setting `type` also changes the `discount`. We have
// to remember that `discount` is not 10 any longer.
//
instance.type = 'premium';
instance.apply();
log('2nd, total === 80', instance.total === 80);

//
// To use `apply` with its hidden inputs, we have to
// remember that other things in the code influence the
// calculation.
//
// Ideally, `apply()` should receive its input through
// explicit parameters and only work with them to produce
// its result.
//

instance.value = 120;
instance.apply();
log('3rd, total === 96', instance.total === 96);



instance.type = 'standard';
instance.value = 200;
instance.apply();
log('4th, total === 180', instance.total === 180);
log('total', instance.total);

/*

1. Oops! Forgot to set to the _discount for
   when it the standard account type.

2. We should also store the original discount.

*/
