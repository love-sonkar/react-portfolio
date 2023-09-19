import React from "react";
import FooterContact from "./FooterContact";
import { Container, ContainerCenter, Divider, IconWrapper } from "./utility";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <Container className="w-full p-4">
      <FooterContact />
      <div className="items-start flex-col flex gap-5">
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
            Email : <span className="text-gray-500">loveboss806@gmail.com</span>
          </p>
        </div>
      </div>
      <Divider />
      <ContainerCenter className="justify-center ">
        <p className="md:text-2xl text-xl text-primary">
          &copy; {year} Love Sonkar. All Rights Reserved
        </p>
      </ContainerCenter>
    </Container>
  );
};

export default Footer;
