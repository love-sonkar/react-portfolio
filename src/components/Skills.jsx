import React from "react";
import SkillList from "./SkillList";
import { BiLogoReact, BiLogoHtml5, BiLogoJavascript } from "react-icons/bi";
import { Heading } from "./utility";

const Skills = () => {
  const iconStyle = {
    height: "120px",
    width: "100%",
    color: "#E94560",
  };

  return (
    <div className="px-4 ">
      <Heading className="text-center ">My Skills</Heading>
      <div className="flex h-full items-center justify-center">
        <div className="bg-baseColor w-1 h-[389px]" />
        <div className="flex flex-col gap-3 h-full justify-between">
          <SkillList
            level="Expert"
            w="w-[60vw]"
            icon={<BiLogoHtml5 style={iconStyle} />}
            heading="Html & Css"
            content="Html css learing"
          />
          <SkillList
            level="intermideate"
            w="w-[40vw]"
            icon={<BiLogoJavascript style={iconStyle} />}
            heading="Javascript"
            content="javascript js "
          />
          <SkillList
            level="intermideate"
            w="w-[20vw]"
            icon={<BiLogoReact style={iconStyle} />}
            heading="React js"
            content="react js "
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;