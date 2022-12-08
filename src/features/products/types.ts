export interface ProductsSliceState {
  products: Product[]
  filteredProducts: Product[]
  productsStatus: STATUS
  categories: string[]
  selectedCategories: string[]
  categoriesStatus: STATUS
}

export enum STATUS {
  NOT_STARTED= "NOT_STARTED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: ProductRating
}

interface ProductRating {
  rate: number
  count: number
}