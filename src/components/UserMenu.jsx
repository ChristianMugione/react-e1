import { useSelector, useDispatch } from "react-redux";
import { StyledUserMenu } from "../styles/StyledUserMenu";
import {
  closeUserMenu,
  openModalSignup,
  setOrders,
  setToken,
  setUserId,
} from "../store/storeSlices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserMenu = () => {
  const modalSignup = useSelector((state) => state.modalSignup);
  const appStatus = useSelector((state) => state.appStatus);
  const [userInfo, setUserInfo] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const userInfoSTR = window.localStorage.getItem("user-info");
    const userInfo = JSON.parse(userInfoSTR);
    setUserInfo(userInfo);
  }, []);

  const loginHandler = () => {
    dispatch(openModalSignup({ modalIsOpened: true, modalIsRegister: false }));
    navigate("/");
  };

  const signupHandler = () => {
    dispatch(openModalSignup({ modalIsOpened: true, modalIsRegister: true }));
  };

  const logoutHandler = () => {
    window.localStorage.removeItem("token");
    dispatch(setToken(null));
    dispatch(setUserId(null));
    dispatch(setOrders([]));
    navigate("/");
  };

  const showOrders = () => {
    dispatch(closeUserMenu());
    navigate("/orders");
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
            <li className="user-name">{userInfo.name}</li>
            <li className="orders" onClick={showOrders}>
              Pedidos
            </li>
            <li className="logout" onClick={logoutHandler}>
              Logout
            </li>
          </>
        )}
      </ul>
    </StyledUserMenu>
  );
};
