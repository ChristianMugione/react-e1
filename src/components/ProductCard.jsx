import React from 'react'
import { StyledProduct } from '../styles/ProductStyles'

export const ProductCard = ({image, title, price}) => (
  <StyledProduct>
    <div>
    <img className='image' src={image} alt={title} />
    <h3 className='title'>{title}</h3>
    <p className='price'>ARS {price}</p>
    </div>
    <button>Comprar</button>
  </StyledProduct>

);