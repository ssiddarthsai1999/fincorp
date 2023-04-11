import React from "react";
import Arrow from "../../assets/Arrow.svg";
import "./Home.css";
import robologo from "../../assets/robologo.png";



function Home() {
  return (
      <div className="homeContainer w-full  ">
          <div className="flex flex-col  p-2 md:p-4 max-w-[1400px] mx-auto ">
              <h2 className="leading-10 font-bold md:text-3xl lg:text-5xl mb-3 md:mb-[100px] text-center">
                  Fincorpx's AI-driven end-to-end financial automation save
                  businesses time so you can expand and scale faster.
              </h2>

              <a href="https://fitgpt.netlify.app">
                  <button className="mx-auto justify-center flex  border-2 border-black p-3 rounded-full mb-3  text-lg px-10 font-bold relative items-center align-middle ">
                      Book a demo
                      <i
                          class="fa-solid fa-arrow-right"
                          style={{ color: "#ffffff", marginLeft: "10px" }}
                      ></i>
                  </button>
              </a>
          </div>
      </div>
  );
}

export default Home;
