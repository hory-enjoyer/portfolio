import { data } from './data.js';

export const testArr = [];

data.forEach((el) => {
  const elem = el.rate.some(() => el.rate.join(' ').includes('Testnet'));
  if (elem) {
    testArr.push(el);
  }
});
