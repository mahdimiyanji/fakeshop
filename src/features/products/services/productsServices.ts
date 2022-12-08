import axios from "axios"
import {Product} from "../types";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});


// get all products
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("")
  return response.data
}


// get all products categories
export const getCategories = async (): Promise<string[]> => {
  const response = await api.get<string[]>("/categories");
  return response.data;
};


const productsServices = {getProducts, getCategories}

export default productsServices