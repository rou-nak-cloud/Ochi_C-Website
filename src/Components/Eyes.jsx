import React, { useEffect, useState } from "react";

const Eyes = () => {
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
    <div className="eyes relative w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.9" className='w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'></div>
      <div className="absolute flex gap-12 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
        <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-200">
          <div className="relative w-2/3 h-2/3 bg-zinc-950 rounded-full">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
            > 
              <div className="w-10 h-10 bg-zinc-200 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[14vw] h-[14vw] rounded-full bg-zinc-200">
          <div className="relative w-2/3 h-2/3 bg-zinc-950 rounded-full">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
            >
              <div className="w-10 h-10 bg-zinc-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
