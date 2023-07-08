import React from "react";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import { Container } from "../components/utility";

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <Skills />
    </Container>
  );
};

export default Home;
