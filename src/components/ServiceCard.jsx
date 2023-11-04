import React from 'react'
import { StyledServiceCard } from '../styles/StyledServiceCard'

export const ServiceCard = ({cardIcon, cardTitle, cardText}) => {
  return (
    <StyledServiceCard>
      <i className={cardIcon}></i>
      <h3>{cardTitle}</h3>
      <p>{cardText}</p>
    </StyledServiceCard>

  )
}