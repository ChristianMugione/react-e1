import { useFormik } from "formik";
import validationSchema from "../formik/validationSchema";
import styled from "styled-components";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { openModalInfo, closeModalInfo } from "../store/storeSlices";

export const Contact = () => {
  // const [formData, setFormData] = useState("");
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      last: "",
      email: "",
      subject: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(openModalInfo({ msg: "Mensaje enviado" }));
      setTimeout(() => {
        dispatch(closeModalInfo());
      }, 5000);
      formik.resetForm();
    },
  });

  return (
    <StyledContact>
      <h2>Contacto</h2>

      <form id="contact" onSubmit={formik.handleSubmit}>
        <div className="row">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps("name")}
          />
        </div>
        {formik.touched.name && formik.errors.name && (
          <div className="error-msg">{formik.errors.name}</div>
        )}
        <div className="row">
          <label htmlFor="last">Apellido:</label>
          <input
            type="text"
            id="last"
            name="last"
            {...formik.getFieldProps("last")}
          />
        </div>
        {formik.touched.last && formik.errors.last && (
          <div className="error-msg">{formik.errors.last}</div>
        )}
        <div className="row">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <div className="error-msg">{formik.errors.email}</div>
        )}
        <div className="row">
          <label htmlFor="subject">Mensaje:</label>
          <textarea
            id="subject"
            name="subject"
            {...formik.getFieldProps("subject")}
          />
        </div>
        {formik.touched.subject && formik.errors.subject && (
          <div className="error-msg">{formik.errors.subject}</div>
        )}
        <button type="submit">ENVIAR</button>
      </form>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  background: linear-gradient(45deg, #3f5573, #7395d9);
  padding-top: 60px;
  width: 100%;
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-size: 36px;
    color: #000513;
    text-shadow: 0 0 5px white;
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
