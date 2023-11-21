import styled from "styled-components";

export const StyledAboutUs = styled.section`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 50px;

  & img {
    box-shadow: 0 0 5px black;
    border-radius: 12px;
    width: 40%;
  }
`;

export const AboutUsText = styled.div`
  text-align: left;
  color: darkblue;

  & h3 {
    margin-top: 60px;
    font-size: 32px;
  }

  & p {
    font-size: 18px;
  }

`;
