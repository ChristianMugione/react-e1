import React from 'react'
import styled from 'styled-components'

export const StyledServiceCards = styled.div`
  width: 98%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  margin-bottom: 8px;
  /* flex-wrap: wrap; */

  i {
    font-size: 2em;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(200,200,200,1) 0%, rgba(180,180,180,1) 100%);
    width: 50px;
    aspect-ratio: 1/1;
    padding: 6px;
    border-radius: 50%;
    box-shadow: 0 0 2px black;
  }
`;