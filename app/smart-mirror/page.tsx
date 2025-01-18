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
// import { faqData } from "@/data/faq";
import faqData from "../../assets/json/SmartMirror_Faq.json";
import { useCalendly } from "@/lib/features/calendly/context/CalendlyContext";
import increaseRevenueIcon from "../../assets/icons/increase_revenue.svg";
import upscalingBusinessIcon from "../../assets/icons/upscale_business.svg";
import DarkGradientCircles from "@/components/DarkGradientCircles";


type VideoClip = {
  url: string;
  alt: string;
  title: string;
};

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
  { id: "how-it-works", color: "white" },
  { id: "faq", color: "teal-950" },
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
      "Offer premium services and consultations with personalized follow-ups and promotions.",
  },
  {
    id: 3,
    icon: marketing_icon,
    title: "Affiliate Marketing",
    description:
      "Upsell partner brand product recommendations based on customer characteristics & insights gained from the smart-mirror.",
  },
  {
    id: 4,
    icon: speaker_icon,
    title: "Advertising",
    description:
      "Retarget the customer-base on social media and build a retaining trust for your Salon.",
  },
  {
    id: 5,
    icon: increaseRevenueIcon,
    title: "Increased revenue",
    description:
      "Go from alow average ticket size to Increased ROI with additional monthly profits with TryMyStyle’s smart mirror.",
  },
  {
    id: 6,
    icon: upscalingBusinessIcon,
    title: "Upscaling Business",
    description:
      "Categorize yourself as medium to high end salon providing premium services to your customers.",
  },
];

export default function SmartMirror() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const { openCalendly } = useCalendly();

  const [activeFaq, setActiveFaq] = useState("");
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const videoClips: VideoClip[] = [
    {
      url: "https://tms-website.s3.us-east-1.amazonaws.com/smart-mirror-page-gif/Step+1+Image+click.gif",
      alt: "Smart mirror demo",
      title: "Click"
    },
    {
      url: "https://tms-website.s3.us-east-1.amazonaws.com/smart-mirror-page-gif/Step+2+Select+Hair+style.gif",
      alt: "Select Hair Style",
      title: "Choose"
    },
    {
      url: "https://tms-website.s3.us-east-1.amazonaws.com/smart-mirror-page-gif/Visualise+Result.gif",
      alt: "Visualise It",
      title: "Visualize"
    },
    {
      url: "https://tms-website.s3.us-east-1.amazonaws.com/smart-mirror-page-gif/Share+with+friends.gif",
      alt: "Share with friends",
      title: "Share"
    }
  ];

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveVideoIndex((prev) => (prev + 1) % videoClips.length);
    }, 3000); // Adjust timing as needed (3000ms = 3s)

    return () => clearTimeout(timer);
  }, [activeVideoIndex]);


  const handleFaqClick = (key: string) => {
    if (activeFaq === key) {
      setActiveFaq("");
    } else {
      setActiveFaq(key);
    }
  };

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
      <div id="hero" className="section-1 overflow-hidden bg-black w-full flex flex-col items-center justify-center p-4 md:p-16 pt-36 md:pt-0">
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
                className="w-[300px] md:w-[600px] h-full  z-[200]"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="benefits" className="section-2 min-h-screen w-full bg-white pb-10 relative overflow-hidden flex items-center justify-center">

        <div className="absolute top-[-120px] left-[-150px] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] z-[0]"></div>
        <div className="absolute bottom-[-120px] right-[-150px] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] z-[0]"></div>

        <div className="store-benefits p-4 pt-20  z-[100] relative max-w-[1400px] w-full flex flex-col items-center justify-center">
          <Typography
            className="store-benefits-title text-start text-teal-950"
            variant={"h1"}
          >
            What&apos;s in store for Salons?
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10 mt-4  md:mt-20 md:grid max-w-[1300px] ">
            {store_benefits.slice(0, 6).map((item) => (
              <>
                <div className="md:p-10 p-5 w-full rounded-3xl bg-white relative border shadow-lg">
                  <div className="flex flex-row md:flex-row items-center justify-start gap-4">
                    <div className="icon">
                      <Image src={item.icon} alt="Icon" width={60} height={60} className="text-teal-950 h-10 w-10 md:h-14 md:w-14" />
                    </div>
                    <Typography
                      className="benefit-card-title mt-4 poppins font-medium text-teal-950 text-start"
                      variant={"subheading"}
                    >
                      {item.title}
                    </Typography>
                  </div>

                  <Typography
                    className="description poppins !mt-2 text-teal-900"
                    variant={"content"}
                  >
                    {item.description}
                  </Typography>
                </div>
              </>
            ))}
          </div>

        </div>
      </div>
      <div className=" bg-black w-full flex items-center justify-center relative overflow-hidden" id="how-it-works">

        {/* create two circles of radial gradient and put them in the top left and bottom right */}
        {/* <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-[#00A5A5]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#00A5A5]/10 rounded-full blur-[100px]"></div> */}
        <DarkGradientCircles overflowHidden={true} />
        <div className="flex max-w-[1400px] flex-col pt-20 items-start justify-start w-full p-4">

          <div className="how-it-works z-[100] mb-20 md:mt-0  min-h-screen h-full items-start justify-start flex flex-col md:p-0 text-center">
            <Typography
              className="how-it-works-title text-white text-start"
              variant={"h1"}
            >
              Know how it works?
            </Typography>

            <Typography className="how-it-works-subtitle text-gray-300 !mt-4 max-w-4xl text-start" variant={"content"}>
              A simple 4-step process to get you started. The simple and user-friendly interface will help the hair stylist and client communicate effectively and take the salon consultation experience to a whole new level.
            </Typography>

            <div className="video-clips justify-between gap-4 mt-20 md:flex hidden">
              <div className="video-clip flex flex-row gap-4 md:gap-5 items-center justify-center">
                {videoClips.map((clip, index) => (
                  <div
                    key={index}
                    className={`video-1 rounded-3xl overflow-hidden relative group transition-opacity duration-500 ${index === activeVideoIndex ? "opacity-100" : "opacity-40"
                      }`}
                  >
                    <Image
                      src={clip.url}
                      alt={clip.alt}
                      width={400}
                      height={400}
                      className={` ${index === activeVideoIndex ? "w-[24rem]" : "w-[18rem]"}`}
                    />
                    <div className="absolute inset-0 bg-teal-950/20 rounded-3xl" />

                    <Typography variant="subheading" className={`word absolute bottom-5 left-1/2 -translate-x-1/2 text-white w-full text-center text-2xl font-semibold ${index === activeVideoIndex ? "opacity-100" : "opacity-0"}`} >
                      {clip.title}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            <HorizontalCarousel className="md:hidden mt-10" color="teal-400" showDots={true}>
              {videoClips.map((clip, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div
                    key={index}
                    className="video-1 rounded-3xl overflow-hidden relative group transition-opacity duration-500"
                  >
                    <Image
                      src={clip.url}
                      alt={clip.alt}
                      width={400}
                      height={400}
                      className="w-[18rem]"
                    />
                    <div className="absolute inset-0 bg-teal-950/20 rounded-3xl" />

                    <Typography variant="subheading" className={`word absolute bottom-5 left-1/2 -translate-x-1/2 text-white w-full text-center text-2xl font-semibold ${index === activeVideoIndex ? "opacity-100" : "opacity-100"}`} >
                      {clip.title}
                    </Typography>
                  </div>
                </div>
              ))}
            </HorizontalCarousel>
          </div>
        </div>
      </div>
      <div
        id="faq"
        className="section-4 w-full flex justify-center items-center bg-white p-4 md:p-20 min-h-[100vh] relative overflow-hidden  z-[150]"
      >
        {/* create two circles of radial gradient and put them in the top left and bottom right */}

        <section className="md:max-w-[1400px] w-full z-[1000]">
          <div className="mb-16 flex flex-col md:flex-row md:gap-[250px]">
            <div className="heading flex-1">
              <Typography
                variant="subheading"
                className="text-gray-500 text-xl md:text-3xl uppercase font-semibold"
              >
                FAQ
              </Typography>

              <Typography variant="h1" className="text-teal-950 mt-2 mb-12">
                Frequently
                <br />
                asked
                <br />
                questions.
              </Typography>
            </div>

            <div className="space-y-3 flex-3 w-full flex flex-col ">
              {faqData.faqs.map((data) => (
                <div key={data.question} className="w-full">
                  <button
                    className="w-full bg-white hover:bg-gray-200 p-3 shadow-2xl rounded-lg fle justify-between items-center group transition-all duration-300"
                    onClick={() => handleFaqClick(data.question)}
                  >
                    <div className="w-full h-full text-teal-950 hover:text-white flex justify-between">

                      <Typography
                        variant="content"
                        className="text-left font-semibold"
                      >
                        {data.question}
                      </Typography>

                      <div className="w-[10px] "></div>

                      <span
                        className={`text-2xl transition-transform duration-300 ${activeFaq === data.question ? "rotate-45 !text-red-500" : ""}`}
                      >
                        +
                      </span>
                    </div>

                  </button>
                  <div
                    className={`overflow-hidden transition-all  rounded-md mt-2 shadow-2xl duration-300 ${activeFaq === data.question
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="p-5 text-white bg-teal-950 rounded-b-lg">
                      <Typography
                        variant="content"
                        className="text-left text-white"
                      >
                        {data.answer}
                      </Typography>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer openCalendly={openCalendly} />
    </div>
  );
}
