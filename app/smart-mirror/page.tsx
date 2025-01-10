"use client";
import "../index.css";
import { Navbar } from "@/components/layout/navbar";
import { useState, useEffect } from "react";
import Footer from "@/components/layout/footer";
import { Typography } from "@/components/typography/typography";
import Image from "next/image";
import handstar_icon from "../../assets/icons/hand_star.svg";
import speaker_icon from "../../assets/icons/speaker.svg";
import marketing_icon from "../../assets/icons/marketing.svg";
import magnet_icon from "../../assets/icons/magnet.svg";
import { HorizontalCarousel } from "@/components/HorizontalCarousel";
import WebsiteSmartMirrorPng from "@/assets/webiste-smart-mirror.png";
const ScrollSpyDot = ({
  active,
  onClick,
  color,
}: {
  active: boolean;
  onClick: () => void;
  color: string;
}) => (
  <button
    onClick={onClick}
    className={`w-0 h-0 md:w-3 md:h-3 rounded-full transition-all duration-300 ${active ? `bg-${color} scale-125` : `bg-gray-400 hover:bg-${color}-400`
      }`}
  />
);

const sections = [
  { id: "hero", color: "white" },
  { id: "benefits", color: "teal-950" },
  { id: "cta", color: "white" },
];

const store_benefits = [
  {
    id: 1,
    icon: magnet_icon,
    title: "Attract New Customers",
    description:
      "Increase footfall with social media campaigns about the try-on technology, creating a buzz about the salon.",
  },
  {
    id: 2,
    icon: handstar_icon,
    title: "Premium Pay Monetization",
    description:
      "Offer premium services and consultations with personalized follow-ups and promotions",
  },
  {
    id: 3,
    icon: marketing_icon,
    title: "Affiliate Marketing",
    description:
      "Upsell partner brand product recommendations based on customer characteristics & insights gained from the smart-mirror",
  },
  {
    id: 4,
    icon: speaker_icon,
    title: "Advertising",
    description:
      "Retarget the customer-base on social media and build a retaining trust for your Salon",
  },
  {
    id: 5,
    icon: handstar_icon,
    title: "Premium Pay Monetization",
    description:
      "Offer premium services and consultations with personalized follow-ups and promotions",
  },
  {
    id: 6,
    icon: marketing_icon,
    title: "Affilate Marketing",
    description:
      "Upsell partner brand product recommendations based on customer characteristics & insights gained from the smart-mirror",
  },
];
export default function SmartMirror() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.2],
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center flex-col relative">
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-[1000]">
        {sections.map((section) => (
          <ScrollSpyDot
            key={section.id}
            active={activeSection === section.id}
            onClick={() => scrollToSection(section.id)}
            color={section.color}
          />
        ))}
      </div>

      <Navbar />
      <div id="hero" className="section-1 bg-black w-full flex flex-col items-center justify-center p-4 md:p-16 pt-36 md:pt-0">
        <div className="flex max-w-[1400px] flex-col">
          <div className="hero flex flex-col lg:flex-row items-center justify-center min-h-[84vh] md:min-h-screen max-h-screen relative">
            {/* Gradien two circles at left top and right bottom */}

            <div className="absolute top-[-120px] left-[-150px] w-[600px] h-[600px] bg-teal-950 rounded-full blur-[100px] z-[0]"></div>
            <div className="absolute bottom-[-120px] right-[-150px] w-[600px] h-[600px] bg-teal-950 rounded-full blur-[100px] z-[0]"></div>

            <div className="hero-content flex-1 z-[100] w-full">
              <Typography className="hero-title text-white" variant={"h1"}>
                Smart Mirror For Hair Salons
              </Typography>
              <Typography className="hero-subtitle text-white max-w-2xl">
                Change the way your customer feel about themselves. A new-age
                salon consultation tool that allows your customers to choose and
                visualize themselves in their desired Hair-style/Hair-color
                before the hairdo.
              </Typography>
            </div>

            {/* underline */}

            <div className="hero-image flex-1 items-centers justify-center flex ">
              <Image
                src={WebsiteSmartMirrorPng}
                width={400}
                height={400}
                alt=""
                className="h-[300px] w-[300px] md:h-[600px] md:w-[600px] z-[200]"
              />
            </div>
          </div>
          <div className="how-it-works z-[100] mb-20 md:mt-0">
            <Typography
              className="how-it-works-title text-white"
              variant={"h1"}
            >
              Know how it works?
            </Typography>

            <Typography className="how-it-works-subtitle text-white !mt-2" variant={"content"}>
              A simple 3-step process to get you started
            </Typography>

            <div className="video-clips flex justify-between gap-4 mt-20">
              <div className="video-clip flex flex-row gap-4 md:gap-20">
                {/* video component */}
                <div className="video-1 rounded-3xl overflow-hidden relative group">
                  <Image
                    src={"https://tms-website.s3.us-east-1.amazonaws.com/smart-mirror-page-gif/Step+1+Image+click.gif"}
                    alt="Smart mirror demo"
                    width={400}
                    height={400}
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Typography className="absolute bottom-4 right-4 text-white text-2xl font-semibold">
                      Take a Photo
                    </Typography>
                    {/* animated underline */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white"></div>

                  </div>
                </div>
                <div className="video-2 rounded-3xl overflow-hidden relative group">
                  <Image
                    src={"https://tms-website.s3.us-east-1.amazonaws.com/smart-mirror-page-gif/Step+2+Select+Hair+style.gif"}
                    alt="Select Hair Style"
                    width={400}
                    height={400}
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Typography className="absolute bottom-4 right-4 text-white text-2xl font-semibold">
                      Choose Style
                    </Typography>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white"></div>
                  </div>

                </div>
                <div className="video-3 rounded-3xl overflow-hidden relative group">
                  <Image
                    src={"https://tms-website.s3.us-east-1.amazonaws.com/smart-mirror-page-gif/Step+3+Visualise+It.gif"}
                    alt="Visualise It"
                    width={400}
                    height={400}
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Typography className="absolute bottom-4 right-4 text-white text-2xl font-semibold">
                      Visualize Result
                    </Typography>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="benefits" className="section-2 min-h-screen w-full bg-gray-200">
        <div className="store-benefits p-4 pt-20 lg:p-32 ">
          <Typography
            className="store-benefits-title text-start"
            variant={"h1"}
          >
            What&apos;s in store for Salons?
          </Typography>

          <div className="grid-cols-3 gap-10 mt-20 hidden md:grid">
            {store_benefits.map((item) => (
              <>
                <div className="p-10 w-full rounded-3xl bg-white h-[350px] max-w-lg relative min-w-[330px]">
                  <div className="icon">
                    <Image src={item.icon} alt="Icon" width={60} height={60} />
                  </div>
                  <Typography
                    className="benefit-card-title mt-4 poppins font-medium"
                    variant={"subheading"}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className="description poppins !mt-2"
                    variant={"content"}
                  >
                    {item.description}
                  </Typography>
                </div>
              </>
            ))}
          </div>
          <HorizontalCarousel className="md:hidden mt-10" color="teal-950">
            {store_benefits.slice(0, Math.ceil(store_benefits.length / 2)).map((item) => (
              <>
                <div className="p-10 w-full rounded-3xl bg-white h-[350px] max-w-lg relative min-w-[330px]">
                  <div className="icon">
                    <Image src={item.icon} alt="Icon" width={60} height={60} />
                  </div>
                  <Typography
                    className="benefit-card-title mt-4 poppins font-medium"
                    variant={"subheading"}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className="description poppins !mt-2"
                    variant={"content"}
                  >
                    {item.description}
                  </Typography>
                </div>
              </>
            ))}
          </HorizontalCarousel>

          <HorizontalCarousel className="md:hidden mt-10" color="teal-950">
            {store_benefits.slice(Math.ceil(store_benefits.length / 2)).map((item) => (
              <>
                <div className="p-10 w-full rounded-3xl bg-white h-[350px] max-w-lg relative min-w-[330px]">
                  <div className="icon">
                    <Image src={item.icon} alt="Icon" width={60} height={60} />
                  </div>
                  <Typography
                    className="benefit-card-title mt-4 poppins font-medium"
                    variant={"subheading"}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className="description poppins !mt-2"
                    variant={"content"}
                  >
                    {item.description}
                  </Typography>
                </div>
              </>
            ))}
          </HorizontalCarousel>

        </div>
      </div>
      <Footer />
    </div>
  );
}
