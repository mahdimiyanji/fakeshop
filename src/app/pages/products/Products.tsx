import React, {useEffect} from 'react';
import {StyledContainer} from './styledComponents';
import Sidebar from "./Sidebar";
import FilteredProducts from "./FilteredProducts";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getProducts, getCategories} from "../../../features/products/async-thunk/productsThunk";
import {STATUS} from "../../../features/products/types";
import AppLoading from "../../layout/loading/AppLoading";
import {filterProducts} from '../../../features/products/productsSlice';

const Products = () => {
  
  const dispatch = useAppDispatch()
  
  const {
    selectedCategories,
    categoriesStatus,
    productsStatus
  } = useAppSelector(state => state.products);
  
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories())
  }, [])
  
  useEffect(() => {
    dispatch(filterProducts(selectedCategories))
  }, [selectedCategories])
  
  
  return (
    <StyledContainer>
      
      <Sidebar/>
      <FilteredProducts/>
      
      {
        (categoriesStatus === STATUS.LOADING || productsStatus === STATUS.LOADING) &&
        < AppLoading/>
      }
    </StyledContainer>
  );
};

export default Products;