import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="bg-white p-5 text-center">
      <h2 className="text-3xl mb-3 font-semibold text-blue-800">
        Share your referral link
      </h2>
      <div className="pt-3">
        <ul>
          <li className="inline-block mx-3 border social-link p-2 rounded-full">
            <a href="#">
              <FaFacebook className="text-2xl transition-all" />
            </a>
          </li>
          <li className="inline-block mx-3 border social-link p-2 rounded-full">
            <a href="#">
              <FaTwitter className="text-2xl transition-all" />
            </a>
          </li>
          <li className="inline-block mx-3 border social-link p-2 rounded-full">
            <a href="#">
              <FaInstagram className="text-2xl transition-all" />
            </a>
          </li>
          <li className="inline-block mx-3 border social-link p-2 rounded-full">
            <a href="#">
              <FaLinkedinIn className="text-2xl transition-all" />
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
