import React from "react";
import Profile2 from "/images/profile2.webp";
import HeroSectionContainer from "./HeroSectionContainer";
import { Container, Heading } from "./utility";
import Projects from "./Projects";

const AboutSection = () => {
  const ProjectData = [
    {
      id: 1,
      title: "Amazon Clone",
      paragraph:
        "I have created an amazon clone using react js, in this clone you can see all products and search any products by name, and also you can add products in cart and you can see Total price of all products.",
      image: "/images/amazon.webp",
      reverse: false,
    },
    {
      id: 2,
      title: "Netflix Clone",
      paragraph:
        "This is my first react project in which I have fetched movie data from tmdb using axios, I have used skeleton loading and lazy load image to make user friendly, and lot's of optimization.",
      image: "/images/netflix.webp",
      reverse: true,
    },
    {
      id: 3,
      title: "Tic tac toa Clone",
      paragraph:
        "I have created Tic Tac Toe game using React, or can be played with two people and this site is responsive as well as attractive.",
      image: "/images/tictactoe.webp",
      reverse: false,
    },
    {
      id: 4,
      title: "Microsoft Clone",
      paragraph:
        "I have cloned Microsoft's website by looking at it and this site is fully responsive.",
      image: "/images/microsoft.webp",
      reverse: true,
    },
    {
      id: 5,
      title: "OneVision HealthCare",
      paragraph: "I have Created an Hospital webstite.",
      image: "/images/onevision.webp",
      reverse: false,
    },
    {
      id: 6,
      title: "Meshopt Online Shopping App",
      paragraph: "This is My personal online shopping app.",
      image: "/images/meshop.webp",
      reverse: true,
    },
    {
      id: 7,
      title: "WorldClock",
      paragraph: "This Is an basic world clock",
      image: "/images/worldclock.webp",
      reverse: false,
    },
  ];

  return (
    <Container className="py-4">
      <Heading className="text-center">About Me</Heading>
      <div className="py-10">
        <HeroSectionContainer
          title="Who I'm I"
          typewriterText="I'm WebDevloper"
          image={Profile2}
          buttontext="Contact Me"
          paragraph="A Front-end Developer who build's Responsive websites & exploring new web design's. Highly skilled in HTML CSS Javascript and working knowledge of JavaScript, React and Firebase. Learning Advances JavaScript and ReactJs."
        />
      </div>
      <div className="p-4">
        <Heading className="text-center mb-10   ">My Projects</Heading>

        {ProjectData.map((item) => {
          return <Projects key={item.id} item={item} image={item.image} />;
        })}
      </div>
    </Container>
  );
};

export default AboutSection;
