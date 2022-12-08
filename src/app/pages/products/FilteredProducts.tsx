import React from 'react';
import ProductCard from "./productCard/ProductCard";
import {useAppSelector} from "../../hooks";
import {ProductsContainer} from './styledComponents';

const FilteredProducts = () => {
  
  const {filteredProducts} = useAppSelector(state => state.products);
  
  return (
    <ProductsContainer>
      {
        filteredProducts.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))
      }
    </ProductsContainer>
  );
};

export default FilteredProducts;