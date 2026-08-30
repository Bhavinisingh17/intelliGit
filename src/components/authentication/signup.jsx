import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
          
            const response = await fetch(
                "http://localhost:5000/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data?.message || "Couldn't create your account. Try again.");
                return;
            }

            console.log(data);
            navigate("/login");

        } catch (error) {
            console.log(error);
            setError("Couldn't reach the server. Check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="!min-h-screen bg-[#E7D7BB] flex items-center justify-center 1px-6">

            <div className="!w-full !max-w-xl">

                {/* Logo */}
                <div className="text-center !mb-9">

                    <h1 className="text-5xl font-bold text-[#2F241D]">
                        Intelli<span className="text-[#9A6848]">Git</span>
                    </h1>

                    <p className="text-[#6F5B4B] 1mt-3 text-base">
                        Explore GitHub smarter
                    </p>

                </div>


                {/* Card */}
                <div className="bg-[#F1E3CC] border border-[#D8C3A5] rounded-2xl !p-12 shadow-xl shadow-[#2F241D]/10">

                    <h2 className="text-3xl font-bold text-[#2F241D]">
                        Create an account
                    </h2>

                    <p className="text-[#6F5B4B] text-base !mt-2 !mb-9">
                        Sign up to get started with IntelliGit
                    </p>

                    {error && (
                        <div
                            role="alert"
                            className="!mb-5 rounded-xl border border-[#C99B7A] bg-[#F8E1D2] !px-5 !py-4 text-sm text-[#8A3E1F]"
                        >
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleSignup}
                        className="!space-y-6"
                        noValidate
                    >

                        {/* Username */}
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-semibold text-[#2F241D] !mb-3"
                            >
                                Username
                            </label>

                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                                required
                                className="!w-full !h-14 bg-[#F8EDDC] border border-[#D8C3A5] rounded-xl !px-5 text-[#2F241D] placeholder-[#927D6B] outline-none focus:border-[#9A6848] focus:ring-2 focus:ring-[#9A6848]/40 transition leading-normal"
                            />
                        </div>


                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-[#2F241D] !mb-3"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                                className="!w-full !h-14 bg-[#F8EDDC] border border-[#D8C3A5] rounded-xl !px-5 text-[#2F241D] placeholder-[#927D6B] outline-none focus:border-[#9A6848] focus:ring-2 focus:ring-[#9A6848]/40 transition leading-normal"
                            />
                        </div>


                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-[#2F241D] !mb-3"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
                                className="!w-full !h-14 bg-[#F8EDDC] border border-[#D8C3A5] rounded-xl !px-5 text-[#2F241D] placeholder-[#927D6B] outline-none focus:border-[#9A6848] focus:ring-2 focus:ring-[#9A6848]/40 transition leading-normal"
                            />
                        </div>


                        {/* Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="!w-full bg-[#2F241D] hover:bg-[#403229] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold !py-4 rounded-xl transition duration-200"
                        >
                            {isSubmitting ? "Creating account..." : "Sign Up"}
                        </button>

                    </form>


                    {/* Login */}
                    <p className="text-center text-sm text-[#6F5B4B] !mt-9">
                        Already have an account?

                        <Link
                            to="/login"
                            className="!ml-1 text-[#9A6848] font-semibold hover:text-[#2F241D] transition"
                        >
                            Login
                        </Link>
                    </p>

                </div>


                {/* Footer */}
                <p className="text-center text-sm text-[#6F5B4B] !mt-6">
                    © 2026 IntelliGit
                </p>

            </div>

        </div>
    );
}

export default Signup;