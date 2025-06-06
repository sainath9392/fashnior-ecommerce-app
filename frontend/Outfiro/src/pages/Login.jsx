import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import login from "../assets/login.png";

const Login = () => {
  const { token, setToken, navigate } = useContext(ShopContext);
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 bg-white">
      {/* container */}
      <div className="flex h-full w-full">
        {/* imgSide */}
        <div className="w-1/2 hidden sm:block">
          <img
            src={login}
            alt="loginimg"
            className="object-cover h-full w-full"
          />
          <h5 className="bold-40 absolute top-3 left-3 bg-white p-2 rounded-full">Fashni<span className="text-secondary">o</span>r</h5>
        </div>
        {/* formSide */}
        <div className="flex w-full sm:1/2 items-center justify-center text-[90%]">
          <form className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5">
            <h5 className="bold-40 absolute top-3 left-3 bg-white p-2 rounded-full">Fashni<span className="text-secondary">o</span>r</h5>
            <div className="w-full mb-4">
              <h3 className="bold-36">{currState}</h3>
            </div>
            {currState === "Sign Up" && (
              <div className="w-full">
                <label htmlFor="name" className="medium-15">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 required"
                />
              </div>
            )}

            <div className="w-full">
              <label htmlFor="email" className="medium-15">
                Email
              </label>
              <input
                type="text"
                placeholder="email"
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 required"
              />
            </div>

            <div className="w-full">
              <label htmlFor="password" className="medium-15">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 required "
              />
            </div>
            <button className="btn-dark w-full !rounded mt-5 !py-[8px]">
              {currState === "Sign Up" ? "Sign Up" : "Login"}
            </button>
            <div className="w-full flex flex-col gap-y-3">
              <div className="underline medium-15 text-blue-600 cursor-pointer">Forgot your password?</div>
              {currState === "Login" ? (
                <div className=" medium-15">
                  Don't have an account?<span onClick={()=>setCurrState("Sign Up")} className="cursor-pointer underline text-blue-600"> Create account</span>
                </div>
              ) : (
                <div className="medium-15">
                  Already have an accout?<span onClick={()=>setCurrState("Login")} className=" underline  cursor-pointer text-blue-600"> Login</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
