import { Button } from "@/components/button/button";
import SVGIcon from "../svg-icon";
import { IconNames } from "../svg-icon/svg-icon.utils";

const Footer = () => {
  return (
    <footer
      className="flex flex-col w-full"
      aria-label="Site footer with company info and contact"
    >
      <div className="w-full bg-gray-50 md:px-24 px-8 md:py-14 py-8 rounded-lg">
        {/* Header with logo and social icons */}
        <div className="flex justify-between items-center flex-wrap sm:gap-4 mb-8">
          <SVGIcon icon="logo" aria-label="Company logo" />

          <nav aria-label="Social media links">
            <ul className="flex items-center flex-wrap gap-4 max-sm:mt-8 list-none p-0 m-0">
              {[
                { icon: "linkedin", label: "Linkedin" },
                { icon: "facebook", label: "Facebook" },
                { icon: "instagram", label: "Instagram" },
                { icon: "tiktok", label: "TikTok" },
                { icon: "xing", label: "Xing" },
              ].map(({ icon, label }) => (
                <li key={icon} className="flex flex-row items-center gap-2">
                  <SVGIcon
                    icon={icon as IconNames}
                    aria-label={`${label} logo`}
                  />
                  <span className="font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-24  gap-8 my-8">
          {/* About Us */}
          <section aria-labelledby="footer-aboutus">
            <h3
              id="footer-aboutus"
              className="text-xs font-bold text-black mb-4"
            >
              ABOUT US
            </h3>
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
          </section>

          {/* Products & Services */}
          <section aria-labelledby="footer-products-services">
            <h3
              id="footer-products-services"
              className="text-xs font-bold text-black mb-4"
            >
              PRODUCTS & SERVICES
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2 list-disc list-inside">
                {[
                  "Plastic cards",
                  "Organic cards",
                  "RFID/Chip cards",
                  "Special formats",
                ].map((text) => (
                  <li key={text} className="font-medium">
                    {text}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 list-disc list-inside">
                {["Personalization", "Printer & Accessories", "Services"].map(
                  (text) => (
                    <li key={text} className="font-medium">
                      {text}
                    </li>
                  )
                )}
              </ul>
            </div>
          </section>

          {/* Company */}
          <section aria-labelledby="footer-company">
            <h3
              id="footer-company"
              className="text-xs font-bold text-black mb-4"
            >
              COMPANY
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              {["About us", "Jobs & Career", "Downloads"].map((text) => (
                <li key={text} className="font-medium">
                  <a href="#" className="hover:underline">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Certificates and Action Buttons */}
        <div className="flex justify-between flex-wrap items-end sm:gap-4 mt-16">
          <section
            aria-labelledby="footer-certificates"
            className="flex flex-col"
          >
            <h3
              id="footer-certificates"
              className="font-bold text-xs text-black mb-4"
            >
              OUR CERTIFICATES
            </h3>
            <ul className="flex flex-row items-center flex-wrap gap-6 list-none p-0 m-0">
              {[
                "german-made",
                "planted",
                "climate-partner",
                "iso",
                "dssv",
                "tuv",
                "gantner",
              ].map((icon) => (
                <li key={icon}>
                  <SVGIcon
                    icon={icon as IconNames}
                    aria-label={`${icon} certificate`}
                  />
                </li>
              ))}
            </ul>
          </section>

          <div className="flex flex-row flex-wrap gap-3 max-sm:mt-8">
            <Button
              className="bg-black text-white hover:bg-gray-800"
              aria-label="Contact us"
            >
              <SVGIcon icon="contact" />
              Contact us
            </Button>
            <Button
              className="text-black"
              aria-label="Call now at +49 (0) 2273 60149 0"
            >
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
          <nav
            className="flex flex-row gap-4 max-sm:my-2"
            aria-label="Footer legal links"
          >
            <a href="#" className="hover:text-black text-gray-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black text-gray-200">
              Cookies
            </a>
          </nav>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span>Designed by</span>
          <div className="flex flex-row items-center gap-2 font-medium">
            <span>Starify</span>{" "}
            <SVGIcon icon="union" aria-label="Union logo" />
            <span>Marquez Medina</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
