import React from "react";
const SkillList = ({ w, icon, heading, content, level }) => {
  return (
    <div className="flex items-center">
      <div>
        <div className={` ${w ? w : "w-[80px]"}  h-1 border-b bg-baseColor`} />
        <p className="text-center text-baseColor text-base px-2 capitalize">
          {level}
        </p>
      </div>
      <div className="h-auto flex flex-col items-center">
        {icon}
        <h1>{heading}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SkillList;
