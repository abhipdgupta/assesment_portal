import Header from "./components/header";
import Banner from "./components/banner";
import FacebookLogo from "../../assets/facebook.png";
import WhatsAppLogo from "../../assets/whatsapp.png";
import InstagramLogo from "../../assets/instagram.png";
import TwitterLogo from "../../assets/twitter.png";
import YouTubeLogo from "../../assets/youtube.png";
import feature1 from "../../assets/f1.png";
import feature2 from "../../assets/f2.png";
import feature3 from "../../assets/f3.png";
import feature4 from "../../assets/f4.png";
import { Link } from "react-router-dom";
import TransparentLogo from "../../assets/logo-black.png";
const colors = {
  red: "bg-red-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-500",
  blue: "bg-blue-500",
};

const Landingpage = () => {
  return (
    <>
      <Header />

      <Banner />
      <div className="flex  items-center flex-col ">
        <Link
          to={"/candidate/verify-token"}
          className="bg-stone-950 hover:bg-green-200 text-white py-2 px-8 rounded-full my-4 w-60 h-15 flex justify-center mt-16 text-semibold"
        >
          TAKE A TEST
        </Link>
        <p className="text-base w-3/5 mx-auto text-center font-poppins text-gray-800">
          Ready to showcase your skills? Click &quot;Take A Test&quot; to embark
          on a personalised assessment journey. Uncover your strengths and open
          doors to new opportunities with RATE
        </p>
        <hr className=" my-4 w-2/5 h-10 border-t-2 border-black mx-auto mt-16" />
      </div>
      <div className="text-center text-2xl font-bold mt-20">
        4 STEPS FOR TAKING TEST IN RATE
      </div>

      <div className="w-full  items-center flex flex-wrap justify-center my-20 ">
        <InfoCard
          info={"Enter Your Token:"}
          step={"STEP 1:"}
          third={"Enter the code RATE gave you."}
          color={colors.blue}
        />
        <InfoCard
          info={"Quick Registration:"}
          step={"STEP 2:"}
          third={"Swiftly sign up with essential details."}
          circle={0}
          color={colors.orange}
        />
        <InfoCard
          info={"Setup Check:"}
          step={"STEP 3:"}
          third={"Check your camera, audio, and internet."}
          color={colors.yellow}
        />
        <InfoCard
          info={"Start Your Test:"}
          step={"STEP 4:"}
          third={"Begin your assessment now."}
          color={colors.red}
          circle={0}
        />
      </div>
      <div className="w-screen flex flex-col justify-center items-center p-10">
        <div className="text-center text-2xl font-bold text-gray-800 mb-6 font-poppins">
          RATE ASSESSMENT PLATFORM TUTORIAL
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 flex-1 items-center justify-center ">
          <div className="flex-1 md:start aspect-video">
            <iframe
              className="border border-dotted border-stone-950"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Jp-lD7hgqVc?si=lxoBzAZj-_lxDbc-"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>

          <div className="flex flex-col ml-8 w-full md:w-2/3   ">
            <img src={TransparentLogo} className="w-[250px]" alt="" />

            <div className="text-xl mt-4 text-gray-800 text-center ml-8 w-2/4">
              We&apos;ve prepared a comprehensive video tutorial to guide you
              through the process of giving assessments on the RATE portal.
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex flex-col items-center justify-center p-20">
        <div className="text-2xl text-black font-bold text-center ">
          FEATURES OF RATE
        </div>
        <div className="flex-1 w-full flex items-center justify-center flex-wrap space-x-20 mt-20">
          <div className="flex flex-col items-center mx-2 w-60 ">
            <img
              src={feature1}
              alt="Feature 1"
              className="w-50 h-40 object-cover rounded-lg"
            />
            <p className="text-gray-600 font-bold text-center mt-0">
              Personalized assessments highlighting unique talents.
            </p>
          </div>
          <div className="flex flex-col items-center mx-2 w-60">
            <img
              src={feature2}
              alt="Feature 2"
              className="w-50 h-40 object-cover rounded-lg"
            />
            <p className="text-gray-600 font-bold text-center mt-0">
              Continuous testing with built-in WiFi.
            </p>
          </div>
          <div className="flex flex-col items-center mx-2 w-60">
            <img
              src={feature3}
              alt="Feature 3"
              className="w-50 h-40 object-cover rounded-lg"
            />
            <p className="text-gray-600 font-bold text-center mt-0">
              Simplified interface for easy navigation.
            </p>
          </div>
          <div className="flex flex-col items-center mx-2 w-60">
            <img
              src={feature4}
              alt="Feature 4"
              className="w-50 h-40 object-cover rounded-lg"
            />
            <p className="text-gray-600 font-bold text-center mt-0">
              Robust security for user data.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-600 flex flex-col gap-8 bg-grau mt-6 ">
        <div className="flex justify-center items-center gap-48 border-b-2 p-2">
          <div className="text-white text-xl">Home</div>
          <div className="text-white text-xl">Contact</div>
          <div className="text-white text-xl">About Us</div>
          <div className="text-white text-xl">Support</div>
          <div className="text-white text-xl">Help</div>
        </div>

        {/* Add social media icons horizontally */}
        <div className="flex justify-center items-center gap-12">
          <img src={FacebookLogo} alt="Facebook" className="w-8 h-8" />
          <img src={WhatsAppLogo} alt="WhatsApp" className="w-6 h-6" />
          <img src={InstagramLogo} alt="Instagram" className="w-6 h-6" />
          <img src={TwitterLogo} alt="Twitter" className="w-8 h-6" />
          <img src={YouTubeLogo} alt="YouTube" className="w- h-6" />
        </div>

        <div className="text-white w-3/5 text-center mx-auto">
          This website has strict copyright schemes. Anyone found using RATE in
          any unethical ways without prior permissions will be taken legal
          action by the makers.
        </div>
      </div>
    </>
  );
};

export default Landingpage;

const InfoCard = ({ circle = 1, info, step, third, color, icon }) => {
  return (
    <>
      <div className="relative h-[400px] min-w-[280px] p-5 ">
        <div className="w-full h-full bg-white rounded-xl drop-shadow-2xl  flex flex-col justify-center items-center ">
          <h1 className="text-xl font-bold">{step}</h1>
          <div className="text-xl font-semibold">
            <h1>{info}</h1>
          </div>
          <div className="text-base break-words">
            <h1 className="text-center">{third}</h1>
          </div>
        </div>
        <div
          className={`w-28 h-28 bg-yellow-500 absolute ${
            circle == 1 ? "top-0" : "bottom-0"
          } left-1/2 -translate-x-1/2  ${
            circle == 1 ? "-translate-y-1/2" : "translate-y-1/2"
          } rounded-full`}
        >
          {/* circle */}
          <img src={icon} alt="" />
        </div>
        <div
          className={`w-full h-1/2 ${color} absolute ${
            circle == 0 ? "top-0" : "top-1/2"
          } left-0 -z-10 ${circle == 0 ? "rounded-t-xl" : "rounded-b-xl"} `}
        ></div>
      </div>
    </>
  );
};
