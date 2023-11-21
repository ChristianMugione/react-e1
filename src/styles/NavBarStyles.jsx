import React from 'react';
import styled from 'styled-components';

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 48px;
  right: 0;
  background-color: #fafafa50;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    top: unset;
    right: unset;
    position: relative;
    gap: 8px;
    background-color: transparent;
  }
  `;

export const StyledLi = styled.li`
  list-style: none;
  color: steelblue;
`;

export const StyledA = styled.a`
  font-size: 20px;
`;