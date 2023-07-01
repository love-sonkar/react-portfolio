import React from "react";
import { ContainerCenter, Container, Button } from "../components/utility";
import Profile from "/images/profile.png";
import Profile2 from "/images/profile2.png";

const Home = () => {
  return (
    <Container className="flex flex-col-reverse md:flex-row flex-wrap gap-5 md:h-3/4  p-4">
      <ContainerCenter className="flex-1 justify-center pt-6 md:p-0 ">
        <div className="max-auto gap-2 flex flex-col">
          <h2 className="text-6xl ">Hii i'm,</h2>
          <h3 className="md:text-4xl text-2xl ">Love Sonkar</h3>
          <h3 className="md:text-5xl text-3xl max-w-min animate-typing overflow-hidden whitespace-nowrap pr-5 border-r-4 border-r-baseColor text-baseColor">
            Frontend Devloper.
          </h3>
          <p className="text-xl ">
            Building & Maintaining responsive websites. Exploring new Web
            designs. Converting Figma design into HTML Code.
          </p>
          <Button basecolor className="text-white" link="/contact">
            Hire Me
          </Button>
        </div>
      </ContainerCenter>
      <ContainerCenter className="flex-1 justify-center relative pt-6">
        <div className="bg-baseColor h-72 w-72 border-3 p-4 rounded-br-[250px] rounded-tr-3xl rounded-bl-3xl rounded-tl-[250px]">
          <img
            className="w-full drop-shadow-2xl"
            src={Profile}
            alt="Profile pic"
          />
        </div>
      </ContainerCenter>
    </Container>
  );
};

export default Home;
