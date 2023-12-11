import styled from "styled-components";

export const StyledProduct = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fafafa50;
  border-radius: 8px;
  margin: 6px 0;

  .image {
    width: 150px;
    aspect-ratio: 1/1;
    border-radius: 8px;
    box-shadow: 0 0 5px 0 black;
    // width: 100%;
  }

  @media (min-width: 576px) {
  

    .image {
      width: 40%;
    }

    .title {
      font-size: 16px;
      margin-block-start: 0;
      margin-block-end: 0;
    }
  }

  @media (min-width: 768px) {
    .image {
      width: 200px;
    }
  }

  @media (min-width: 992px) {
    width: 90%;
    display: block;
    margin: 0;

    .image {
      width: 20%;
      float: left;
      margin-right: 8px;
    }
  }
`;
