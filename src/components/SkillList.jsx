import React from "react";
const SkillList = ({ w, icon, heading, content }) => {
  return (
    <div className="flex items-center">
      <div className={` ${w ? w : "w-[80px]"}  h-1 border-b bg-baseColor`} />
      <div className="h-auto flex flex-col items-center">
        {icon}
        <h1>{heading}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SkillList;
