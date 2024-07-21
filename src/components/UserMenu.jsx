import { useSelector, useDispatch } from "react-redux";
import { StyledUserMenu } from "../styles/StyledUserMenu";
import { openModalSignup, setToken } from "../store/storeSlices";

export const UserMenu = () => {
  const modalSignup = useSelector((state) => state.modalSignup);
  const appStatus = useSelector((state) => state.appStatus);

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(openModalSignup({ modalIsOpened: true, modalIsRegister: false }));
  };

  const signupHandler = () => {
    dispatch(openModalSignup({ modalIsOpened: true, modalIsRegister: true }));
  };

  const logoutHandler = () => {
    window.localStorage.removeItem("token");
    dispatch(setToken(null));
  };

  return (
    <StyledUserMenu>
      <ul className="user-menu">
        {!appStatus.token && (
          <>
            <li className="login" onClick={loginHandler}>
              Login
            </li>
            <li className="signup" onClick={signupHandler}>
              Signup
            </li>
          </>
        )}
        {appStatus.token && (
          <li className="logout" onClick={logoutHandler}>
            Logout
          </li>
        )}
      </ul>
    </StyledUserMenu>
  );
};
