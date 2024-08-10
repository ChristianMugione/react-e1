import { useSelector, useDispatch } from "react-redux";
import { StyledUserMenu } from "../styles/StyledUserMenu";
import { openModalSignup, setToken } from "../store/storeSlices";
import { useEffect, useState } from "react";

export const UserMenu = () => {
  const modalSignup = useSelector((state) => state.modalSignup);
  const appStatus = useSelector((state) => state.appStatus);
  const [userInfo, setUserInfo] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const userInfoSTR = window.localStorage.getItem("user-info");
    const userInfo = JSON.parse(userInfoSTR);
    setUserInfo(userInfo);
  }, []);

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

  const showOrders = () => {
    //traer pedidos del back
    //mostrar pedidos
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
          <>
            <li className="orders" onClick={showOrders}>
              Pedidos
            </li>
            <li className="logout" onClick={logoutHandler}>
              Logout
            </li>
            <span>({userInfo.name})</span>
          </>
        )}
      </ul>
    </StyledUserMenu>
  );
};
