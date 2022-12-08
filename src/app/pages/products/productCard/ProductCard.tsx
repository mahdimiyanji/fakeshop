import React from 'react';
import {
  ImageDetail,
  GradiantOverlay,
  PriceText,
  ProductCardFooter,
  ProductContainer,
  ProductImage,
  ProductImageContainer,
  ImageText,
  Description,
  ProductDetail
} from './styledComponents';
import {Product} from '../../../../features/products/types';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {addToCart, removeFromCart} from '../../../../features/cart/cartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton";

interface Props {
  product: Product
}

const ProductCard = (props: Props) => {
  
  const dispatch = useAppDispatch()
  
  const {
    product
  } = props
  
  const cartProducts = useAppSelector(state => state.cart.products)
  const isInCart = cartProducts.includes(product.id)
  
  const handlePurchase = () => {
    if (isInCart)
      dispatch(removeFromCart(product.id))
    else
      dispatch(addToCart(product.id))
  }
  
  return (
    <ProductContainer>
      <ProductImageContainer>
        <ProductImage src={product.image}/>
        
        <ImageDetail>
          <ImageText>
            {product.title}
          </ImageText>
        </ImageDetail>
        
        <GradiantOverlay/>
      </ProductImageContainer>
      
      <ProductDetail>
        <Description>{product.description}</Description>
        
        <ProductCardFooter>
          <PriceText>
            {
              product.price
            }
          </PriceText>
          
          <IconButton
            color={"primary"}
            size={"small"}
            sx={{
              backgroundColor: "grey.300"
            }}
            onClick={handlePurchase}
          >
            {
              isInCart ?
                <RemoveIcon/>
                :
                <AddIcon/>
            }
          </IconButton>
        
        </ProductCardFooter>
      </ProductDetail>
    </ProductContainer>
  );
};

export default ProductCard;