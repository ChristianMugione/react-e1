import styled from "styled-components";

export const StyledModalSignup = styled.div`
  position: absolute;
  top: 10dvh;
  width: 60%;
  /* height: 80dvh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding-bottom: 10dvh;

  background: radial-gradient(#5d6c81, #3f5573);
  /*radial-gradient(45deg, #3f5573, #7395d9);*/
  color: white;
  border-radius: 12px;
  box-shadow: 2px 2px 10px black;
  z-index: 99;
  overflow: hidden;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(4px);
    z-index: -1;
    overflow: visible;
  }

  h2 {
    font-size: 1.4em;
    color: #000513;
    margin-top: 0;
    margin-bottom: 20px;
    padding: 10px 0;
    background: #fafafa88;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    /* background-color: steelblue; */
    gap: 12px;
    font-size: 22px;
    color: #000513;
    width: 90%;
    max-width: 310px;
    padding: 8px;
    border-radius: 12px;
    box-shadow: 0 0 10px #000513;
  }

  .input {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  input {
    border-radius: 8px;
    padding: 4px;
    box-shadow: 0 0 2px #000513;
    border: none;
  }

  .error-message {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    color: red;
    font-size: 14px;
  }

  button {
    padding: 4px;
    font-size: 0.6em;
    margin: 0 2px;
    background-color: darkgreen;
    box-shadow: 0 0 2px #000513;
  }
`;
