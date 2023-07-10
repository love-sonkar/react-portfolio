import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ContainerCenter } from "./utility";

const Projects = ({ item }) => {
  const { title, image, paragraph, reverse } = item;
  return (
    <ContainerCenter
      className={`flex flex-col md:flex-row gap-4 my-8 ${
        reverse && "md:flex-row-reverse"
      }`}
    >
      <div className="flex-1">
        <LazyLoadImage
          src={image}
          className="w-full h-full rounded-lg"
          effect="blur"
          alt="title"
          placeholderSrc="/images/dummy.png"
        />
      </div>
      <div className="flex-1 flex items-center justify-center flex-col text-center">
        <h1 className="text-2xl text-baseColor font-semibold py-2">{title}</h1>
        <p className="text-base w-11/12 break-words">{paragraph}</p>
      </div>
    </ContainerCenter>
  );
};

export default Projects;
