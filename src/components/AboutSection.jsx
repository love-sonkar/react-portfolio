import React from "react";
import Profile2 from "/images/profile2.webp";
import HeroSectionContainer from "./HeroSectionContainer";
import { Container, Heading } from "./utility";
import Projects from "./Projects";
import { ContextHookUse } from "../hook/useContext";

const AboutSection = () => {
  const {data} = ContextHookUse()
  return (
    <Container className="py-4">
      <Heading className="text-center">About Me</Heading>
      <div className="py-10">
        <HeroSectionContainer
          left
          title="Who I'm I"
          typewriterText="I'm WebDevloper"
          image={Profile2}
          buttontext="Contact Me"
          paragraph="A Front-end Developer who build's Responsive websites & exploring new web design's. Highly skilled in HTML CSS Javascript and working knowledge of JavaScript, React and Firebase. Learning Advances JavaScript and ReactJs."
        />
      </div>
      <div className="p-4">
        <Heading className="text-center mb-10">My Projects</Heading>
        {data.map((item) => {
          return <Projects key={item.id} item={item} image={item.image} />;
        })}
      </div>
    </Container>
  );
};

export default AboutSection;
