import React from 'react'
import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 5px;
  
  padding: 5px 30px;
  width: 1140px;
  background-color: rgba(255, 255, 255, 70%);
  border-radius: 10px;

  & img {
    width: 100px;
  }

  @media (max-width: 1200px) {
    width: 960px;
  }
  @media (max-width: 992px) {
    width: 720px;
  }
  @media (max-width: 768px) {
    width: 540px;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
`;