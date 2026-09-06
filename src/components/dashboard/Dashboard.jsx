import React from "react";
import heroImg from "../../assets/hero.png";
import {
  FolderOpen,
  Users,
  UserPlus,
  Star,
  Code2,
  Sparkles,
   History,
  X,
  ArrowUpRight,
} from "lucide-react";

function Dashboard({ 
    user,
    searchHistory = [],
    deleteHistory,
    clearHistory
   }) {

    
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
 <div className="flex items-center gap-4 h-28 !p-4 rounded-xl border border-[#E7D7BB] shadow-sm">

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
<div className="flex items-center gap-4 h-28 !p-4 rounded-xl border border-[#E7D7BB]  shadow-sm">

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

  <div className="flex items-center gap-4 h-28 !p-4 rounded-xl border border-[#E7D7BB]  shadow-sm">
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

<div className="flex items-center gap-4 h-28 !p-4 rounded-xl border border-[#E7D7BB]  shadow-sm">
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

{/* footer */}

<footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 !mt-4 ">
 <div className="w-full h-auto rounded-xl border border-[#E7D7BB] shadow-sm p-5 ">
  <h2 className="text-xl font-bold text-center text-[#2F241D] mb-5 !mt-2">
    Features
  </h2>

  <ul className="space-y-1 !mt-2">

    <li className="!mt-3 !ml-2 flex items-center gap-3 py-3 px-2 border-b border-[#E7D7BB]/40 transition-all duration-200 hover:bg-[#FBF7F0] hover:rounded-lg cursor-pointer">
      <div className=" w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center">
        <Users size={18} className="text-violet-600 " />
      </div>

      <span className="font-medium text-[#2F241D]">
        Detailed profile overview
      </span>
    </li>

    <li className="!ml-2 !mt-3 flex items-center gap-3 py-3 px-2 border-b border-[#E7D7BB]/40 transition-all duration-200 hover:bg-[#FBF7F0] hover:rounded-lg cursor-pointer">
      <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center">
        <FolderOpen size={18} className="text-yellow-500" />
      </div>

      <span className="font-medium text-[#2F241D]">
        Repository insights
      </span>
    </li>

    <li className=" !ml-2 !mt-3 flex items-center gap-3 py-3 px-2 border-b border-[#E7D7BB]/40 transition-all duration-200 hover:bg-[#FBF7F0] hover:rounded-lg cursor-pointer">
      <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
        <Code2 size={18} className="text-green-600" />
      </div>

      <span className="font-medium text-[#2F241D]">
        Language statistics
      </span>
    </li>

    <li className="!ml-2 !mt-3 flex items-center gap-3 py-3 px-2 transition-all duration-200 hover:bg-[#FBF7F0] hover:rounded-lg cursor-pointer">
      <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center">
        <Sparkles size={18} className="text-purple-600" />
      </div>

      <span className="font-medium text-[#2F241D]">
        AI Powered Analysis
      </span>
    </li>

  </ul>
</div>

{searchHistory.length === 0 ? (

  // EMPTY STATE
  <div className="w-full h-auto rounded-xl border border-[#E7D7BB] shadow-sm p-5 flex flex-col items-center justify-center text-center">

    <div className="w-12 h-12 rounded-full bg-[#FBF7F0] flex items-center justify-center mb-3">
      <History size={22} className="text-[#2F241D]" />
    </div>

    <h2 className="text-lg font-bold text-[#2F241D]">
      No Recent Searches
    </h2>

    <p className="text-sm text-gray-500 mt-2 max-w-xs">
      Your recently searched GitHub profiles will appear here.
    </p>

  </div>

) : (

  // HISTORY EXISTS
  <div className="w-full h-auto rounded-xl border border-[#E7D7BB] shadow-sm p-5">

    <div className="flex items-center justify-between mb-4">

      <div className="flex items-center gap-2">
        <History size={19} className="text-[#2F241D] !ml-4 !mt-3" />

        <h2 className="text-lg font-bold text-[#2F241D] !mt-3 !ml-3">
          Recent Searches
        </h2>
      </div>

      <button
        onClick={clearHistory}
        className="text-xs font-semibold text-gray-500 hover:text-red-500 transition !mr-2"
      >
        Clear All
      </button>

    </div>

    <div className="space-y-2">

      {searchHistory.map((item) => (

        <div
          key={item._id}
          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#FBF7F0] transition"
        >

          <div className="flex items-center !gap-3 !mt-2">

            <img
              src={item.avatar}
              alt={item.username}
              className="!w-9 !h-9 !rounded-full !ml-2"
            />
            <div className="!mt-2">
              <p className="text-sm font-semibold text-[#2F241D]">
                {item.username}
              </p>

              <p className="text-xs text-gray-500">
          {new Date(item.searchedAt).toLocaleString()}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-1">

            <button
              className="p-2 rounded-lg hover:bg-[#E7D7BB] transition"
              title="Search again"
            >
              <ArrowUpRight
                size={16}
                className="text-[#2F241D]"
              />
            </button>

            <button
                onClick={() => deleteHistory(item._id)}
              className="p-2 rounded-lg hover:bg-red-100 transition"
              title="Remove"
            >
              <X
                size={15}
                className="text-gray-400"
              />
            </button>

          </div>

        </div>

      ))}

    </div>

  </div>

)}

<div className="w-full h-auto rounded-xl border border-[#E7D7BB] shadow-sm p-5 ">
  <h2 className="text-lg font-bold text-center text-[#2F241D] mb-5 !mt-2">
    How It Works
  </h2>

  <div className="space-y-4 !mt-3">

    <div className=" lg:!mt-5 flex items-start gap-4 !mt-2 ">
      <div className="w-8 h-8 rounded-full bg-[#E7D7BB] text-[#2F241D] flex items-center justify-center font-bold !ml-2">
        1
      </div>

      <div>
        <h3 className="font-semibold text-[#2F241D] text-sm">
          Enter GitHub Username
        </h3>

       <p className="lg:!mt-2 text-xs opacity-60 font-semibold">
          Type any public GitHub username into the search bar.
        </p>
      </div>
    </div>

    <div className="lg:!mt-5 flex items-start gap-4 !mt-3">
      <div className="w-8 h-8 rounded-full bg-[#E7D7BB] text-[#2F241D] flex items-center justify-center font-bold !ml-2">
        2
      </div>

      <div>
        <h3 className="font-semibold text-[#2F241D] text-sm">
          Click Generate
        </h3>

<p className="lg:!mt-2 text-xs opacity-60 font-semibold">
          We'll fetch and analyze the profile data.
        </p>
      </div>
    </div>

    <div className="lg:!mt-5 flex items-start gap-4 !mt-3">
      <div className="w-8 h-8 rounded-full bg-[#E7D7BB] text-[#2F241D] flex items-center justify-center font-bold !ml-2">
        3
      </div>

      <div>
        <h3 className="font-semibold text-[#2F241D] text-sm">
          Explore Insights
        </h3>
<p className="lg:!mt-2 text-xs opacity-60 font-semibold">
  View stats, repository analytics and language usage.
</p>
      </div>
    </div>
  </div>
</div>
</footer>
    </div>
  );
}

export default Dashboard;