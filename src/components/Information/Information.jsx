import React from 'react'
import gold from "../../assets/gold.jpg"
import flowchart from "../../assets/flowchart.png"
function Information() {
  return (
      <div className="max-w-[1400px] mx-auto p-2">
          <div className="flex flex-col w-full  items-center  ">
              <img
                  className="max-w-[1400px] w-3/4 lg:w-full "
                  src={flowchart}
                  alt='flowchart'
              />
              <p className="text-center font-normal  text-lg md:text-2xl max-w-[1000px] mt-10">
                  We unify your financial activity and maintain your books end
                  to end thereby enabling you to seamlessly file your taxes on
                  time.
              </p>
          </div>
      </div>
  );
}

export default Information