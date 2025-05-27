import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { MdEmail } from "react-icons/md";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Shimiyon S</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9361143505</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">shimiyon21@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/ShimiyonS"
            style={{ textDecoration: "none", color: "inherit" }}
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shimiyon-s-060610187/"
            style={{ textDecoration: "none", color: "inherit" }}
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:shimiyon21@gmail.com"
            // style={{ textDecoration: "none", color: "inherit" }}
            className="bannerIcon"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
