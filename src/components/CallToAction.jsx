import React from "react";
import calltoaction_bg from "../assets/bg-foot.png";
import header_bg from "../assets/header-bg.jpg";
import apple_image from "../assets/apple-store.png";
import gogole_image from "../assets/google-play.png";

const CallToAction = () => {
  return (
    <>
      <section
        style={{ "--image-url": `url(${header_bg})` }}
        className="bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center py-16 lg:py-24 mt-10 px-4 "
      >
        <div className=" max-w-screen-lg mx-auto rounded-xl">
          <div className="grid grid-cols-1 gap-8  lg:grid-cols-2 lg:gap-16 text-primary">
            <div className="relative order-2">
              <img
                src={calltoaction_bg}
                alt="Full Height"
                className="h-[50vh] w-full object-contain"
              />
            </div>
            {/* <!-- RIGHT SIDED CONTENT --> */}

            <div className="order-1 flex flex-col justify-center text-white">
              <h2 className="text-3xl font-bold sm:text-4xl mt-3">
                Download iChota
              </h2>

              <p className="my-4 text-base">
                Get the best deals wherever you are. Make extra cash by selling
                items or providing a service on iChota. Download now!
              </p>

              <div className="mt-2">
                <div className="flex gap-4 ">
                  <a href="#">
                    <img className="w-32 lg:w-42 h-auto" src={apple_image} alt="" />
                  </a>
                  <a href="#">
                    <img className="w-32 lg:w-42 h-auto" src={gogole_image} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
