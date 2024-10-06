import React from "react";

export const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-36">
      <div className="rounded-xl  w-[400px] flex flex-col gap-y-4 px-4 py-3">
        <h1 className="text-center font-bold text-3xl flex flex-col gap-y-2">
          Welcome Baxtior
          <span className="text-xl">CEFR TEST</span>
        </h1>

        <form action="" className="flex flex-col gap-y-4">
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border p-4 border-gray-200"
          />
          <input
            type="password"
            placeholder="*********"
            className="rounded-xl border p-4 border-gray-200"
          />
          <button className="p-3 bg-green-600 text-white rounded-xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
