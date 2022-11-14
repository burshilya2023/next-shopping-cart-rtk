import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteItem } from '../../store/types';

type Ifavorite={
    itemsFavorite:FavoriteItem[],
    
}

const initialState: Ifavorite = {
  itemsFavorite:[],

}
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItemFavorite(state, action: PayloadAction<FavoriteItem>) {
      const findItem = state.itemsFavorite.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem
      }
      else {
        state.itemsFavorite.push({
          ...action.payload
        });
       
      }
    },

    toggleItemFavority(state, action:PayloadAction<string>){
      state.itemsFavorite=state.itemsFavorite.map((obj) =>{
        if(obj.id !==action.payload) return obj
        return {
        ...obj,
        toggle:!obj.toggle
        }
      })
    },
    removeItemFavorite(state, action: PayloadAction<string>) {
        state.itemsFavorite = state.itemsFavorite.filter((obj) =>
          obj.id !== action.payload)      
      },
  
      clearAllFavorite(state,action: PayloadAction<FavoriteItem[]>){
        state.itemsFavorite = action.payload
      },
      clearAllItem(state){
        state.itemsFavorite=[]
      }
  },
});
export const FavoriteAction = favoriteSlice.actions;
export default favoriteSlice.reducer;
