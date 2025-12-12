import React from "react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md bg-white text-black rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome back!</h2>
        <p className="text-center mb-6">We're glad to see you again 👋</p>

        <div className="space-y-4">
          <button className="w-full border border-gray-300 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <span>Continue with Facebook</span>
          </button>

          <button className="w-full border border-gray-300 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Mobile Number / Email / Username"
            className="w-full border border-gray-300 rounded-xl p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-xl p-3"
          />

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-xl mt-6 font-semibold hover:opacity-90">
          Sign in
        </button>

        <p className="text-center mt-4 text-sm text-blue-600 cursor-pointer">
          Forgot your password?
        </p>
      </div>
    </div>
  );
}
