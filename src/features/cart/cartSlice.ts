import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartSliceState} from "./types";

const initialState: CartSliceState = {
  products: [],
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    addToCart: (state, action: PayloadAction<number>) => {
      state.products = [...state.products, action.payload];
    },
    
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      
      const indexOfProduct = state.products.indexOf(productId)
      state.products.splice(indexOfProduct, 1)
    }
  }
});


export const {
  addToCart,
  removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;