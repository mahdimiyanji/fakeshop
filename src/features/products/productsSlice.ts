import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product, ProductsSliceState, STATUS} from "./types";
import {productsReducers} from "./extra-reducers/productsReducers";
import {stat} from "fs";

const initialState: ProductsSliceState = {
  products: [],
  filteredProducts: [],
  categories: [],
  selectedCategories: [],
  productsStatus: STATUS.NOT_STARTED,
  categoriesStatus: STATUS.NOT_STARTED
};


const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    
    filterProducts: (state, action: PayloadAction<string[]>) => {
      const selectedCategories = action.payload
      state.filteredProducts = state.products.filter(product => selectedCategories.includes(product.category))
    },
    
    toggleSelectedCategory: (state, action: PayloadAction<string>) => {
      const categoryName = action.payload
      
      const indexOfSelectedCategory = state.selectedCategories.indexOf(categoryName)
      if (indexOfSelectedCategory > -1)
        // means it was in selected categories
        state.selectedCategories.splice(indexOfSelectedCategory, 1)
      else
        state.selectedCategories = [...state.selectedCategories, categoryName]
    }
    
  },
  extraReducers: builder => productsReducers(builder)
});


export const {
  filterProducts,
  toggleSelectedCategory
} = productsSlice.actions;

export default productsSlice.reducer;