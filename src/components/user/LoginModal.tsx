"use client";
import { useState } from "react";
import FloatingInput from "./FloatingInput";

export default function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mode, setMode] = useState<"login" | "signup">("login");

  if (!isOpen) return null;
  return (
    // <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    //   <div className="bg-white p-6 rounded-md w-full max-w-md relative">
    //     <button
    //       onClick={onClose}
    //       className="absolute top-2 right-2 text-gray-500 hover:text-black"
    //     >
    //       ✕
    //     </button>
    //     <h2 className="text-2xl font-normal mb-2 text-center">Login</h2>
    //     <p className="text-xs font-normal mb-4 text-center">
    //       Already have an account? Welcome back!
    //     </p>

    //     <form className="space-y-4 items-center text-center">
    //       <div>
    //         <FloatingInput type="email" name="Email" label={"Email"} />
    //       </div>

    //       <div>
    //         <FloatingInput type="password" name="Password" label="Password" />
    //       </div>
    //       <div className="flex flex-col justify-around px-5">
    //         <p className="text-xs mb-2">Forgot Password?</p>
    //         {/* <span className="text-xs"> | </span> */}
    //         <a href="" className="text-xs">
    //           Dont have account with us? Sign up!
    //         </a>
    //         {/* <p className="text-xs">Dont have account with us?</p> */}
    //       </div>
    //       <button
    //         type="submit"
    //         className="text-center items-center p-10 text-gray-500 border py-2 rounded-3xl hover:bg-[var(--hero-background)] hover:text-white cursor-pointer"
    //       >
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md  min-h-[400px] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-normal mb-2 text-center">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>

        <p className="text-xs font-normal mb-4 text-center">
          {mode === "login"
            ? "Already have an account? Welcome back!"
            : "Create your account to start shopping!"}
        </p>

        {/* Form */}
        <form className="space-y-4 items-center text-center">
          <FloatingInput type="email" name="Email" label="Email" />
          <FloatingInput type="password" name="Password" label="Password" />

          {mode === "signup" && (
            <FloatingInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
            />
          )}

          {/* Links */}
          <div className="flex flex-col justify-around px-5">
            {mode === "login" && (
              <p className="text-xs mb-2 cursor-pointer hover:underline">
                Forgot Password?
              </p>
            )}
            <button
              type="button"
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="text-xs text-blue-500 hover:underline mt-2"
            >
              {mode === "login"
                ? "Don't have an account? Sign up!"
                : "Already have an account? Login!"}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-center items-center w-full text-gray-500 border py-2 rounded-3xl hover:bg-[var(--hero-background)] hover:text-white cursor-pointer"
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
