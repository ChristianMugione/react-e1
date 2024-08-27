import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  closeCart,
  closeMenu,
  closeUserMenu,
  blurOut,
} from "../store/storeSlices";
import { useEffect, useState } from "react";
import { closeCartAnimated } from "../assets/functions/auxiliar";

export const Blurer = () => {
  const dispatch = useDispatch();

  const blurStatus = useSelector((state) => state.appStatus.blur);

  const [blurOn, setBlurOn] = useState(false);

  useEffect(() => {
    console.log("blurStatus: ", blurStatus);
  }, []);

  const toggleUserMenuFnc = () => {
    console.log("toggleUserMenuFnc");
    setBlurOn(!blurOn);
    dispatch(closeUserMenu());
    dispatch(closeCart());
    // closeCartAnimated();
    dispatch(closeMenu());
    dispatch(blurOut());
  };
  return <>{<StyledBlurer onClick={toggleUserMenuFnc} />}</>;
};

const StyledBlurer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */

  backdrop-filter: blur(4px);
  z-index: 2;
`;
