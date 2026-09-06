
import React, { useState } from "react";
import {
    Sparkles,
    TrendingUp,
    AlertCircle,
    Code2,
    Activity,
    Brain
} from "lucide-react";

function AI({ user, repos }) {

    const [analysis, setAnalysis] = useState(null);

    const handleAnalysis = async () => {

        try {

            const response = await fetch(
                "http://localhost:5000/api/ai/analysis",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        user,
                        repos
                    })
                }
            );

            const data = await response.json();

            console.log(data);

            if (data.success) {
                setAnalysis(data.analysis);
            }

        } catch (error) {

            console.log("AI Analysis Error:", error);

        }
    };


    return (
        <div className="min-h-screen !px-8 !pt-3 !pb-8 ">

            {/* =========================
                PAGE HEADING
            ========================== */}
<div className="flex item-starts justify-between">
            <div className="!mb-8 !mt-0">
                <h1 className="text-3xl font-bold text-[#2F241D] flex items-center">

                    AI Analysis

                    <Sparkles
                        size={20}
                        className="text-[#2F241D] !ml-2"
                    />

                </h1>

                <p className="text-sm text-gray-500 !mt-2">
                    A plain-English read on what this profile's work actually shows.
                </p>
          </div>

            <div className="bg-[#E7D7BB] !py-3 !px-6 !h-12 rounded-xl flex items-center">
              
             <img
              src={user?.avatar}
              alt={user?.username}
              className="!w-9 !h-9 !rounded-full !mr-4 "
            />              

                <div>
 <p className="font-bold text-[#2F241D] leading-tight">
      {user?.username}
    </p>

    <p className="text-xs text-gray-600 !mb-2 leading-tight">
      GitHub Profile
    </p>             
       </div>
            </div>
</div>
            


            {/* =========================
                NO ANALYSIS
            ========================== */}

            {!analysis ? (

                <section className="!w-full !min-h-[400px] bg-[#E7D7BB]
                                    rounded-lg flex items-center justify-center !p-12">

                    <div className="text-center !max-w-2xl">

                        <div className="flex justify-center !mb-4">

                            <Sparkles
                                size={35}
                                className="text-[#2F241D]"
                            />

                        </div>


                        <h2 className="text-2xl font-bold text-[#1E293B]">
                            No analysis yet
                        </h2>


                        <p className="text-sm text-gray-500 !mt-4">
                            Run AI Analysis to get a summary of this profile's
                            strengths, growth areas, and standout repositories
                            generated from their GitHub data.
                        </p>


                        <button
                            onClick={handleAnalysis}
                            className="bg-[#2F241D] text-white !px-7 !py-3 !mt-6
                                       rounded-lg font-semibold shadow-md
                                       hover:bg-[#403229]"
                        >
                            Generate Analysis
                        </button>

                    </div>

                </section>

            ) : (

                /* =========================
                   ANALYSIS RESULT
                ========================== */

                <div className="space-y-6">


                    {/* =========================
                        STRENGTHS + IMPROVEMENTS
                    ========================== */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                        {/* STRENGTHS */}

                        <section className="bg-[#E7D7BB] rounded-xl !p-6 shadow-sm">

                            <div className="flex items-center gap-3 !mb-5">

                                <div className="bg-[#2F241D] rounded-lg !p-2">
                                    <TrendingUp
                                        size={20}
                                        className="text-white"
                                    />
                                </div>

                                <h2 className="text-xl font-bold text-[#2F241D]">
                                    Developer Strengths
                                </h2>

                            </div>


                            <div className="space-y-3">

                                {analysis.strengths.map((strength, index) => (

                                    <div
                                        key={index}
                                        className="bg-white/60 rounded-lg !p-4 !mt-2"
                                    >
                                        <p className="text-[#1E293B]">
                                            {strength}
                                        </p>
                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* IMPROVEMENTS */}

                        <section className="bg-[#E7D7BB] rounded-xl !p-6 shadow-sm">

                            <div className="flex items-center gap-3 !mb-5">

                                <div className="bg-[#2F241D] rounded-lg !p-2">
                                    <AlertCircle
                                        size={20}
                                        className="text-white"
                                    />
                                </div>

                                <h2 className="text-xl font-bold text-[#2F241D]">
                                    Areas for Improvement
                                </h2>

                            </div>


                            <div className="space-y-3">

                                {analysis.improvements.map((item, index) => (

                                    <div
                                        key={index}
                                        className="bg-white/60 rounded-lg !p-4 !mt-2"
                                    >
                                        <p className="text-[#1E293B]">
                                            {item}
                                        </p>
                                    </div>

                                ))}

                            </div>

                        </section>

                    </div>


                    {/* =========================
                        STANDOUT REPOSITORIES
                    ========================== */}

                    <section className="bg-[#E7D7BB] rounded-xl !p-6 shadow-sm !mt-3">

                        <div className="flex items-center gap-3 !mb-5">

                            <div className="bg-[#2F241D] rounded-lg !p-2">

                                <Code2
                                    size={20}
                                    className="text-white"
                                />

                            </div>

                            <h2 className="text-xl font-bold text-[#2F241D]">
                                Standout Repositories
                            </h2>

                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                            {analysis.standoutRepositories.map(
                                (repo, index) => (

                                    <div
                                        key={index}
                                        className="bg-white/60 rounded-lg !p-5 "
                                    >

                                        <h3 className="font-bold text-lg text-[#2F241D] !mb-2">
                                            {repo.name}
                                        </h3>

                                        <p className="text-sm text-gray-600">
                                            {repo.reason}
                                        </p>

                                    </div>

                                )
                            )}

                        </div>

                    </section>


                    {/* =========================
                        CODING ACTIVITY
                    ========================== */}

                    <section className="bg-[#E7D7BB] rounded-xl !p-6 shadow-sm !mt-3">

                        <div className="flex items-center gap-3 !mb-5">

                            <div className="bg-[#2F241D] rounded-lg !p-2">

                                <Activity
                                    size={20}
                                    className="text-white"
                                />

                            </div>

                            <h2 className="text-xl font-bold text-[#2F241D]">
                                Coding Activity
                            </h2>

                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            <div className="bg-white/60 rounded-lg !p-5">

                                <p className="text-sm text-gray-500">
                                    Activity Level
                                </p>

                                <p className="text-xl font-bold text-[#2F241D] !mt-2">
                                    {analysis.codingActivity.activityLevel}
                                </p>

                            </div>


                            <div className="bg-white/60 rounded-lg !p-5">

                                <p className="text-sm text-gray-500">
                                    Languages
                                </p>

                                <div className="flex flex-wrap gap-2 !mt-3">

                                    {analysis.codingActivity.languages.map(
                                        (language, index) => (

                                            <span
                                                key={index}
                                                className="bg-[#2F241D] text-white
                                                           text-xs rounded-full
                                                           !px-3 !py-1"
                                            >
                                                {language}
                                            </span>

                                        )
                                    )}

                                </div>

                            </div>


                            <div className="bg-white/60 rounded-lg !p-5">

                                <p className="text-sm text-gray-500">
                                    Activity Summary
                                </p>

                                <p className="text-sm text-[#1E293B] !mt-2">
                                    {analysis.codingActivity.summary}
                                </p>

                            </div>

                        </div>

                    </section>


                    {/* =========================
                        OVERALL SUMMARY
                    ========================== */}

                    <section className="bg-[#E7D7BB] rounded-xl !p-6 shadow-sm !mt-3">

                        <div className="flex items-center gap-3 !mb-5">

                            <div className="bg-[#2F241D] rounded-lg !p-2">

                                <Brain
                                    size={20}
                                    className="text-white"
                                />

                            </div>

                            <h2 className="text-xl font-bold text-[#2F241D]">
                                Overall Developer Summary
                            </h2>

                        </div>


                        <p className="text-[#1E293B] leading-7">
                            {analysis.summary}
                        </p>

                    </section>


                </div>

            )}

        </div>
    );
}

export default AI;

