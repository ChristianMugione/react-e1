import styled from "styled-components";

export const StyledProductSection = styled.div`
  background-color: aliceblue;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: linear-gradient( 45deg, #3f5573, #7395d9 );
  
  h2 {
    font-size: 2em;
  }
  
  .cards {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    
  }
`;