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
    <div className="px-4 mt-6">
      <Heading className="text-center ">My Skills</Heading>
      <div className="flex items-center justify-center py-3">
        <div className="bg-baseColor w-1 h-[389px]" />
        <div className="flex flex-col gap-3 h-full justify-between">
          <SkillList
            level="Expert"
            w="w-[60vw]"
            icon={<BiLogoHtml5 style={iconStyle} />}
            heading="Html & Css"
            content="2 Years Of Experience"
          />
          <SkillList
            level="intermideate"
            w="w-[40vw]"
            icon={<BiLogoJavascript style={iconStyle} />}
            heading="Javascript"
            content="1 years Of Experience "
          />
          <SkillList
            level="intermideate"
            w="w-[20vw]"
            icon={<BiLogoReact style={iconStyle} />}
            heading="React js"
            content="6 Mont's Of Experiance "
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
