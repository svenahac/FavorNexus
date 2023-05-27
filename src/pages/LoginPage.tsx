import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/LoginPage.css";
import { check_login } from "../functions/login"

interface LoginState {
  username: string;
  password: string;
}

export default function LoginPage() {
  
  const [loginData, setLoginData] = useState<LoginState>({
    username: '',
    password: '',
  });
  
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };
  return (
    <div
      id="LoginPage"
      className="m-0 flex flex-col min-h-screen justify-center items-center"
    >
      <h1 className="text-4xl font-bold mb-10 text-primaryGreen">
        Favor Nexus
      </h1>
      <div className="rounded-xl w-85 h-100 bg-white flex flex-col justify-center items-center ">
        <div className="relative z-0 mb-6 w-72">
          <input
            type="text"
            name="username"
            id="username"
            className="block py-2.5 px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondaryBlue peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="username"
            className="peer-focus:font-medium absolute left-0 text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondaryBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        <div className="relative z-0 mb-6 w-72">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondaryBlue peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute left-0 text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondaryBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="w-36 h-10 mb-2 flex flex-col items-center">
          <button
            type="button"
            className="text-white bg-primary hover:bg-primaryGreen focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2"
            onClick={check_login}
          >
            Login
          </button>
        </div>
        <div className="flex flex-col items-center ">
          <p className="text-primary text-sm">
            Haven't created an account yet?
          </p>
          <button
            className="text-primary font-bold"
            onClick={navigateToRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
