import React from "react";
import FooterContact from "./FooterContact";
import { Container, ContainerCenter, Divider, IconWrapper } from "./utility";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className=" p-4">
      <FooterContact />
      <ContainerCenter className="justify-start md:justify-evenly  flex-wrap gap-5">
        <div>
          <h1 className="text-2xl pb-3">Connect With Me</h1>
          <ContainerCenter className="items-center gap-2">
            <IconWrapper link="https://www.linkedin.com/in/love-sonkar">
              <ImLinkedin />
            </IconWrapper>
            <IconWrapper link="https://github.com/love-sonkar">
              <BsGithub />
            </IconWrapper>
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
        <p className="md:text-2xl text-xl text-primary">
          &copy; 2023 Love Sonkar. All Rights Reserved
        </p>
      </ContainerCenter>
    </Container>
  );
};

export default Footer;
