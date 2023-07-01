import React from "react";
import FooterContact from "./FooterContact";
import { Container, ContainerCenter, Divider } from "./utility";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="gap-8 p-4 flex-wrap flex-1">
      <FooterContact />
      <ContainerCenter className="justify-start md:justify-evenly  flex-wrap gap-5">
        <div>
          <h1 className="text-2xl pb-3">Connect With Me</h1>
          <ContainerCenter className="items-center gap-2">
            <Link className="text-xl rounded-full p-2 border-black border-2 hover:border-baseColor hover:scale-90 transition-transform hover:text-baseColor">
              <AiFillLinkedin />
            </Link>
            <Link className="text-xl rounded-full p-2 border-black border-2 hover:border-baseColor hover:scale-90 transition-transform hover:text-baseColor">
              <AiFillGithub />
            </Link>
          </ContainerCenter>
        </div>
        <div className="">
          <h1 className="text-2xl ">Contact Us</h1>
          <p className="text-xl">
            Phone : <span className="text-gray-500">+91 8461862742</span>
          </p>
          <p className="text-xl">
            Email : <span className="text-gray-500">loveboss806@gmail.com</span>
          </p>
        </div>
      </ContainerCenter>
      <Divider />
      <ContainerCenter className="justify-center ">
        <p className="text-2xl text-primary">
          &copy; 2023 Love Sonkar. All Rights Reserved
        </p>
      </ContainerCenter>
    </Container>
  );
};

export default Footer;
