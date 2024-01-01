import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  last: Yup.string(),
  email: Yup.string().email("Debe introducir un correo válido"),
  subject: Yup.string(),
});

export default validationSchema;
