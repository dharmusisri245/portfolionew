import React from "react";

const Marquee = () => {
  return (
    <>
      <div className="relative z-10">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="bg-neutral-500 mt-0.5 animate-marquee text-xl font-bold text-white">
            <marquee>
              Hii My Name is Dharmendra Gupta & I'm MERN Full Stack Developer
              and Currently Resident in Noida Sector-15
            </marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
