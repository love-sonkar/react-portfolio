import React from "react";

const MapsContainer = () => {
  return (
    <div className="md:flex-1 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.25020369667!2d81.71554264436789!3d20.831673573603407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2f324ee37d5b7d%3A0xf4cc51470ac46e13!2sRPJ8%2BMCV%2C%20Kurud%2C%20Chhattisgarh%20493663!5e0!3m2!1sen!2sin!4v1688904766440!5m2!1sen!2sin"
        width="100%"
        height="300"
        className="border-0 shadow-lg rounded-md"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapsContainer;
