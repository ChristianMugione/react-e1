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
    width: 100%;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    padding: 80px 0;
    gap: 10px;
    min-height: calc(100vh - 250px);

    img {
      width: 40%;
    }
  }
`;

export const AboutUsText = styled.div`
  text-align: left;
  color: black;

  & h3 {
    font-size: 32px;
    text-align: center;
  }

  & p {
    margin: 8px;
    font-size: 18px;
  }
`;
