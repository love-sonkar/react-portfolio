import React from "react";
import HeroSectionContainer from "../components/HeroSectionContainer";
import Skills from "../components/Skills";
import ImageProfile from "/images/profile.webp";
import { Container } from "../components/utility";

const Home = () => {
  return (
    <Container>
      <div className="py-8">
        <HeroSectionContainer
          title="Hii i'm"
          name="Love Sonkar"
          image={ImageProfile}
          buttontext="Download CV"
        />
      </div>
      <Skills />
    </Container>
  );
};

export default Home;
