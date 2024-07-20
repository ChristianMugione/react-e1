import * as Yup from "yup";

const validationSchema = Yup.object({
  usuario: Yup.string().required("El usuario es obligatorio"),
  email: Yup.string().email("Debe introducir un correo válido"),
  password: Yup.string().required("La contraseña es obligatoria"),
  password2: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("La contraseña es obligatoria"),
});

export default validationSchema;
