import styled from "styled-components";

export const StyledAboutUs = styled.section`
  background: linear-gradient(45deg, #3f5573, #7395d9);
  padding: 60px 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 100%;

  /* gap: 50px; */
  margin-top: 0;
  box-shadow: 0 0 2px 2px #1093eb;

  img {
    box-shadow: 0 0 5px black;
    border-radius: 12px;
    width: 90%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 20px 0;
    gap: 10px;
    min-height: calc(100vh - 250px);
    align-items: center;

    img {
      width: 50%;
    }
  }

  @media (min-width: 992px) {
    img {
      width: 480px;
    }
  }

  @media (min-width: 1200px) {
    padding: 60px 0;
    min-height: calc(100vh - 220px);

    img {
      width: 550px;
    }
  }
`;

export const AboutUsText = styled.div`
  text-align: left;
  color: black;
  width: 90%;

  & h3 {
    font-size: 32px;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  & p {
    margin: 8px;
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  @media (min-width: 992px) {
    max-width: 480px;
  }

  @media (min-width: 1200px) {
    max-width: 550px;
  }
`;
