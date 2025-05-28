import React from "react";
import { Button } from "../button/button";
import { Menu, Phone } from "lucide-react";
import SVGIcon from "../svg-icon";

const MainHeader = () => {
  return (
    <div className="bg-white py-4 px-4 mt-8">
      <div className="max-w-7xl mx-auto flex justify-between flex-wrap md:flex-row flex-col gap-4 items-center">
        {/* Logo */}
        <SVGIcon icon="logo" />

        {/* Call to Action */}
        <div className="flex items-center flex-wrap md:flex-row flex-col gap-4 space-x-4">
          <Button variant="outline">
            <SVGIcon icon="phone" />
            Call now +49 (0) 2273 60149 0
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
