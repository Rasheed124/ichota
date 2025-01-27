import React, { useState } from "react";
import Banner from "../components/Banner";
import Overview from "../components/Overview";
import { Link } from "react-router";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-10">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex justify-center">
              <nav className="-mb-px flex gap-x-6" aria-label="Tabs">
                <Link
                  to={"/"}
                  className="shrink-0 border-b-2 px-1 pb-4 text-lg font-bold cursor-pointer 
                 
                    border-[#1167B1] text-[#1167B1]
                     hover:border-gray-300 hover:text-gray-700"
                >
                  Overview
                </Link>
                <Link
                  to={"/apply"}
                  className="shrink-0 border-b-2 px-1 pb-4 text-lg font-bold cursor-pointer 
                 
                     border-transparent text-black hover:border-gray-300 hover:text-gray-700"
                >
                  Application
                </Link>
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            <>
              <Overview />
            </>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default Home;
