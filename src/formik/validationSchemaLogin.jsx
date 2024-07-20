import * as Yup from "yup";

const validationSchemaLogin = Yup.object({
  usuario: Yup.string().required("El usuario es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});

export default validationSchemaLogin;
