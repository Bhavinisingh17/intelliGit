import React from "react";
import heroImg from "../../assets/hero.png";

function Dashboard() {
  return (
    <div>
      <header className="w-full bg-[#E7D7BB] rounded-lg px-6 md:px-10 py-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">

          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <p className="!ml-5 text-sm md:text-base font-bold">
              Welcome to IntelliGit
            </p>

            <h1 className="!ml-5 !mt-3 text-xl sm:text-4xl lg:text-5xl font-bold text-[#2F241D] max-[622px]:mt-1">
              Analyze GitHub Profiles
              <br />
              like never before.
            </h1>

<p className="!ml-5 !mt-3 text-sm sm:text-base sm:mt-2 text-gray-700 max-[622px]:mt-1"> Search any public GitHub profile to explore
               repositories,
              languages, stars, forks, and much more.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImg}
              alt="Hero"
              className="w-64 sm:w-80 md:w-[380px] lg:w-[450px] h-auto"
            />
          </div>

        </div>
      </header>
    </div>
  );
}

export default Dashboard;