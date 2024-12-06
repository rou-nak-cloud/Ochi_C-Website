import React from 'react'

const Featured = () => {
  return (
    <>
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-500 pb-10'>
        <h1 className='text-6xl tracking-tight font-["Roboto_Condensed"]'>Featured Projects</h1>
      </div>
      <div className='content'>
      <div className='cards w-full flex gap-10 px-20 mt-5'>
        <div className='card relative w-1/2 h-[70vh]'>
        <div className='header mt-10 mb-4 flex  items-center gap-3'>
            <div className='w-3 h-3 rounded-full bg-zinc-900'></div>
            <span className='uppercase text-1xl'>Cardboard Spaceship</span>
        </div>
        <h1 className='absolute w-full left-full -translate-x-[50%] top-1/2 -translate-y-[50%] text-[#CDEA68] z-[9] text-7xl tracking-tight font-["Roboto_Condensed"]'>
            {/* {"Cardboard Spaceship".split("").map((item,index) => (
                <span>{item}</span>
            ))} */}
        </h1>
            <div className='cardContainer w-full h-full rounded-3xl overflow-hidden'>
            <img className='object-fit rounded-3xl' 
        src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" srcset="" />
            </div>
            <div className='btns flex gap-6 py-5'>
                <button className='px-2 py-2 border-[2px] tracking-tight uppercase border-[#000] rounded-3xl cursor-pointer '>Branded Template</button>
                <button className='px-2 py-2 border-[2px] tracking-tight uppercase border-[#000] rounded-3xl cursor-pointer'>Sales Deck</button>
                <button className='px-2 py-2 border-[2px] tracking-tight uppercase border-[#000] rounded-3xl cursor-pointer'>Social Media Templates</button>
            </div>
        </div>
        <div className='card relative w-1/2 h-[70vh]'>
        <div className='header mt-10 mb-4 flex  items-center gap-3'>
            <div className='w-3 h-3 rounded-full bg-zinc-900'></div>
            <span className='uppercase text-1xl'>AH2 & Matt Horn</span>
        </div>
        <h1 className='absolute w-full right-full translate-x-[50%] top-1/2 -translate-y-[50%] text-[#CDEA68] z-[9] text-7xl tracking-tight font-["Roboto_Condensed"]'>
              {/* {"AH2 & Matt Horn".split("").map((item,index) => (
                <span>{item}</span>
            ))} */}
            </h1>
        <div className='cardContainer w-full h-full rounded-3xl overflow-hidden'>
        <img className='object-cover rounded-3xl' 
        src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" srcset="" />
        </div>
        <div className='btns flex gap-6 py-5'>
                <button className='px-2 py-2 border-[2px] tracking-tight uppercase border-[#000] rounded-3xl cursor-pointer '>Pitch Deck</button>
            </div>
        </div>
      </div>
      </div>

      <div className='content'>
      <div className='cards w-full flex gap-10 px-20 mt-5'>
        <div className='card relative w-1/2 h-[70vh]'>
        <div className='header mt-[150px] mb-4 flex  items-center gap-3'>
            <div className='w-3 h-3 rounded-full bg-zinc-900'></div>
            <span className='uppercase text-1xl'>Fyde</span>
        </div>
        <h1 className='absolute mt-[150px] w-full left-full -translate-x-[50%] top-1/2 -translate-y-[50%] text-[#CDEA68] z-[9] text-7xl tracking-tight font-["Roboto_Condensed"]'>
            {/* {"Cardboard Spaceship".split("").map((item,index) => (
                <span>{item}</span>
            ))} */}
        </h1>
            <div className='cardContainer w-full h-full rounded-3xl overflow-hidden'>
            <img className='object-fit rounded-3xl' 
        src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" srcset="" />
            </div>
            <div className='btns flex gap-6 py-5'>
                <button className='px-2 py-2 border-[2px] border-[#000] tracking-tight uppercase rounded-3xl cursor-pointer '>Audit</button>
                <button className='px-2 py-2 border-[2px] border-[#000] tracking-tight uppercase rounded-3xl cursor-pointer'>Copy Writing</button>
                <button className='px-2 py-2 border-[2px] border-[#000] tracking-tight uppercase rounded-3xl cursor-pointer'>Sales Deck</button>
                <button className='px-2 py-2 border-[2px] border-[#000] tracking-tight uppercase rounded-3xl cursor-pointer'>Slides Design</button>
            </div>
        </div>
        <div className='card relative w-1/2 h-[70vh]'>
        <div className='header mt-[150px] mb-4 flex  items-center gap-3'>
            <div className='w-3 h-3 rounded-full bg-zinc-900'></div>
            <span className='uppercase text-1xl'>Vise</span>
        </div>
        <h1 className='absolute mt-[150px] w-full right-full translate-x-[50%] top-1/2 -translate-y-[50%] text-[#CDEA68] z-[9] text-7xl tracking-tight font-["Roboto_Condensed"]'>
              {/* {"AH2 & Matt Horn".split("").map((item,index) => (
                <span>{item}</span>
            ))} */}
            </h1>
        <div className='cardContainer w-full h-full rounded-3xl overflow-hidden'>
        <img className='object-cover rounded-3xl' 
        src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" srcset="" />
        </div>
        <div className='btns flex gap-6 py-5'>
                <button className='px-2 py-2 border-[2px] tracking-tight uppercase border-[#000] rounded-3xl cursor-pointer '>Agency</button>
                <button className='px-2 py-2 border-[2px] tracking-tight uppercase border-[#000] rounded-3xl cursor-pointer '>Company Presentation</button>
            </div>
        </div>
      </div>
      </div>

      <div className='content'>
      <div className='cards w-full flex gap-10 px-20 mt-5'>
        <div className='card relative w-1/2 h-[70vh]'>
        <div className='header mt-[260px] mb-4 flex  items-center gap-3'>
            <div className='w-3 h-3 rounded-full bg-zinc-900'></div>
            <span className='uppercase text-1xl'>Trawa</span>
        </div>
        <h1 className='absolute mt-[280px] w-full left-full -translate-x-[50%] top-1/2 -translate-y-[50%] text-[#CDEA68] z-[9] text-7xl tracking-tight font-["Roboto_Condensed"]'>
            {/* {"Cardboard Spaceship".split("").map((item,index) => (
                <span>{item}</span>
            ))} */}
        </h1>
            <div className='cardContainer w-full h-full rounded-3xl overflow-hidden'>
            <img className='object-fit rounded-3xl' 
        src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" srcset="" />
            </div>
            <div className='btns flex gap-6 py-5'>
                <button className='px-2 py-2 border-[2px] tracking-tight uppercase border-[#000] rounded-3xl cursor-pointer '>Brand Identity</button>
                <button className='px-2 py-2 border-[2px] tracking-tight uppercase border-[#000] rounded-3xl cursor-pointer'>Design Research</button>
                <button className='px-2 py-2 border-[2px] tracking-tight uppercase border-[#000] rounded-3xl cursor-pointer'>Investor Deck</button>
            </div>
        </div>
        <div className='card relative w-1/2 h-[70vh]'>
        <div className='header mt-[260px] mb-4 flex  items-center gap-3'>
            <div className='w-3 h-3 rounded-full bg-zinc-900'></div>
            <span className='uppercase text-1xl'>Premium Blend</span>
        </div>
        <h1 className='absolute mt-[280px] w-full right-full translate-x-[50%] top-1/2 -translate-y-[50%] text-[#CDEA68] z-[9] text-7xl tracking-tight font-["Roboto_Condensed"]'>
              {/* {"AH2 & Matt Horn".split("").map((item,index) => (
                <span>{item}</span>
            ))} */}
            </h1>
        <div className='cardContainer w-full h-full rounded-3xl overflow-hidden'>
        <img className='object-cover rounded-3xl' 
        src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" srcset="" />
        </div>
        <div className='btns flex gap-6 py-5'>
                <button className='px-2 py-2 border-[2px] tracking-tight uppercase border-[#000] rounded-3xl cursor-pointer '>Branded Template</button>
            </div>
        </div>
      </div>
      </div>

      <div className='centerBtn mt-[400px] text-center flex items-center justify-center'>
     <button className="flex gap-10 items-center px-10 py-5 bg-zinc-900 mt-10 rounded-full text-white uppercase">
           View all case studies
           <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
         </button>
     </div>
    </div>
     </>
  )
}

export default Featured
