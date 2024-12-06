import React from "react";

const About = () => {
  return (
    <div className="w-full p-24 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black -mt-16 z-[8]">
      <h1 className="text-[4vw] tracking-tight leading-[4.5vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      <div class=" h-[40vh] flex flex-col md:flex-row  border-t-[1px] border-[#bad360] mt-10 p-10 gap-10">
        <div class="flex-[3]">
          <p class="font-bold">What you can expect:</p>
        </div>

        <div class="flex-[2]">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p class="mt-4">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>

        <div class="flex-1 flex flex-col md:items-end md:justify-end laptop:items-start laptop:justify-start">
          <p class="mb-3 font-bold">S:</p>
          <a href="#" class="hover:underline">
            Instagram
          </a>
          <a href="#" class="hover:underline">
            Twitter
          </a>
          <a href="#" class="hover:underline">
            Facebook
          </a>
          <a href="#" class="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="w-full flex gap-5 pt-10 border-t-[1px] mt-10 border-[#a5ba59]">
        <div className="w-1/2 ">
          <h1 className="text-6xl">Our Approach:</h1>
          <button className="flex gap-10 items-center px-10 py-5 bg-zinc-900 mt-10 rounded-full text-white uppercase">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] pt-5 rounded-3xl bg-[#bad360] ">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>

    </div>
  );
};

export default About;
