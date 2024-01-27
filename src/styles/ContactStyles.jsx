import styled from "styled-components";

export const StyledContact = styled.section`
  background: linear-gradient(45deg, #3f5573, #7395d9);
  padding-top: 60px;
  width: 100%;
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-size: 36px;
    color: white;
    text-shadow: 1px 1px 1px black;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: #3f5573;
    gap: 12px;
    font-size: 22px;
    color: #000513;
    width: 90%;
    max-width: 310px;
    padding: 8px;
    box-shadow: 0 0 10px #000513;
  }

  input,
  textarea {
    height: 30px;
    width: 100%;
    /* min-width: 250px; */
    background-color: #7395d9;
    border-radius: 8px;
  }

  .row {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    color: white;
    text-shadow: 0 0 5px black;
  }

  .error-msg {
    font-size: 0.6em;
    text-align: end;
    color: #b10303;
    text-shadow: 1px 1px 1px black;
    margin: -8px 0;
  }

  button {
    width: fit-content;
    margin: 0 auto;
    font-size: 0.6em;
  }
`;
