import React, { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState("Sign In");

  return (
    <div className="pb-[5rem] flex flex-col w-[100% h-[100%]">
      <div className="flex flex-col w-[100%] h-[94svh] bg-[#254BEC] text-white rounded-b-3xl relative">
        <div className="flex flex-col absolute top-10 w-[100%]">
          <p className="text-center translate-y-3">Welcome to</p>
          <p className="text-[5rem] max-md:text-[2rem] font-bold text-center">IcontrolHome</p>
          <p className="text-center"> Take control as you begin your seamless journey of home automation.</p>
          <BsFillArrowDownCircleFill className="text-[5rem] mx-auto mt-10" />
        </div>
      </div>

      <div className="flex flex-col bg-white absolute top-[40%] bottom-0 left-1/2 -translate-x-1/2 rounded-t-xl px-10 max-lg:w-[80%] max-lg:px-4 max-sm:w-[90%] max-sm:px-2">
        <span className="my-4 bg-white py-2 px-4 rounded-t-xl font-bold text-xl whitespace-nowrap text-black text-center">{formState}</span>
        {formState !== "Forgot Password" && (
          <div className="shadow-lg my-2 relative">
            <input type="text" className="p-2 border-b-2 w-[100%] shadow-lg shadow-gray-400 rounded-xl" placeholder="Enter username" />
          </div>
        )}
        {(formState === "Sign Up" || formState === "Forgot Password") && (
          <div className="shadow-lg my-2">
            <input type="text" className="p-2 border-b-2 w-[100%] shadow-lg shadow-gray-400 rounded-xl" placeholder="Enter email" />
          </div>
        )}
        {formState !== "Forgot Password" && (
          <div className="shadow-lg my-2">
            <input type="text" className="p-2 border-b-2 w-[100%] shadow-lg shadow-gray-400 rounded-xl" placeholder="Enter password" />
          </div>
        )}

        <button onClick={() => navigate("/dashboard")} className="border-2 px-12 py-1 my-2 border-[#254bec5e] text-white font-bold text-xl rounded-xl bg-[#254bec5e] shadow-md">
          {formState}
        </button>

        <div className="grid grid-cols-2 gap-4 mt-12">
          <button onClick={() => (formState === "Sign Up" || formState === "Sign In" ? setFormState("Forgot Password") : setFormState("Sign Up"))} className="whitespace-nowrap border-2 px-4 py-1 my-2 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md max-sm:text-xs">
            {formState === "Sign Up" || formState === "Sign In" ? "Forgot Password" : "Sign Up"}
          </button>
          <button onClick={() => (formState === "Sign In" ? setFormState("Sign Up") : setFormState("Sign In"))} className="whitespace-nowrap border-2 px-4 py-1 my-2 border-gray-50 text-black rounded-xl bg-gray-50 shadow-md max-sm:text-xs">
            {formState === "Sign In" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
