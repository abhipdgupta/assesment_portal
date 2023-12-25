import { useCallback, useEffect, useState } from "react";
import TransparentLogo from "../../../../assets/logo-white.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useTestContext from "../../../../hooks/useTestContext";
import axios from "axios";
import { Grow } from "../../../../components/ui/loading";
import useCamera from "../../../../hooks/useCamera";
import { toggleFullScreen } from "../../../../utils/webApi";

function TestPortalHeader() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { testState, setTestState, timer, setTimer } = useTestContext();
  const {videoRef} = useCamera();
  const navigate = useNavigate();

  const categories = testState.categories;

  const handleEndTest = useCallback(async () => {
    try {
      console.log(testState.questionState,`${import.meta.env.VITE_API_URL}/assessment/submit-test`);  
      setIsLoading(true);
      setError("");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/assessment/submit-test`,
        testState.questionState

      );
        console.log(response.data);
      const data = response.data;

      if (data.status_code === 200) {
        navigate("/candidate/dashboard");
      } else {
        setError("Unable to submit test TRY AGAIN");
      }
    } catch (error) {
      console.log(error);
      setError("Unable to submit test TRY AGAIN");
    } finally {
      setIsLoading(false);
        navigate("/candidate/dashboard");
    }
  }, [navigate, testState]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer.m > 0 || timer.s > 0) {
        setTimer((prevTimer) => {
          // Check if there is time remaining
          if (prevTimer.m > 0 || prevTimer.s > 0) {
            const newS = prevTimer.s === 0 ? 59 : prevTimer.s - 1;
            const newM = prevTimer.s === 0 ? prevTimer.m - 1 : prevTimer.m;

            if (newM < 2) {
              return { ...prevTimer, m: newM, s: newS, isDanger: true };
            }
            return { ...prevTimer, m: newM, s: newS };
          } else {
            // If both minutes and seconds are 0, set isEnded to true

            return { ...prevTimer, m: 0, s: 0, isEnded: true };
          }
        });
      }
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [setTimer, timer]);

  //   useEffect(() => {
  //     if (timer.m == 0 && timer.s == 0) {
  //       handleEndTest();
  //     }
  //   }, [timer, handleEndTest]);

  return (
    <>
      {isLoading && <Grow />}
      <nav className="flex items-center justify-between p-4 bg-slate-800 text-white">
        <div className="w-full ">
          <div className="upper-left-content flex items-center justify-between mt-2">
            <Link to={"/"}>
              <img src={TransparentLogo} alt="Logo" className="h-14 w-30" />
            </Link>
            <div className="flex items-center gap-6 ">
              <button
                className="bg-white hover:bg-red-500 hover:text-white font-bold text-black px-8 py-3 rounded-md"
                onClick={() => toggleFullScreen()}
              >
                Submit Test
              </button>
              <div
                className={`w-32 text-center  px-8 py-3 rounded-md  font-bold 
                ${
                  timer.isDanger
                    ? "text-white bg-red-500"
                    : " text-black bg-white"
                }
            `}
              >
                {timer.m}:{timer.s}
              </div>
              <div className="flex  ">
                <div className="flex flex-col w-max justify-center">
                  <span>Bikash Borah</span>
                  <span>ID: 200710007015</span>
                </div>
                <div draggable className="border-4 border-white w-20 overflow-hidden aspect-square bg-white rounded-full flex items-center justify-center">
                  <video ref={videoRef}  autoPlay playsInline className="w-full h-full -scale-x-100 object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex gap-16 mt-6 justify-center">
            {categories &&
              categories.map((category, i) => (
                <NavLink
                  key={category.name}
                  to={category.name}
                  className={({ isActive }) => {
                    return isActive
                      ? "bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg "
                      : "bg-black hover:bg-slate-700 text-white px-8 py-3 rounded-lg";
                  }}
                  onClick={() => {
                    setTestState((prev) => ({ ...prev, currentSection: i }));
                  }}
                >
                  {category.name}
                </NavLink>
              ))}
          </div>
        </div>

        {/* Custom modal */}
        {showModal && (
          <>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-10 ">
              <div className=" p-8 rounded-lg bg-slate-900 ">
                <p className="mb-4 text-2xl text-white">
                  Are you sure you want to end the test?
                </p>
                <p className="text-red-500 font-bold text-xl text-center">
                  {error.toUpperCase()}
                </p>
                <p className="mb-4 text-xl text-red-500 text-center">
                  *This action is irreversible.
                </p>

                <div className="flex justify-end">
                  <button
                    className="bg-stone-950 hover:bg-red-500  text-white px-8 py-2 mr-2 rounded"
                    onClick={handleEndTest}
                  >
                    {error ? "Try Again" : "Ok"}
                  </button>
                  <button
                    className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-2 rounded"
                    onClick={() => {
                      setShowModal(!showModal);
                      setError("");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

export default TestPortalHeader;
