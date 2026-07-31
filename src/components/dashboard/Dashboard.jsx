import React from "react";
import heroImg from "../../assets/hero.png";
import {
  FolderOpen,
  Users,
  UserPlus,
  Star,
  Code2,
  Sparkles,
} from "lucide-react";

function Dashboard({user}) {
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
              Analyze GitHub profiles
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

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 !mt-4  text-[#2F241D] ">
 <div className="flex items-center gap-4 h-28 !p-4 rounded border border-[#E7D7BB] shadow-sm">

  <div className="w-14 h-14 rounded-xl  flex items-center justify-center">
    <FolderOpen className="w-7 h-7 " />
  </div>

  <div>
    <p className="text-gray-500 text-sm !mt-1">Public Repositories</p>
    <h2 className="text-3xl font-bold text-[#2F241D]">
      {user?.publicRepos ?? "--"}
    </h2>
  </div>

</div>
<div className="flex items-center gap-4 h-28 !p-4 rounded border border-[#E7D7BB]  shadow-sm">

  <div className="w-14 h-14 rounded-xl flex items-center justify-center">
    <Users className="w-7 h-7" />
  </div>

  <div>
    <p className="text-gray-500 text-sm">Followers</p>
    <h2 className="text-3xl font-bold text-[#2F241D]">
      {user?.followers ?? "--"}
    </h2>
  </div>

</div>

  <div className="flex items-center gap-4 h-28 !p-4 rounded border border-[#E7D7BB]  shadow-sm">
  <div className="w-14 h-14 rounded-xl  flex items-center justify-center">
    <UserPlus className="w-7 h-7" />
  </div>

  <div>
    <p className="text-gray-500 text-sm">Following</p>
    <h2 className="text-3xl font-bold text-[#2F241D]">
      {user?.following ?? "--"}
    </h2>
  </div>
</div>

<div className="flex items-center gap-4 h-28 !p-4 rounded border border-[#E7D7BB]  shadow-sm">
  <div className="w-14 h-14 rounded-xl  flex items-center justify-center">
    <Star className="w-7 h-7 text-yellow-500" />
  </div>

  <div>
    <p className="text-gray-500 text-sm">Total Stars</p>
    <h2 className="text-3xl font-bold text-[#2F241D]">
      {user?.totalStars ?? "--"}
    </h2>
  </div>
</div>
</div>

<footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 !mt-4 ">
 <div className="w-full h-56 rounded border border-[#E7D7BB] shadow-sm p-4">
  <h1 className="text-2xl font-bold text-center !mt-4 !mb-4 text-[#2F241D]">
  Features
</h1>

  <ul className="!mt-5">
    <li className="flex items-center gap-3 py-3 border-b border-[#E7D7BB]/40 !mt-2 !ml-2  transition-all hover:bg-[#FBF7F0] hover:rounded-md cursor-pointer">
      <Users size={20} className="text-violet-600" />
      <span className="font-medium">Detailed profile overview</span>
    </li>

    <li className="flex items-center gap-3 py-3 border-b border-[#E7D7BB]/40 !mt-2 !ml-2  transition-all hover:bg-[#FBF7F0] hover:rounded-md cursor-pointer">
      <FolderOpen size={20} className="text-yellow-500" />
      <span className="font-medium">Repository insights</span>
    </li>

    <li className="flex items-center gap-3 py-3 border-b border-[#E7D7BB]/40 !mt-2 !ml-2  transition-all hover:bg-[#FBF7F0] hover:rounded-md cursor-pointer ">
      <Code2 size={20} className="text-green-600" />
      <span className="font-medium">Language statistics</span>
    </li>

    <li className="flex items-center gap-3 py-3 !mt-2 !ml-2  transition-all hover:bg-[#FBF7F0] hover:rounded-md cursor-pointer">
      <Sparkles size={20} className="text-purple-600" />
      <span className="font-medium">AI powered analysis</span>
    </li>
  </ul>
</div>

  <div className="w-full h-56 rounded border border-[#E7D7BB] shadow-sm"></div>

  <div className="w-full h-56 rounded border border-[#E7D7BB] shadow-sm"></div>
</footer>


    </div>
  );
}

export default Dashboard;