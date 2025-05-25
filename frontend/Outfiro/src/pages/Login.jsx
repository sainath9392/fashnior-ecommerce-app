import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import login from "../assets/login.png";

const Login = () => {
  const { token, setToken, navigate } = useContext(ShopContext);
  const { currState, setCurrState } = useState("Login");

  return (
    <div>
      {/* container */}
      <div>
        {/* imgSide */}
        <img
          src={login}
          alt="loginimg"
          className="object-cover h-full w-full"
        />
      </div>
      {/* formSide */}
      <div>
        <form>
          <div>
            <h3>{currState}</h3>
          </div>
          {currState === "sign Up" && (
            <div>
              <label htmlFor="name" className="medium-15">
                Name
              </label>
              <input type="text" placeholder="'Name" className="w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1 required" />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
