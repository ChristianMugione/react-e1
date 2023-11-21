import styled from "styled-components";

export const StyledAboutUs = styled.section`
  background: #1093eb;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
  margin-top: 0;

  & img {
    box-shadow: 0 0 5px black;
    border-radius: 12px;
    width: 40%;
    margin-left: 20px;
  }

  @media (min-width: 992px) {
    padding: 10px;
    gap: 10px;
  }
`;

export const AboutUsText = styled.div`
  text-align: left;
  color: darkblue;
  margin-right: 20px;

  & h3 {
    font-size: 32px;
  }

  & p {
    font-size: 18px;
  }
`;
