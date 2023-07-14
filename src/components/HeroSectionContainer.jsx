import React from "react";
import { Button, ContainerCenter } from "./utility";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSectionContainer = ({
  image,
  paragraph,
  typewriterText,
  title,
  buttontext,
  name,
  left,
}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row flex-wrap gap-5 p-4">
      <ContainerCenter className="flex-1 justify-center pt-6 md:p-0 ">
        <div className="max-auto gap-2 flex flex-col">
          {title && <h2 className="text-6xl ">{title}</h2>}
          {name && <h3 className="md:text-4xl text-2xl ">{name}</h3>}
          <h3 className="md:text-5xl text-3xl max-w-min animate-typing overflow-hidden whitespace-nowrap pr-5 border-r-4 border-r-baseColor text-baseColor">
            {typewriterText ?? "Frontend Devloper."}
          </h3>
          <p className="text-xl ">
            {paragraph ??
              "Building & Maintaining responsive websites. Exploring new Webdesigns. Converting Figma design into HTML Code."}
          </p>
          <Button
            basecolor
            className="text-white"
            link="/assets/resume.pdf"
            target="_blank"
            download="/assets/resume.pdf"
          >
            {buttontext ?? "Hire Me"}
          </Button>
        </div>
      </ContainerCenter>
      <ContainerCenter className="flex-1 justify-center relative pt-6">
        <div
          className={`bg-baseColor h-72 w-72 p-4 ${
            left
              ? "rounded-br-3xl rounded-tr-[250px] rounded-bl-[250px] rounded-tl-3xl"
              : "rounded-br-[250px] rounded-tr-3xl rounded-bl-3xl rounded-tl-[250px]"
          }`}
        >
          <LazyLoadImage
            src={image}
            effect="blur"
            alt="Profile Pic"
            className="w-full drop-shadow-2xl"
          />
        </div>
      </ContainerCenter>
    </div>
  );
};

export default HeroSectionContainer;
