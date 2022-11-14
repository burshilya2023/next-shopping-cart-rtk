import { CartItemType } from '../store/types';

export const calcTotalPrice = (items: CartItemType[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

export const calcTotalCount= (items: CartItemType[]) => {
  return items.reduce((sum, obj) => obj.count  + sum, 0);
};
