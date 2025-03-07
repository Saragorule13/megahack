import React from "react";
import backgroundImage from "../../assets/mainbg.jpg";
import { useNavigate, NavLink } from "react-router-dom";
import { useSignIn } from "@clerk/clerk-react";
import { farmer } from "../../assets/assets";

export default function Banner() {
  const navigate = useNavigate();
  const { signIn } = useSignIn();

  const handleAuthAction = async (redirectPath) => {
    console.log("button click");
    try {
      await signIn.create({
        strategy: "oauth_google",
        redirectUrl: `${window.location.origin}${redirectPath}`,
      });
    } catch (err) {
      console.error("Error during authentication:", err);
    }
  };

  return (
    <div className="relative h-screen w-full">
    {/* Background Video */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
    >
      <source src={farmer} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Content Section */}
    <div className="container w-full h-full flex items-center justify-center py-16 md:py-24 lg:py-32 relative z-20">
      <div className="max-w-3xl mx-auto text-center px-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          Find Fresh Local Produce Near You
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 animate-fade-in-up animation-delay-300">
          Connect with local farmers' markets, discover fresh produce, and
          support sustainable food systems in your community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
          <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Find Markets Near Me
          </button>
          <button className="bg-white hover:bg-gray-100 text-green-800 py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Browse Seasonal Products
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
