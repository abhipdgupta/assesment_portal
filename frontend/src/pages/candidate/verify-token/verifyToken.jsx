import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Transparentlogo from "../../../assets/logo-white.png";
function VerifyToken() {
  const navigate = useNavigate();
  const initialState = {
    token: "",
  };
  const [tokenNumber, setTokenNumber] = useState(initialState);
  const [formError, setFormError] = useState();
  const handleChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    setTokenNumber((prev) => ({ ...prev, [nam]: val }));
  };
  const handleStartTest = () => {
    if (tokenNumber.token) {
      navigate("/candidate/register");
    } else {
      setFormError("This field is required.");
    }
  };

  return (
    <>
      <div className="bg-stone-900 h-screen w-screen font-poppins">
        <div className="flex justify-between">
          <Link
            to={"/"}
            className="text-white text-base sm:text-xl md:text-2xl m-4 sm:m-8"
          >
            Home
          </Link>
          <Link
            to={"https://youtu.be/Jp-lD7hgqVc?si=dFa1XakppXvpuh8o"}
            className="text-white text-base sm:text-xl md:text-2xl m-4 sm:m-8 flex items-center"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="22"
              viewBox="0 0 25 24"
              fill="none"
            >
              {/* ... SVG Path data ... */}
            </svg>
            Tutorial
          </Link>
        </div>
        <div className="flex justify-center mt-4">
          <img
            src={Transparentlogo}
            alt=""
            className="w-[140px] sm:w-[260px] md:w-[300px]"
          />
        </div>
        <div className="flex justify-center mt-[50px]">
          <div className="w-[100%] h-[400px] sm:w-[600px] sm:h-[280px] md:w-[700px] md:h-[330px] lg:w-[900px] lg:h-[380px] sm:rounded-[15px]">
            <div className="flex justify-center mt-14">
              <input
                type="text"
                placeholder="Enter Your Token Number"
                onChange={handleChange}
                value={tokenNumber.token}
                id="token"
                name="token"
                className="min-[620px]:w-[450px] h-[50px] w-[300px] sm:w-[500px] sm:h-[42px] md:w-[600px] md:h-[47px] bg-white rounded-lg text-lg text-center"
              />
            </div>
            <p className="text-red-600">{formError}</p>
            <div className="flex justify-center mt-12 flex-col items-center text-center">
              <p className="text-gray-400 mb-4 text-sm md:text-base lg:text-base">
                *Please enter the special token number given by the organization
                via your email OR mobile number
              </p>
              <p className="text-gray-400 mt-3 sm:mt-1 md:mt-4 text-sm md:text-base lg:text-base">
                Commencing the test implies your consent to{" "}
                <span className="text-white">RATE </span>
                <span className="text-red-800">Privacy & Policy</span> and Terms
                of Use
              </p>
            </div>
            <div className="flex justify-center mt-[40px] sm:mt-[10px] md:mt-[20px] lg:mt-[90px]">
              <button
                onClick={handleStartTest}
                className="rounded-lg px-10 py-2 hover:text-white bg-white hover:bg-red-500 font-semibold text-2xl  text-red-500"
              >
                Start Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyToken;
