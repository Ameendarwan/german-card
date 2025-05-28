"use client";

import { Linkedin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/button/button";
import SVGIcon from "../svg-icon";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full">
      <div className="w-full bg-gray-50 md:px-24 px-8 md:py-14 py-8 rounded-lg">
        {/* Header with logo and social icons */}
        <div className="flex justify-between items-center flex-wrap sm:gap-4 mb-8">
          <SVGIcon icon="logo" />

          <div className="flex items-center flex-wrap gap-4 max-sm:mt-8">
            <div className="flex flex-row items-center gap-2">
              <SVGIcon icon="linkedin" />
              <span className="font-medium">Linkedin</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <SVGIcon icon="facebook" />
              <span className="font-medium">Facebook</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <SVGIcon icon="instagram" />
              <span className="font-medium">Instagram</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <SVGIcon icon="tiktok" />
              <span className="font-medium">TikTok</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <SVGIcon icon="xing" />
              <span className="font-medium">Xing</span>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          {/* About Us */}
          <div>
            <h3 className="text-xs font-bold text-black mb-4">ABOUT US</h3>
            <p className="leading-relaxed">
              We,{" "}
              <span className="font-medium text-black">
                GERMANCARD Technologies GmbH
              </span>
              , are a special printing company based in Kerpen near Cologne and
              have specialized in the production of plastic cards, RFID cards
              and customer cards in the form of a check card up to special
              formats.
            </p>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-xs font-bold text-black mb-4">
              PRODUCTS & SERVICES
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                {[
                  "Plastic cards",
                  "Organic cards",
                  "RFID/Chip cards",
                  "Special formats",
                ].map((text) => (
                  <p key={text} className="font-medium">
                    {text}
                  </p>
                ))}
              </div>
              <div className="space-y-2">
                {["Personalization", "Printer & Accessories", "Services"].map(
                  (text) => (
                    <p key={text} className="font-medium">
                      {text}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold text-black mb-4">COMPANY</h3>
            <div className="space-y-2">
              {["About us", "Jobs & Career", "Downloads"].map((text) => (
                <p key={text} className="font-medium">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates and Action Buttons */}
        <div className="flex justify-between flex-wrap items-end sm:gap-4 mt-16">
          <div className="flex flex-col">
            <h3 className="font-bold text-xs text-black mb-4">
              OUR CERTIFICATES
            </h3>
            <div className="flex flex-row items-center flex-wrap gap-6">
              <SVGIcon icon="german-made" />
              <SVGIcon icon="planted" />
              <SVGIcon icon="climate-partner" />
              <SVGIcon icon="iso" />
              <SVGIcon icon="dssv" />
              <SVGIcon icon="tuv" />
              <SVGIcon icon="gantner" />
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-3 max-sm:mt-8">
            <Button className="bg-black text-white hover:bg-gray-800">
              <SVGIcon icon="contact" />
              Contact us
            </Button>
            <Button className="text-black">
              <SVGIcon icon="phone" /> Call now +49 (0) 2273 60149 0
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="md:px-24 px-8 py-8 flex justify-between items-center flex-wrap text-sm text-gray-200">
        <div className="flex md:flex-row flex-col md:gap-4 gap-1">
          <span className="text-gray-200">
            Copyright © 2024 by GERMANCARD Technologies GmbH
          </span>
          <span className="bg-gray-100 h-[20px] w-[1px] hidden md:inline" />
          <div className="flex flex-row gap-4 max-sm:my-2 text-gray-200">
            <a href="#" className="hover:text-black text-gray-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black text-gray-200">
              Cookies
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span>Designed by</span>
          <div className="flex flex-row items-center gap-2 font-medium">
            <span>Starify</span> <SVGIcon icon="union" />
            <span>Marquez Medina</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
