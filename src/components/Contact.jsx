import { useFormik } from "formik";
import validationSchema from "../formik/validationSchema";
import { useDispatch } from "react-redux";
import { openModalInfo, closeModalInfo } from "../store/storeSlices";
import { StyledContact } from "../styles/ContactStyles";
import { openModalInfoAndClose } from "../assets/functions/auxiliar";

export const Contact = () => {
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
      console.log("Values: ", values);
      // dispatch(openModalInfo({ msg: "Mensaje enviado" }));
      // setTimeout(() => {
      //   dispatch(closeModalInfo());
      // }, 5000);

      openModalInfoAndClose("Contacto enviado", 3, true);

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
