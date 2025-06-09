import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import login from "../assets/login.png";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      if (currState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          toast.success("Registered Successfully");
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          console.log(response.data);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          console.log(response.data);
          toast.success("Successfully Logged");
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

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
          <h5 className="bold-40 absolute top-3 left-3 bg-white p-2 rounded-full">
            Fashni<span className="text-secondary">o</span>r
          </h5>
        </div>
        {/* formSide */}
        <div className="flex w-full sm:1/2 items-center justify-center text-[90%]">
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5"
          >
            <h5 className="bold-40 absolute top-3 left-3 bg-white p-2 rounded-full">
              Fashni<span className="text-secondary">o</span>r
            </h5>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 required "
              />
            </div>
            <button
              type="submit"
              className="btn-dark w-full !rounded mt-5 !py-[8px]"
            >
              {currState === "Sign Up" ? "Sign Up" : "Login"}
            </button>
            <div className="w-full flex flex-col gap-y-3">
              <div className="underline medium-15 text-blue-600 cursor-pointer">
                Forgot your password?
              </div>
              {currState === "Login" ? (
                <div className=" medium-15">
                  Don't have an account?
                  <span
                    onClick={() => setCurrState("Sign Up")}
                    className="cursor-pointer underline text-blue-600"
                  >
                    {" "}
                    Create account
                  </span>
                </div>
              ) : (
                <div className="medium-15">
                  Already have an accout?
                  <span
                    onClick={() => setCurrState("Login")}
                    className=" underline  cursor-pointer text-blue-600"
                  >
                    {" "}
                    Login
                  </span>
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
