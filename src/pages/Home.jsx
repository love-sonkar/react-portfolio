import React from "react";
import HeroSectionContainer from "../components/HeroSectionContainer";
import Skills from "../components/Skills";
import ImageProfile from "/images/profile.webp";
import { Container } from "../components/utility";

const Home = () => {
  return (
    <Container>
      <HeroSectionContainer
        title="Hii i'm"
        name="Love Sonkar"
        image={ImageProfile}
      />
      <Skills />
    </Container>
  );
};

export default Home;
