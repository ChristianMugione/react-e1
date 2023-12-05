import React from 'react'
import { StyledProduct } from '../styles/ProductStyles'
import { useDispatch } from 'react-redux';
import { addItem } from '../store/storeSlices';

export const ProductCard = ({index, image, title, price}) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    const newItem = [index, image, title, price];
    dispatch(addItem(newItem))
  }

  return (
  <StyledProduct>
    <div>
    <img className='image' src={image?image:"/imagen-no-disponible.png"} alt={title} />
    <h3 className='title'>{title}</h3>
    <p className='price'>ARS {price}</p>
    </div>
    <button onClick={addToCart}>Agregar</button>
  </StyledProduct>

)};