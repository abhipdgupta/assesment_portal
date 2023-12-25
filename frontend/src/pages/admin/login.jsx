import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {
  const [info, setInfo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate=useNavigate()
  const { loggedInUser } = useAuthContext();

  const handleInputChange = (e) => {
    setError(""); // Clear previous errors
    const { name, value } = e.target;
    if (name === "info") {
      setInfo(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        { info, password }
      );

      const data = response.data;
      if (data.status_code == 200) {
        const user = data.data;
        loggedInUser({
          username: user.username,
          email: user.email,
          _id: user._id,
        });
        navigate('/')

      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Invalid Access");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-300">
      <div
        className="sm:w-[500px] w-full h-[600px] bg-white rounded-lg drop-shadow-2xl
  flex flex-col items-center gap-8 p-6  "
      >
        <h1 className="text-3xl font-bold flex flex-col text-center">
          Login
          {error ? (
            <span className="text-xl text-red-500 text-center">{error}</span>
          ) : null}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full gap-8"
        >
          <div className="flex flex-col">
            <label className="text-2xl font-semibold">Email or Username</label>
            <input
              type="text"
              name="info"
              value={info}
              onChange={handleInputChange}
              className=" p-2 border-2 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-2xl font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className=" p-2 border-2 rounded-lg"
              required
            />
          </div>
          <div className="flex-1 flex flex-col items-center gap-4 justify-end disabled:cursor-not-allowed ">
          <span>Do not have a account? <Link to={"/admin/register"} className="text-blue-500">Register</Link> </span>
            <button
              type="submit"
              className="bg-blue-700 w-full p-4 rounded-lg text-white text-2xl"
            >
              Login
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
