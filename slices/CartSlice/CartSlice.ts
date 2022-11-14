import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType, CartSliceState } from '../../store/types';
import { calcTotalCount, calcTotalPrice } from '../../utils/calcTotalCart';
import { getCartFromLS } from '../../utils/getCartFromLS';

//getCartFromLS();
const initialState: CartSliceState = {
  totalPrice: 0,
  itemsCart: [],
  totalCount: 0
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.itemsCart.find((obj) => obj.id === action.payload.id
        && obj.type === action.payload.type && obj.size === action.payload.size);
      if (findItem) {
        findItem.count++;
      }
      else {
        state.itemsCart.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.itemsCart);
      state.totalCount = calcTotalCount(state.itemsCart);
    },
    plusItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.itemsCart.find((obj) => obj.id === action.payload.id
        && obj.type === action.payload.type && obj.size === action.payload.size);
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = calcTotalPrice(state.itemsCart);
    },
    minusItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.itemsCart.find((obj) => obj.id === action.payload.id
        && obj.type === action.payload.type && obj.size === action.payload.size);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.itemsCart);
    },
    removeItem(state, action: PayloadAction<CartItemType>) {
      state.itemsCart = state.itemsCart.filter((obj) =>
        obj.date !== action.payload.date)
      state.totalPrice = calcTotalPrice(state.itemsCart);
    },
    clearItems(state) {
      state.itemsCart = [];
      state.totalPrice = 0;
    },
  },
});
//{ addItem, removeItem, minusItem,plusItem, clearItems }
export const CartsActions = cartSlice.actions;

export default cartSlice.reducer;
