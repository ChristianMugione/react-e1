import React from 'react'
import { StyledServiceCards } from '../styles/StyledServiceCards';


export const ServiceCards = ({ children }) => {
  return (
    <StyledServiceCards>
      {children}
    </StyledServiceCards>
  )
};