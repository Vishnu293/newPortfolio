import React, { useRef, useEffect, useState } from "react";
import BG from "../../assets/bg2.png";
import Spotlight from "./Spotlight";
import logo from "../../assets/pngwing.com.png";

const Home = () => {
  const videoRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [videoRemoved, setVideoRemoved] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3250);

    const videoPlayTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.55;
        videoRef.current.play();
      }
    }, 1000);

    const removeVideoTimer = setTimeout(() => {
      setVideoRemoved(true);
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(videoPlayTimer);
      clearTimeout(removeVideoTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black flex justify-center items-center z-0">
      {!videoRemoved ? (
        <>
          <Spotlight
            className={`top-0 left-0 m-auto w-full h-full z-2 transition-opacity duration-1000 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
            fill="#FFD700"
          />
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            onLoadedMetadata={() => {
              if (videoRef.current) {
                videoRef.current.playbackRate = 0.6;
              }
            }}
            className={`pt-60 relative z-10 object-contain w-6/12 m-auto transition-opacity duration-700 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
            style={{
              filter: "drop-shadow(0 0 60px rgba(255, 215, 0, 0.6))",
              borderRadius: "8px",
            }}
          >
            <source src="one.mov" type="video/mp4; codecs='hvc1'" />
            <source src="one.webm" type="video/webm" />
          </video>{" "}
        </>
      ) : (
        <div className="absolute top-1/2 transform -translate-y-1/2 flex text-left items-center">
          <div className="flex-col">
            <div className="text-7xl font-semibold animate-rollUp text-white mb-3">
              Hi, I'm <span className="text-yellow-500">Vishnu C.</span>
            </div>
            <div className="text-7xl font-semibold animate-rollUp text-white">
              <span className="text-yellow-500">Front End</span> Developer
            </div>
          </div>
          <div className="w-96 ml-20">
            <img
              src={logo}
              alt="logo.png"
              className="w-full h-auto scale-150 object-contain filter invert brightness-0"
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
