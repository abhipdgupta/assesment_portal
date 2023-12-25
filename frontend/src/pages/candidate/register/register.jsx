import axios from "axios";
import Transparentlogo from "../../../assets/logo-white.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grow } from "../../../components/ui/loading";

const initialState = {
  name: "",
  dob: "",
  email: "",
  altEmail: "",
  phoneNumber: "",
  college: "",
  program: "",
  completionYear: "",
  enterPercentageCGPA: "",
  class10PassingYear: "",
  enterPercentageCGPAClass12: "",
  class12PassingYear: "",
  class12Board: "",
};
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);
  const [userDetail, setUserDetail] = useState(initialState);
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    setUserDetail((prev) => ({ ...prev, [nam]: val }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // setFormError();

    console.log(userDetail);
    try {
    //   const response = await axios.post("http://localhost:9000/", userDetail);
    // console.log(formError);  
    // if (!formError) {
    //     navigate("/registration-details/access-page");
    //   }
    //   console.log(response);

    navigate("/candidate/check-requirements")
    } catch (e) {
      console.log(e);
    }
  };

  const validate = (values) => {
    const error = {};
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if (!values.name) {
      error.name = "Name field is required.";
    }
    if (!values.dob) {
      error.dob = "Date of Birth field is required.";
    }
    if (!values.email) {
      error.email = "Email field is required.";
    } else if (!regex.test(values.email)) {
      error.email = "This is not the required email format.";
    }
    if (!values.altEmail) {
      error.altEmail = "Alternate Email field is required.";
    } else if (!regex.test(values.altEmail)) {
      error.altEmail = "This is not the required email format.";
    }
    if (!values.phoneNumber) {
      error.phoneNumber = "Phone Number field is required.";
    }
    if (!values.college) {
      error.college = "College field is required.";
    }
    if (!values.program) {
      error.program = "Program field is required.";
    }
    if (!values.completionYear) {
      error.completionYear = "This field is required.";
    }
    if (!values.enterPercentageCGPA) {
      error.enterPercentageCGPA = "This field is required.";
    }
    if (!values.class10PassingYear) {
      error.class10PassingYear = "This field is required.";
    }
    if (!values.enterPercentageCGPAClass12) {
      error.enterPercentageCGPAClass12 = "This field is required.";
    }
    if (!values.class12PassingYear) {
      error.class12PassingYear = "This field is required.";
    }
    if (!values.class12Board) {
      error.class12Board = "This field is required.";
    }
    return error;
  };

  return (
    <>
      {loading && <Grow />}

      <div className="">
        <header className="bg-gray-600  flex items-center justify-between sm:px-6 ">
          <div className="flex items-center">
            <img
              src={Transparentlogo}
              alt=""
              className=" my-3 w-[142px] h-[48px] md:h-[45px]"
            />
          </div>
          {/* You can add other header content on the right side if needed */}
        </header>
        <div className="bg-stone-900 h-6"></div>
        <div></div>
        <div className="flex justify-center">
          <div className="bg-white w-[94%]  mt-8 rounded-[10px]">
            <h1 className="text-center text-[24px] mt-6 poppins  font-extrabold md:font-bold">
              *Registration Details
            </h1>
            <form onSubmit={(e) => handleSubmit(e)} className="">
              {/* Adding a label and input for Name */}
              <div className="mt-4 mx-6  ">
                <label
                  htmlFor="name"
                  className="block text-[18px] font-bold md:font-medium font-poppins "
                >
                  Name:
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={userDetail.name}
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                  placeholder="Enter your name"
                />
              </div>
              <p className="text-red-600">{formError.name}</p>
              {/* Date of Birth */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="dob"
                  className="block text-[18px] font-bold md:font-medium font-poppins  "
                >
                  Date of Birth:
                </label>
                <input
                  type="date"
                  onChange={handleChange}
                  value={userDetail.dob}
                  id="dob"
                  name="dob"
                  className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                />
              </div>
              <p className="text-red-600">{formError.dob}</p>
              {/* Email */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="email"
                  className="block text-[18px] font-bold md:font-medium font-poppins "
                >
                  Email:
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  value={userDetail.email}
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none "
                  placeholder="Enter your email"
                />
              </div>
              <p className="text-red-600">{formError.email}</p>
              {/* Alternate Email */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="altEmail"
                  className="block text-[18px] font-semibold md:font-medium font-poppins "
                >
                  Alternate Email:
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  value={userDetail.altEmail}
                  id="altEmail"
                  name="altEmail"
                  className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                  placeholder="Enter alternate email"
                />
              </div>
              <p className="text-red-600">{formError.altEmail}</p>
              {/* Phone Number */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="phoneNumber"
                  className="block text-[18px] font-bold md:font-medium font-poppins "
                >
                  Phone Number:
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={userDetail.phoneNumber}
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                  placeholder="Enter your phone number"
                />
              </div>
              <p className="text-red-600">{formError.phoneNumber}</p>
              {/* Alternate Phone Number */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="altPhoneNumber"
                  className="block text-[18px] font-bold md:font-medium font-poppins "
                >
                  Alternate Phone Number:
                </label>
                <input
                  type="text"
                  id="altPhoneNumber"
                  name="altPhoneNumber"
                  className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                  placeholder="Enter alternate phone number"
                />
              </div>

              {/* Current College/University */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="college"
                  className="block text-[18px] font-bold md:font-medium font-poppins "
                >
                  Current College/University:
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={userDetail.college}
                  id="college"
                  name="college"
                  className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                  placeholder="Enter your current college/university"
                />
              </div>
              <p className="text-red-600">{formError.college}</p>
              {/* Current Program */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="program"
                  className="block text-[18px] font-medium font-poppins "
                >
                  Current Program:
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={userDetail.program}
                  id="program"
                  name="program"
                  className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                  placeholder="Enter your current program example: B.tech"
                />
              </div>
              <p className="text-red-600">{formError.program}</p>
              {/* Year of Completion */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="completionYear"
                  className="block text-[18px] font-bold md:font-medium font-poppins "
                >
                  Year of Completion:
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={userDetail.completionYear}
                  id="completionYear"
                  name="completionYear"
                  className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                  placeholder="Enter your year of completion"
                />
              </div>
              <p className="text-red-600">{formError.completionYear}</p>
              {/* Percentage/CGPA */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="percentageCGPA"
                  className="block text-[18px] font-bold md:font-medium font-poppins "
                >
                  Percentage/CGPA:
                </label>
                <div className="flex">
                  <select
                    id="percentageCGPA"
                    name="percentageCGPA"
                    className="w-1/2 px-4 py-2 mt-1 rounded-md border border-gray-300 "
                  >
                    <option value="cgpa">CGPA</option>
                    <option value="percentage">Percentage</option>
                  </select>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={userDetail.enterPercentageCGPA}
                    id="enterPercentageCGPA"
                    name="enterPercentageCGPA"
                    className="w-1/2 ml-2 px-4 py-2 mt-1 rounded-md border border-gray-300 "
                    placeholder="Enter percentage/CGPA"
                  />
                </div>
              </div>
              <p className="text-red-600">{formError.enterPercentageCGPA}</p>
              {/* Class 10 Passing Year */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="class10PassingYear"
                  className="block text-[18px] font-semibold md:font-medium font-poppins "
                >
                  Class 10 Passing Year:
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={userDetail.class10PassingYear}
                  id="class10PassingYear"
                  name="class10PassingYear"
                  className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                  placeholder="Enter Class 10 passing year"
                />
              </div>
              <p className="text-red-600">{formError.class10PassingYear}</p>
              {/* Class 12 Board */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="class12Board"
                  className="block text-[18px] font-bold md:font-medium font-poppins "
                >
                  Class 12 Board:
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={userDetail.class12Board}
                  id="class12Board"
                  name="class12Board"
                  className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                  placeholder="Enter Class 12 board"
                />
              </div>
              <p className="text-red-600">{formError.class12Board}</p>
              {/* Percentage/CGPA in Class 12 */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="percentageCGPAClass12"
                  className="block text-[18px] font-bold md:font-medium font-poppins "
                >
                  Percentage/CGPA (Class 12):
                </label>
                <div className="flex">
                  <select
                    id="percentageCGPAClass12"
                    name="percentageCGPAClass12"
                    className="w-1/2 px-4 py-2 mt-1 rounded-md border border-gray-300"
                  >
                    <option value="cgpa">CGPA</option>
                    <option value="percentage">Percentage</option>
                  </select>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={userDetail.enterPercentageCGPAClass12}
                    id="enterPercentageCGPAClass12"
                    name="enterPercentageCGPAClass12"
                    className="w-1/2 ml-2 px-4 py-2 mt-1 rounded-md border border-gray-300 "
                    placeholder="Enter percentage/CGPA"
                  />
                </div>
              </div>
              <p className="text-red-600">
                {formError.enterPercentageCGPAClass12}
              </p>
              {/* Class 12 Passing Year */}
              <div className="mt-4 mx-6">
                <label
                  htmlFor="class12PassingYear"
                  className="block text-[18px] font-bold md:font-medium font-poppins "
                >
                  Class 12 Passing Year:
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={userDetail.class12PassingYear}
                  id="class12PassingYear"
                  name="class12PassingYear"
                  className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 "
                  placeholder="Enter Class 12 passing year"
                />
              </div>
              <p className="text-red-600">{formError.class12PassingYear}</p>
              {/* Submit Button */}
              <div className="mt-8 mx-6 flex justify-end">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-8 py-3 mb-8 bg-gray-600 border border-white text-white  rounded-md focus:outline-none hover:bg-green-200 font-poppins"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
