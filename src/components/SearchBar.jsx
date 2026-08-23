import React from "react";
import { Search, History, Bell } from "lucide-react";

function SearchBar({ userName, setUsername, handleGenerate }) {
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
<div className=" top-0 z-30 w-full !px-2 sm:px-4 sm:!pt-0 !pb-4 !mt-0 lg:pt-0">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        

        {/* Search Area */}
        <div className="flex items-center gap-3 w-full lg:max-w-3xl">

          {/* Search Input */}
          <div
            className="
              flex items-center flex-1
              h-12
              bg-[#E7D7BB]
              border border-[#DCCBB0]
              rounded-xl
              shadow-sm
              !px-3
              focus-within:border-[#2F241D]
              focus-within:ring-2
              focus-within:ring-[#E7D7BB]
              transition-all
            "
          >
            <Search
              size={20}
              className="ml-2 mr-2 text-[#2F241D] shrink-0"
            />

            <input
              type="text"
              placeholder="Enter GitHub username"
              value={userName}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter" && userName?.trim()) {
                  handleGenerate();
                }
              }}
              className="
                flex-1
                min-w-0
                h-full
                bg-transparent
                outline-none
                !px-2
                text-sm
                text-[#2F241D]
                placeholder:text-gray-500
              "
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            // disabled={!userName?.trim()}
            className="
              h-12
             !bg-[#2F241D]
              text-[#F9F4EC]
              !px-6
              rounded-xl
              text-sm
              font-semibold
              hover:bg-[#46362B]
              disabled:opacity-40
              disabled:cursor-not-allowed
              transition-all
              shrink-0
            "
          >
            Generate
          </button>

        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">

          {/* Search History */}
          <button
            type="button"
            title="Search History"
            className="
              flex items-center
              gap-2
              h-11
              !px-3.5
              rounded-xl
              border
              border-[#E0D2BC]
              bg-[#E7D7BB]
              text-[#2F241D]
              hover:bg-[#FBF7F0]
              hover:shadow-sm
              transition-all
            "
          >
            <History size={18} />

            <span className="hidden sm:block text-sm font-medium">
              History
            </span>
          </button>

          {/* Notification */}
          <button
            type="button"
            title="Notifications"
            className="
              relative
              !w-[60px]
              !h-11
              rounded-xl
              border
              border-[#E0D2BC]
              bg-[#E7D7BB]
              flex
              items-center
              justify-center
              text-[#2F241D]
              hover:bg-[#FBF7F0]
              hover:shadow-sm
              transition-all
            "
          >
            <Bell size={18} />

            {/* Notification Dot */}
            <span
              className="
                absolute
                top-2
                right-2
                w-1.5
                h-1.5
                rounded-full
                bg-red-500
              "
            />
          </button>

        </div>

      </div>

    </div>
  );
}

export default SearchBar;