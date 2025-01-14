import React from "react";
import { Typography } from "../typography/typography";
import FooterCtaImage from "@/assets/footer-cta-bg.png";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type FooterProps = {
  openCalendly?: () => void;
};

const Footer = ({ openCalendly }: FooterProps) => {
  return (
    <>
      <div
        id="cta"
        className="wrapper flex justify-center items-center w-full py-10 md:py-20 bg-gradient-to-br from-[#001A1A] to-black px-4 md:px-0"
      >
        <div className="w-[90%] md:max-w-[1200px] backdrop-blur-lg rounded-3xl p-8 md:p-20 text-center relative overflow-hidden border border-[#00A5A5]/20">
          {/* Background decorative elements */}
          {/* <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#00A5A5]/10 rounded-full blur-[100px]"></div> */}
          {/* <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#00A5A5]/10 rounded-full blur-[100px]"></div> */}
          <Image
            src={FooterCtaImage}
            alt="Footer Background Image"
            width={300}
            height={300}
            className="absolute top-0 left-0 w-full h-full"
          />
          <Typography variant="h1" className="text-white mb-4 relative z-10">
            Goodbye Guesswork
          </Typography>
          <Typography
            variant="subheading"
            className="text-white/90 relative z-10 text-3xl"
          >
            Hello{" "}
            <span className="text-white font-semibold text-3xl">
              Perfect Virtual Try-on
            </span>{" "}
            look!
          </Typography>

          <button className="mt-4 bg-white border-2 border-teal-950 text-teal-950 px-12 py-4 rounded-xl text-lg font-medium hover:bg-[#008585] transition-all duration-300 shadow-lg shadow-[#00A5A5]/20 hover:shadow-[#00A5A5]/40 hover:scale-105 relative z-10">
            Book Demo
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-black text-white px-4 md:px-20 py-8 md:py-16">
        <div className="w-[90%] mx-auto md:max-w-[1400px] flex justify-between gap-10 flex-col md:flex-row">
          {/* Logo and Description Column */}
          <div className="md:max-w-[400px]">
            <Typography variant="subheading" className="text-white mb-4">
              Try My Style
            </Typography>
            <p className="text-gray-400 mb-6">
              Try My Style™ is a venture of Virtstyle Technologies Pvt. Ltd. (CIN: U72200UP2022PTC157545)
            </p>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.linkedin.com/company/trymystyle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00A5A5] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/StylTry?mx=2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00A5A5] transition-colors"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/try_my_style_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00A5A5] transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/Trymistyl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00A5A5] transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="mailto:contact@trymystyle.com"
                className="text-gray-400 hover:text-[#00A5A5] transition-colors"
              >
                <MdEmail size={24} />
              </a>
            </div>
            <a
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Know our journey and what brought us here with blogs
            </a>
          </div>

          <div className="flex justify-start md:justify-end w-full gap-10 md:gap-20">
            <div className="col-span-4 md:ml-auto">
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/help"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="/affiliates"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Affiliates
                  </a>
                </li>
                <li>
                  <a
                    href="/professionals"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Professionals
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links Column */}
            <div className="col-span-4 w-full">
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-use"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="/refund-policy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Refund policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="w-[90%] mx-auto md:max-w-[1400px] mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          Try My Style™ is a venture of Virtstyle Technologies Pvt. Ltd. (CIN: U72200UP2022PTC157545)
        </div>

      </footer>
    </>
  );
};

export default Footer;