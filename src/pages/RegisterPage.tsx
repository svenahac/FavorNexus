import "../assets/LoginPage.css";
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <div
      id="LoginPage"
      className="m-0 flex flex-col min-h-screen justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="mb-10 flex justify-center align-middle items-center">
        <img className="h-48 w-48" src={require("../images/Favo.png")}></img>
      </div>
      <div className="rounded-xl w-85 h-100 bg-white flex flex-col justify-center items-center ">
        <div className="relative z-0 mb-6 w-72">
          <input
            type="text"
            name="username"
            id="username"
            className="block py-2.5 px-0 w-full text-sm text-blue-500 bg-transparent border-0 border-b-2 border-blue-500 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="username"
            className="peer-focus:font-medium absolute left-0 text-sm text-blue-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        <div className="relative z-0 mb-6 w-72">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-blue-500 bg-transparent border-0 border-b-2 border-blue-500 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute left-0 text-sm text-blue-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 mb-6 w-72">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-blue-500 bg-transparent border-0 border-b-2 border-blue-500 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute left-0 text-sm text-blue-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 mb-6 w-72">
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            className="block py-2.5 px-0 w-full text-sm text-blue-500 bg-transparent border-0 border-b-2 border-blue-500 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="confirm_password"
            className="peer-focus:font-medium absolute left-0 text-sm text-blue-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm Password
          </label>
        </div>
        <div className="w-36 h-10 mb-2 flex flex-col items-center">
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-primaryGreen focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2"
          >
            Register
          </button>
        </div>
        <div className="flex flex-col items-center ">
          <p className="text-blue-500 text-sm">Already have an account?</p>
          <button
            className="text-blue-500 hover:text-primaryGreen font-bold"
            onClick={navigateToLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
