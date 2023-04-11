import React from 'react'
import gold from "../../assets/gold.jpg"
import Model from '../model/Model';
import Room from "../../assets/Room.fbx"
import Cottage from "../../assets/cottage.fbx";

function Services() {
  return (
      <div className="max-w-[1400px] mx-auto">
          <div
              id="features"
              className="p-2 flex-col flex mx-auto justify-center items-center "
          >
              <div className="bothContainer  w-full mx-auto flex-col  md:flex-row-reverse md:flex mb-[100px] items-center justify-center ">
                  <div className="left w-[100%]  my-5 md:w-[50%] p-3  ">
                      <h1 className="text-left text-6xl font-bold">
                          Faster Monthly Close
                      </h1>
                      <p className="text-2xl my-6">
                          You can't get to real-time finance if it takes three
                          weeks to close your books. We close your books in days
                          rather than weeks, so you can make faster business
                          decisions.
                      </p>
                  </div>
                  <div className="right w-[100%]  md:w-[50%] p-3 ">
                      <Model
                          className="w-[400px] h-[400px] mx-auto"
                          modelPath="/path/to/my-model.fbx"
                      />
                  </div>
              </div>

              <div className="bothContainer   w-full mx-auto flex-col  md:flex-row md:flex mb-[100px] items-center justify-center ">
                  <div className="left   left w-[100%]  my-5 md:w-[50%]  p-3 ">
                      <h1 className="text-left text-6xl font-bold">
                          Minimize audit risk & ensure safety
                      </h1>
                      <p className="text-2xl my-6">
                          FincorpX minimizes audit risk and safeguards finances
                          with stringent security measures. Our expert team
                          ensures compliance, letting you focus on business
                          growth and success.
                      </p>
                  </div>
                  <div className="right w-[100%]  md:w-[50%] md:pl-[100px] p-3   ">
                      <Model
                          className="w-[400px] h-[400px] mx-auto"
                          modelPath="/path/to/my-model.fbx"
                      />
                  </div>
              </div>

              <div className="bothContainer  w-full mx-auto flex-col  md:flex-row-reverse md:flex mb-[100px] items-center justify-center ">
                  <div className="w-[100%]  my-5 md:w-[50%]  mx-auto text-left justify-center items-center align-middle p-3 ">
                      <h1 className="text-left text-6xl font-bold">
                          Unmatched Accuracy
                      </h1>
                      <p className="text-2xl my-6 p-3 ">
                          Always count on getting accurate books delivered
                          monthly. By pairing our concierge team with AI, you'll
                          enjoy a new level of transparency and accuracy in
                          accounting.
                      </p>
                  </div>
                  <div className="right w-[100%]  md:w-[50%] ">
                      <Model
                          className="w-[400px] h-[400px] mx-auto "
                          modelPath={Cottage}
                      />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Services