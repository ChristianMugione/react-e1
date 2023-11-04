import styled from "styled-components";

export const StyledProduct = styled.div`
  width: 20%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fafafa50;
  border-radius: 12px;
  margin: 30px 0;

  
  & .image {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 5px 0 black;
    
  }
  
  @media (max-width: 992px) {
    width: 90%;
    display: block;
    margin: 0;

    .image {
      width: 20%;
      float: left;
      margin-right: 8px;
    }
  }

  @media (max-width: 768px) {
    .image {
      width: 200px;
    }
  }

  @media (max-width: 576px) {
    .image {
      width: 40%;
    }

    .title {
      font-size: 16px;
      margin-block-start: 0;
      margin-block-end: 0;
    }
  }
`;