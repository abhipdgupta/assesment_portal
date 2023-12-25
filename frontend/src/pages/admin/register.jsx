import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success,setSuccess]=useState('')

  const handleInputChange = (e) => {
    setError("");
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setSuccess('')
        setError('')
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/register`,
        { username, email, password }
      );

      const data = response.data;
      if (data.status_code === 200) {
        // Optional: You can handle successful registration here
        console.log('User registered successfully');
        setSuccess('Register successfully')
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("User already exists with the given username or email");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-300">
      <div
        className="sm:w-[500px] w-full h-[600px] bg-white rounded-lg drop-shadow-2xl
  flex flex-col items-center gap-8 p-6  "
      >
        <h1 className="text-3xl font-bold flex flex-col text-center">
          Register
          {error ? (
            <span className="text-xl text-red-500 text-center">{error}</span>
          ) : null}
          {success ? (
            <span className="text-xl text-green-500 text-center">{error}</span>
          ) : null}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full gap-8"
        >
          <div className="flex flex-col">
            <label className="text-2xl font-semibold">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
              className=" p-2 border-2 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-2xl font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={email}
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
          <span>Have an account? <Link to={"/admin/login"} className="text-blue-500">Login</Link> </span>
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

export default Register;
