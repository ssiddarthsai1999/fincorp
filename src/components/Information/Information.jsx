import React from "react";
import gold from "../../assets/gold.jpg";
import flowchart from "../../assets/flowchart.png";
import FinAnim from "../../assets/fincorpx-animation.riv";
import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";
import useWindowSize from "../../hooks/useWindowSize";
function Information() {
  const { width } = useWindowSize();
  const isMobile = width < 1280;

  return (
    <div className="max-w-[1400px] mx-auto p-2">
      <div className="flex flex-col w-full  items-center  ">
        <Rive
          src={FinAnim}
          style={{ height: isMobile ? "40vh" : "60vh", width: isMobile ? "90vw" : "60vw" }}
          layout={
            new Layout({ fit: Fit.FitWidth, alignment: Alignment.TopCenter })
          }
        />

        <p className="text-center font-normal  text-lg md:text-2xl max-w-[1000px] mt-10">
          We unify your financial activity and maintain your books end to end
          thereby enabling you to seamlessly file your taxes on time.
        </p>
      </div>
    </div>
  );
}

export default Information;
