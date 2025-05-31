/* eslint-disable no-unused-vars */
import { l, log } from './helpers';

function getDiscount(discount, type) {
  return type === 'premium' ? discount * 2 : discount;
};

function apply(percent, type, value) {
  return value - value * getDiscount(percent, type) / 100;
};


l('apply 1:', apply(10, 'standard', 100));

l('apply 2,', apply(12.2, 'standard', 100));

l('apply 3:', apply(10, 'premium', 100));

l('apply 4,', apply(12.2, 'premium', 100));

