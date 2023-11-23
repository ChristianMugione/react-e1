import styled from "styled-components"


export const Contact = () => {
  return (
    <StyledContact>
      <h2>Contact</h2>
      <form id="contact">
        <div className="row">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" />
        </div>
        <div className="row">
          <label htmlFor="last">Apellido:</label>
          <input type="text" id="last" />
        </div>
        <div className="row">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="row">
          <label htmlFor="subject">Asunto:</label>
          <input type="textarea" id="subject" />
        </div>
        <button type="submit">ENVIAR</button>
      </form>
    </StyledContact>

  )
}

const StyledContact = styled.section`
    background: linear-gradient( 45deg, #3f5573, #7395d9 );
    padding-top: 80px;
    width: 100%;
    min-height: calc( 100vh - 170px );
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & h2 {
    font-size: 36px;
    color: #000513;
    text-shadow: 0 0 15px white;
    }

    form {
      display: flex;
      flex-direction: column;
      background-color: #3f5573;
      gap: 8px;
      font-size: 26px;
      color: #000513;
      width: 95%;
      max-width: 400px;
      padding: 8px;
      box-shadow: 0 0 10px #000513;
    }

    input {
      height: 30px;
      /* min-width: 250px; */
      background-color: #7395d9;
      border-radius: 8px;
    }

    .row {
      display: flex;
      justify-content: space-between;
    }
`;

