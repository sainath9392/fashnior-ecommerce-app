import React, { useState } from "react";
import login from "../assets/loginImg.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { backend_url } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ use boolean

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const Icon = showPassword ? FaEye : FaEyeSlash; // ✅ conditionally pick icon

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backend_url + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success){
        setToken(response.data.token);
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
       toast.error(error.message)
    }
  };

  return (
    <div className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      <span className="absolute top-6 left-6 bold-32">
        Fashni<span className="text-secondary">o</span>r
      </span>
      <div className="flex h-full w-full">
        {/* Image Side */}
        <div className="w-1/2 hidden sm:block">
          <img
            src={login}
            alt="loginImage"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Form Side */}
        <div className="flex w-full sm:w-1/2 items-center justify-center">
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800"
          >
            <div className="w-full mb-4">
              <h3 className="bold-36">Admin Login</h3>
            </div>

            <div className="w-full">
              <label htmlFor="email" className="medium-15">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-3 ring-slate-900/10 rounded py-1.5 bg-primary mt-1"
              />
            </div>

            <div className="w-full relative">
              <label htmlFor="Password" className="medium-15">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 ring-slate-900/10 py-1.5 rounded bg-primary mt-1"
              />
              <button
                type="button"
                onClick={handleToggle}
                className="absolute right-3 top-[36px] text-xl"
              >
                <Icon />
              </button>
            </div>
            <button type="submit" className="btn-dark w-full mt-5 !py-[9px]">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
