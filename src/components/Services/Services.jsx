import React from "react";
import gold from "../../assets/gold.jpg";
import Model from "../model/Model";
import Shiba from "../../assets/shiba/scene.gltf";
import Room from "../../assets/Room.fbx";
import Cottage from "../../assets/cottage.fbx";
import agLogo from "../../assets/ag_logo.glb";
import agLogo3 from "../../assets/ag_logo3.glb";
import agLogo2 from "../../assets/ag_logo2.glb";
import ThreeDModel from "../model/Model";

function Services() {
  const data = [
    {
      header: "Faster Monthly Close",
      para: "You can't get to real-time finance if it takes three weeks to close your books. We close your books in days  rather than weeks, so you can make faster businessdecisions. ",
    },
    {
      header: "Minimize audit risk & ensure safety",
      para: "  FincorpX minimizes audit risk and safeguards finance with stringent security measures. Our expert team ensures compliance, letting you focus on busines growth and success. ",
    },
    {
      header: "Unmatched Accuracy",
      para: "Always count on getting accurate books delivered monthly. By pairing our concierge team with AI, you'llenjoy a new level of transparency and accuracy in accounting. ",
    },
  ];
  return (
    <div className="max-w-[1400px] mx-auto">
      <div
        id="features"
        className="p-2 flex-col flex mx-auto justify-center items-center "
      >
        <div className="bothContainer  w-full mx-auto flex-col  md:flex-row-reverse md:flex mb-[100px] items-center justify-center ">
          <div className="left w-[100%]  my-5 md:w-[50%] p-3  ">
            <h1 className="text-left text-6xl font-bold">
              <h1>{data[0].header}</h1>
            </h1>
            <p className="text-2xl my-6">{data[0].para}</p>
          </div>
          <div className="right w-[100%]  md:w-[50%] p-3 ">
            <ThreeDModel
              file={agLogo3}
              className="w-[400px] h-[400px] mx-auto"
            />
          </div>
        </div>

        <div className="bothContainer   w-full mx-auto flex-col  md:flex-row md:flex mb-[100px] items-center justify-center ">
          <div className="left   left w-[100%]  my-5 md:w-[50%]  p-3 ">
            <h1 className="text-left text-6xl font-bold">{data[1].header}</h1>
            <p className="text-2xl my-6">{data[1].para}</p>
          </div>
          <div className="right w-[100%]  md:w-[50%] md:pl-[100px] p-3   ">
            <ThreeDModel
              file={agLogo}
              className="w-[400px] h-[400px] mx-auto"
            />
          </div>
        </div>

        <div className="bothContainer  w-full mx-auto flex-col  md:flex-row-reverse md:flex mb-[100px] items-center justify-center ">
          <div className="w-[100%]  my-5 md:w-[50%]  mx-auto text-left justify-center items-center align-middle p-3 ">
            <h1 className="text-left text-6xl font-bold">{data[2].header}</h1>
            <p className="text-2xl my-6 p-3 ">{data[2].para}</p>
          </div>
          <div className="right w-[100%]  md:w-[50%] ">
            <ThreeDModel
              file={agLogo2}
              className="w-[400px] h-[400px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
