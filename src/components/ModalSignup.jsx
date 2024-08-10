import { useDispatch, useSelector } from "react-redux";
import { StyledModalSignup } from "../styles/StyledModalSignup";
import { useFormik } from "formik";
import validationSchema from "../formik/validationSchemaRegister";
import validationSchemaLogin from "../formik/validationSchemaLogin";
import { addUser, loginUser } from "../assets/functions/dbFncs";
import {
  closeModalInfo,
  closeModalSignup,
  closeUserMenu,
  openModalInfo,
} from "../store/storeSlices";
import { openModalInfoAndClose } from "../assets/functions/auxiliar";

export const ModalSignup = () => {
  const modalSignupisRegister = useSelector(
    (state) => state.modalSignup.modalIsRegister
  );

  return (
    <StyledModalSignup>
      {modalSignupisRegister && <Register />}
      {!modalSignupisRegister && <Login />}
    </StyledModalSignup>
  );
};

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      usuario: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      //call async function addUser

      addUser(values);
      dispatch(closeUserMenu());
      dispatch(closeModalSignup());
      // dispatch(openModalInfo({ msg: "Usuario creado" }));
      // setTimeout(() => {
      //   dispatch(closeModalInfo());
      // }, 5000);
      openModalInfoAndClose("Usuario creado", 5);
      formik.resetForm();
    },
  });

  return (
    <>
      <h2>Registrarse</h2>

      <form id="register" onSubmit={formik.handleSubmit}>
        <div className="input">
          <input
            type="text"
            placeholder="Usuario"
            id="usuario"
            name="usuario"
            value={formik.values.usuario}
            {...formik.getFieldProps("usuario")}
          />
          <div className="error-message">{formik.errors.usuario}</div>
        </div>
        <div className="input">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={formik.values.email}
            {...formik.getFieldProps("email")}
          />
          <div className="error-message">{formik.errors.email}</div>
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={formik.values.password}
            {...formik.getFieldProps("password")}
          />
          <div className="error-message">{formik.errors.password}</div>
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Confirme Password"
            id="password2"
            name="password2"
            value={formik.values.password2 || ""}
            {...formik.getFieldProps("password2")}
          />
          <div className="error-message">{formik.errors.password2}</div>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {/* TODO link a login */}
    </>
  );
};

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      usuario: "",
      password: "",
    },
    validationSchemaLogin,
    onSubmit: (values) => {
      console.log(values);

      loginUser(values);
      dispatch(closeModalSignup());
      dispatch(closeUserMenu());

      openModalInfoAndClose("Ingreso correcto", 5);
      formik.resetForm();
    },
  });

  return (
    <>
      <h2>Login</h2>

      <form id="login" onSubmit={formik.handleSubmit}>
        <div className="input">
          <input
            type="text"
            placeholder="Usuario"
            id="usuario"
            name="usuario"
            value={formik.values.usuario}
            {...formik.getFieldProps("usuario")}
          />
          <div className="error-message">{formik.errors.usuario}</div>
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={formik.values.password}
            {...formik.getFieldProps("password")}
          />
          <div className="error-message">{formik.errors.password}</div>
        </div>

        <button type="submit">Enviar</button>
      </form>
      {/* TODO link a register */}
    </>
  );
};
