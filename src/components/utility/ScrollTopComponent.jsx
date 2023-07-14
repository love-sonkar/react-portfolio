import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScrollTopComponent = () => {
  const location = useLocation();
  useEffect(() => {
    return window.scroll(0, 0);
  }, [location]);
};

export default ScrollTopComponent;
