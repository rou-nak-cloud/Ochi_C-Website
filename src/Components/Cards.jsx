import React from 'react'

const Cards = () => {
  return (
    <div  data-scroll data-scroll-speed="-.2"  className='w-full h-screen flex items-center px-10 gap-5'>
      <div className='cardContainer w-1/2 h-[50vh]'>
        <div className='card relative flex items-center justify-center w-full h-full rounded-2xl bg-[#004D43]'>
            <img className='w-32'  
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" srcset="" />
            <button className='absolute left-6 bottom-6 border-2 rounded-2xl border-[#a5ba59] px-3 py-1 text-[#bdd959] font-semibold'>&copy; 2019-2022</button>
        </div>
        
      </div>
      <div className='cardContainer flex gap-5 w-1/2 h-[50vh]'>
        <div className='card relative flex items-center justify-center w-1/2 h-full rounded-2xl bg-[#1b2221]'>
        <img className='w-32'  
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" srcset="" />
            <button className='absolute left-6 bottom-6 border-[1px] rounded-2xl border-[#fff] px-3 py-1 text-[#fff] font-light uppercase tracking-tight'>Rating 5.0 on clutch</button>
            </div>
        <div className='card relative flex items-center justify-center w-1/2 h-full rounded-2xl bg-[#1f2121]'>
        <img className='w-32'  
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" srcset="" />
           <button className='absolute left-6 bottom-6 border-[1px] rounded-2xl border-[#fff] px-3 py-1 text-[#fff] font-light uppercase tracking-tight '>Buisness Bootcamp Alumni</button>
            </div>
      </div>
    </div>
  )
}

export default Cards
