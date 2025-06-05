"use client";
import { useState, useEffect } from "react";
import FloatingInput from "./FloatingInput";
import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfimedPassword] = useState("");
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session && router) {
        if (window.location.pathname === "/admin/products") {
          router.push("/admin/products");
        }
      }
    });
  }, []);

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setConfimedPassword("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (mode === "signup") {
      if (password !== confirmedPassword) {
        alert("Passwords do not match");
        return;
      }

      // Step 1: Sign up the user (Auth)
      const { data: signUpData, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
        });

      if (signUpError) {
        return alert("Signup failed: " + signUpError.message);
      }

      // Step 2: If user exists, insert into custom `users` table
      const user = signUpData?.user;
      if (user) {
        // const { error: insertError } = await supabase.from("users").insert({
        //   id: user.id,
        //   email: user.email,
        //   role: "user", // change to "admin" manually in dashboard if needed
        // });
        // if (insertError) {
        //   console.error("Insert error:", JSON.stringify(insertError, null, 2));
        //   return alert("Signup succeeded, but failed to insert user data.");
        // }
      }

      alert("Account created! Please check your email to confirm.");
      clearForm();
      onClose();
      setMode("login");
      return;
    } else {
      const { data: loginData, error: loginError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });
      console.log(loginData);
      if (loginError) return alert("Login failed: " + loginError.message);
      clearForm();
      onClose();
      router.refresh();
      router.push("/admin/products");
    }
  };
  if (!isOpen) return null;
  return (
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
          <FloatingInput
            type="email"
            name="Email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FloatingInput
            type="password"
            name="Password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {mode === "signup" && (
            <FloatingInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={confirmedPassword}
              onChange={(e) => setConfimedPassword(e.target.value)}
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
            onClick={handleSubmit}
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
