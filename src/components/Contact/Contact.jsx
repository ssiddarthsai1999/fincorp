import React from 'react'
import "./Contact.css"

function Contact() {
  return (
      <div
          id="contact"
          className="flex-col  w-full mx-auto justify-center items-center align-middle "
      >
          <h1 className="text-center text-6xl font-bold mb-5">Contact us</h1>
          <h1 className="text-center text-xl mb-5">721391238123</h1>
          <h1 className="text-center text-xl mb-5">Contac@gmail.com</h1>
          <a href="https://fitgpt.netlify.app">
              <button className="mt-10 mx-auto justify-center flex   p-3 rounded-full mb-10  text-lg px-10 font-bold relative items-center align-middle bg-[#5CEE9C] text-black">
                  Book a demo
                  <i
                      class="fa-solid fa-arrow-right"
                      style={{ color: "black", marginLeft: "10px" }}
                  ></i>
              </button>
          </a>
      </div>
  );
}

export default Contact