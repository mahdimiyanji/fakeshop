import {getProducts, getCategories} from "../async-thunk/productsThunk";
import {Product, ProductsSliceState, STATUS} from "../types";
import type {ActionReducerMapBuilder, PayloadAction} from "@reduxjs/toolkit";

export const productsReducers = (builder: ActionReducerMapBuilder<ProductsSliceState>) =>
  builder
    
    // get all products
    .addCase(getProducts.pending, (state) => {
      state.productsStatus = STATUS.LOADING
    })
    .addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.productsStatus = STATUS.SUCCESS
      state.products = action.payload
      state.filteredProducts = action.payload
    })
    .addCase(getProducts.rejected, (state) => {
      state.productsStatus = STATUS.ERROR
    })
    
    // get all categories
    .addCase(getCategories.pending, (state) => {
      state.categoriesStatus = STATUS.LOADING
    })
    .addCase(getCategories.fulfilled, (state, action: PayloadAction<string[]>) => {
      state.categoriesStatus = STATUS.SUCCESS
      state.categories = action.payload
      state.selectedCategories = action.payload
    })
    .addCase(getCategories.rejected, (state) => {
      state.categoriesStatus = STATUS.ERROR
    })