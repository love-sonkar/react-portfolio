import { Link } from "react-router-dom";

export const ContainerCenter = ({ children, className }) => {
  return <div className={`${className} flex items-center `}>{children}</div>;
};

export const Container = ({ children, className }) => {
  return <div className={`${className} max-w-7xl mx-auto`}>{children}</div>;
};

export const Divider = () => {
  return <div className="border-b bg-baseColor h-1 w-full my-8" />;
};

export const Button = ({ children, basecolor, className, link }) => {
  return (
    <Link
      to={link}
      className={`${className} ${
        basecolor
          ? "bg-baseColor hover:text-baseColor border-baseColor"
          : "bg-white border-white hover:text-white"
      }  text-2xl rounded-md  px-8 border-2 py-1  hover:bg-transparent transition-all max-w-fit`}
    >
      {children}
    </Link>
  );
};
