import React from 'react'
import robologo from "../../assets/robologo.png"
import comp1 from "../../assets/comp1.png"
import comp2 from "../../assets/comp2.png";
import comp3 from "../../assets/comp3.png";
import comp4 from "../../assets/comp4.png";

function Integrations() {
  return (
      <div id="integrations" className="w-full   justify-center mx-auto">
          <div>
              <h1 className="text-center text-6xl font-bold">Integrations</h1>
              <p className="text-center text-2xl my-6 text-[#535353] mb-[100px]">
                  We provide Integrations with
              </p>
          </div>

          <div className="flex flex-col w-full mx-auto justify-center  items-center  md:flex-row  ">
              <img
                  className="w-[200px] mb-10 lg:mx-[40px] md:mx-[10px]"
                  src={comp1}
                  alt="companylogos"
              />
              <img
                  className="w-[200px] mb-10 lg:mx-[40px] md:mx-[10px]"
                  src={comp2}
                  alt="companylogos"
              />
              <img
                  className="w-[200px] mb-10 lg:mx-[40px] md:mx-[10px]"
                  src={comp3}
                  alt="companylogos"
              />
              <img
                  className="w-[200px] mb-10 lg:mx-[40px] md:mx-[10px]"
                  src={comp4}
                  alt="companylogos"
              />
          </div>
      </div>
  );
}

export default Integrations