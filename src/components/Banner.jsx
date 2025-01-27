import React from "react";

import header_bg from "../assets/header-bg.jpg";

const Banner = () => {
  return (
    <>
      <section
        style={{ "--image-url": `url(${header_bg})` }}
        className="bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center"
      >
        <div className="relative mx-auto max-w-screen-xl py-30 px-4 min-h-[50vh] sm:px-6  lg:px-8">
          <div className=" text-center ">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl capitalize">
              Full stack Developer Job role
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
