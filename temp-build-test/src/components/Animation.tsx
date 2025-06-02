import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import video from "../../Assests/Animation.mp4";


const LoadingAnimation = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect (() => {
  const handleVideoEnd = () =>{
    navigate("/",{replace:true})
}
   const vid = videoRef.current;
    if (vid) {
      vid.play(); // Play the video on load
      vid.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      vid?.removeEventListener("ended", handleVideoEnd);
    };
  }, [navigate]);

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{animationDelay : '25s'}}>
            <video src={video} autoPlay muted
            loop={false}
            ref={videoRef}
            className="w-full h-full object-cover"></video>
            {/* Final text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center animate-fade-in" style={{ animationDelay: "19s" }}>
                <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
                  Welcome
                </h1>
                <p className="text-2xl text-gray-300 animate-fade-in" style={{ animationDelay: "20s" }}>
                  From Kolkata to the Universe
                </p>
              </div>
            </div>
          </div>
  );
};

export default LoadingAnimation;