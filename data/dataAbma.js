import { data } from './data.js';

export const ambaArr = [];

data.forEach((el) => {
  const elem = el.rate.some(() => el.rate.join(' ').includes('Amba'));
  if (elem) {
    ambaArr.push(el);
  }
});
