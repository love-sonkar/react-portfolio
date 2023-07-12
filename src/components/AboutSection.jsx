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
      link: "https://amazon-clone-swart-ten.vercel.app/",
      image: "/images/amazon.webp",
      reverse: false,
    },
    {
      id: 2,
      title: "Netflix Clone",
      link: "https://love-sonkar.github.io/Netflix/",
      image: "/images/netflix.webp",
      reverse: true,
    },
    {
      id: 3,
      title: "Tic tac toa Clone",
      link: "https://love-sonkar.github.io/tictactoe/",
      image: "/images/tictactoe.webp",
      reverse: false,
    },
    {
      id: 4,
      title: "Microsoft Clone",
      link: "https://love-sonkar.github.io/microsoft-webclone/",
      image: "/images/microsoft.webp",
      reverse: true,
    },
    {
      id: 5,
      title: "OneVision HealthCare",
      link: "https://love-sonkar.github.io/One-Vision-Healthcare/",
      image: "/images/onevision.webp",
      reverse: false,
    },
    {
      id: 6,
      title: "Meshop Online Shopping App",
      link: "https://love-sonkar.github.io/MeShop/",
      image: "/images/meshop.webp",
      reverse: true,
    },
    {
      id: 7,
      title: "WorldClock",
      link: "https://love-sonkar.github.io/WorldClock/",
      image: "/images/worldclock.webp",
      reverse: false,
    },
  ];

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

        {ProjectData.map((item) => {
          return <Projects key={item.id} item={item} image={item.image} />;
        })}
      </div>
    </Container>
  );
};

export default AboutSection;
