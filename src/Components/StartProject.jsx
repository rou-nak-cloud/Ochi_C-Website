import React, { useEffect, useState } from "react";

const StartProject = () => {

    const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);

  return (
    <>
    <div className="relative ">

    <div  data-scroll data-scroll-section data-scroll-speed='.9' className='w-full h-screen py-[35vw]  bg-[#CDEA68] flex flex-col items-center justify-center'>
      <h1 className='text-[12vw] font-bold leading-[10vw] font-["Roboto_Condensed"]'>Ready</h1>
      <h1 className='text-[12vw] font-bold leading-[10vw] font-["Roboto_Condensed"]'>To Start</h1>
      <h1 className='text-[12vw] font-bold leading-[10vw] font-["Roboto_Condensed"]'>The Project?</h1>
      <div className='startBtn mt-5'>
      <button className="flex gap-10 items-center px-7 py-3 bg-zinc-900 mt-10 rounded-full text-white uppercase cursor-pointer">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-200 cursor-pointer"></div>
          </button>
          <h1 className='text-xl uppercase text-center mb-4 pt-5'>Or</h1>
          <button className="flex gap-10 items-center px-7 py-3 bg-[#CDEA68]mt-10 border-2 border-[#000] rounded-full text-black uppercase ">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-900 cursor-pointer"></div>
          </button>
      </div>
    </div>

    <div data-scroll data-scroll-section data-scroll-speed='-.1' className="eyes absolute w-full h-screen overflow-hidden top-10">
      <div className="absolute flex gap-12 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
        <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-[#fff]">
          <div className="relative w-2/3 h-2/3 bg-zinc-950 rounded-full">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
            > 
              <div className="w-7 h-7 bg-[#CDEA68] rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-[#fff]">
          <div className="relative w-2/3 h-2/3 bg-zinc-950 rounded-full">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
            >
              <div className="w-7 h-7 bg-[#CDEA68] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default StartProject
