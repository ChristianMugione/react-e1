import React from 'react'
import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 5px;
  width: 100%;
  padding: 5px 30px;
  max-width: 1200px;
  background-color: rgba(255, 255, 255, 70%);
  border-radius: 10px;

  & img {
    width: 100px;
  }
`;