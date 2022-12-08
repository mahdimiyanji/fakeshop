import { createAsyncThunk } from "@reduxjs/toolkit";
import productsServices from "../services/productsServices";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      return await productsServices.getProducts();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "products/getCategories",
  async (_, thunkAPI) => {
    try {
      return await productsServices.getCategories();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);