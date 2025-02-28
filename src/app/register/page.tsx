"use client"; // Ensure it's a Client Component

import { useState } from "react";
import { signUp } from "../../../auth";
import NavHeader from "@/app/header";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //const user = await signUp(email, password);
    const userData = { firstName, lastName, phone };
    const user = await signUp(email, password, userData);
    if (user) {
      alert("Sign-up successful!");
    } else {
      console.error("Sign-up failed");
    }
  };

  return (
    <div className="bg-sky-700 min-h-screen w-full">
      <NavHeader />
      <div className="flex flex-1 justify-center items-center">
        <h1 className="text-white text-[8vw] font-bold p-[5vw]">InSight</h1>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <h2 className="text-white text-[3vw] font-bold pb-[4vw]">Please fill all the fields</h2>
      </div>
      <form onSubmit={handleSignUp} className="flex flex-col items-center justify-center w-full">
        {/* First Name & Last Name */}
        <div className="pb-[4vw] flex flex-1 justify-center items-center gap-[3vw] w-10/12">
          <div className="w-6/12">
            <h3 className="text-white text-[2vw] pb-[0.2vw]">First Name</h3>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-none text-[4.0vw] w-11/12 h-[11vw] outline-none bg-white text-black font-semibold rounded-lg"
              required
            />
          </div>
          <div className="w-6/12">
            <h3 className="text-white text-[2vw] pb-[0.2vw]">Last Name</h3>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-none text-[4.0vw] w-11/12 h-[11vw] outline-none bg-white text-black font-semibold rounded-lg"
              required
            />
          </div>
        </div>

        {/* Phone Number & Email */}
        <div className="pb-[4vw] flex flex-1 justify-center items-center gap-[3vw] w-10/12">
        <div className="w-6/12">
            <h3 className="text-white text-[2vw] pb-[0.2vw]">Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-none text-[4.0vw] w-11/12 h-[11vw] outline-none bg-white text-black font-semibold rounded-lg"
              required
            />
          </div>
          <div className="w-6/12">
            <h3 className="text-white text-[2vw] pb-[0.2vw]">Phone Number</h3>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-none text-[4.0vw] w-11/12 h-[11vw] outline-none bg-white text-black font-semibold rounded-lg"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="pb-[4vw] flex flex-1 justify-center items-center gap-[3vw] w-10/12">
          <div className="w-6/12">
            <h3 className="text-white text-[2vw] pb-[0.2vw]">Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-none text-[4.0vw] w-11/12 h-[11vw] outline-none bg-white text-black font-semibold rounded-lg"
              required
            />
          </div>
        </div>

        {/* Submit & Navigation Buttons */}
        <div className="pt-[4vw] flex flex-1 justify-center items-center gap-[5vw] w-6/12">
          <button type="button" className="border-none text-[2vw] w-full h-[6vw] outline-none bg-white text-black font-semibold rounded-lg">
            Back
          </button>
          <button type="button" className="border-none text-[3vw] w-full h-[6vw] outline-none bg-white text-black font-semibold rounded-lg">
            Exit
          </button>
          <button type="submit" className="border-none text-[3vw] w-full h-[6vw] outline-none bg-white text-black font-semibold rounded-lg">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}