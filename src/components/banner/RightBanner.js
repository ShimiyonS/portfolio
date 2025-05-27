import React from "react";
import { bannerImg } from "../../assets/index";
import development from "../../assets/images/Image.jpg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[350px] h-[400px] lgl:w-[550px] lgl:h-[600px] z-10 "
        src={development}
        style={{width:"90%", height:"100%", objectFit:"cover"}}
        alt="bannerImg"
      />
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
};

export default RightBanner;
