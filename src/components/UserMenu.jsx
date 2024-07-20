import { useSelector, useDispatch } from "react-redux";
import { StyledUserMenu } from "../styles/StyledUserMenu";
import { openModalSignup } from "../store/storeSlices";

export const UserMenu = () => {
  const modalSignup = useSelector((state) => state.modalSignup);

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(openModalSignup({ modalIsOpened: true, modalIsRegister: false }));
  };

  const signupHandler = () => {
    dispatch(openModalSignup({ modalIsOpened: true, modalIsRegister: true }));
  };

  return (
    <StyledUserMenu>
      <ul className="user-menu">
        <li className="login" onClick={loginHandler}>
          Login
        </li>
        <li className="signup" onClick={signupHandler}>
          Signup
        </li>
      </ul>
    </StyledUserMenu>
  );
};
