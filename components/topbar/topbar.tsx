import React from "react";
import SVGIcon from "../svg-icon";

const Topbar = () => {
  return (
    <div className="bg-gray-50 px-4 py-2">
      <div className="max-w-7xl mx-auto flex justify-between flex-wrap items-center text-sm text-gray-200">
        <div className="flex space-x-6 flex-wrap">
          {["Company", " Downloads", " Contact us"].map((text) => (
            <a
              key={text}
              href="#"
              className="hover:text-black text-gray-200 text-sm font-medium"
            >
              {text}
            </a>
          ))}
        </div>
        <div className="flex items-center flex-wrap space-x-4 text-gray-200 text-sm font-medium">
          <span>Monday - Friday 8:30 AM - 5:30 PM</span>
          <span className="bg-gray-100 h-[20px] w-[1px]" />
          <div className="flex flex-row items-center gap-2">
            <SVGIcon icon="contact" stroke="black" />
            <span>office@germancard.de</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
