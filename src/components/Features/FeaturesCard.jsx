import React from "react";
import "./Features.css";

const FeaturesCard = ({ title, paragraph, image }) => {
  return (
      <div className="hover:bg-white/10 hover:border-white  overflow-hidden shadow-md hover:shadow-xl border border-white/30  flex flex-col gap-4 md:h-[40rem] md:w-[25rem] bg-white p-5 rounded-2xl">
          <img className="rounded-md" src={image} alt="Company Feature" />
          <div className="">
              <h3 className=" mb-2 ">{title}</h3>
              <h5 className=" ">{paragraph}</h5>
          </div>
      </div>
  );
};

export default FeaturesCard;
