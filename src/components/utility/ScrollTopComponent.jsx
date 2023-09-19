import  { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScrollTopComponent = () => {
  const location = useLocation();
  useEffect(() => {
    return window.scroll({
      left:0,
      top:0,
      behavior:"smooth"
    });
  }, [location]);
};

export default ScrollTopComponent;
