import { motion } from 'motion/react';
import React from 'react';

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen bg-zinc-200 pt-1">
      <div className="text-structure mt-60 px-6 sm:px-10 md:px-20">
        {["We Create", "Eye - Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker font-bold">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="mr-[1vw] w-[8vw] h-[9vh] rounded-md relative"
                  >
                    <img
                      className="ml-2 w-[8vw] h-[4.6vw] object-cover"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMV..."
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="uppercase text-3xl sm:text-5xl md:text-8xl leading-tight md:leading-[5.5vw] tracking-tighter font-['Roboto_Condensed']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-500 mt-10 md:mt-20 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-4 px-6 sm:px-10 md:px-20">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-sm sm:text-md font-light leading-none tracking-tight">
            {item}
          </p>
        ))}
        <div className="start flex flex-col sm:flex-row items-center gap-3">
          <div className="border-[1px] rounded-full border-zinc-700 font-semibold text-sm sm:text-md px-4 py-2 uppercase cursor-pointer">
            Start the Project
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-zinc-600 text-black"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
