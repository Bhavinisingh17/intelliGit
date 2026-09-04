import React, { useState } from "react";

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/send-reset-password-email",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                    }),
                }
            );

            const data = await response.json();

            console.log(data);

            if (response.ok) {
                setMessage(data.message);
            } else {
                setError(data.message);
            }

        } catch (error) {
            console.log(error);
            setError("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#E7D7BB] px-4">

            <div className="w-full max-w-md bg-[#F1E3CC] rounded-2xl p-8 shadow-xl">

                <h1 className="text-3xl font-bold text-[#2F241D] text-center !mb-3">
                    Forgot Password?
                </h1>

                <p className="text-[#2F241D] text-center !mb-8">
                    Enter your registered email to receive a password reset link.
                </p>

                <form
                    onSubmit={handleForgotPassword}
                    className="!space-y-6"
                    noValidate
                >

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
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="!w-full !h-14 bg-[#F8EDDC] border border-[#D8C3A5] rounded-xl !px-5 text-[#2F241D] placeholder-[#927D6B] outline-none focus:border-[#9A6848] focus:ring-2 focus:ring-[#9A6848]/40 transition"
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-red-600 text-sm">
                            {error}
                        </p>
                    )}

                    {/* Success */}
                    {message && (
                        <p className="text-green-700 text-sm">
                            {message}
                        </p>
                    )}

                    {/* Button */}
                    <button
                        type="submit"
                        className="!w-full !h-14 bg-[#2F241D] hover:bg-[#403229] text-white rounded-xl font-semibold transition"
                    >
                        Send Reset Link
                    </button>

                </form>

                {/* Back to Login */}
                <div className="text-center !mt-6">
                    <a
                        href="/login"
                        className="text-sm text-[#C49A78] hover:text-[#2F241D] transition"
                    >
                        Back to Login
                    </a>
                </div>

            </div>
        </div>
    );
}

export default ForgotPassword;