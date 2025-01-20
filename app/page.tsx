"use client";
import Image from "next/image";
import "./index.css";
import barIcon from "../assets/icons/bars.svg";
import consultationIcon from "../assets/icons/consultation.svg";
import robotIcon from "../assets/icons/robot.svg";
import customerConfidenceIcon from "../assets/icons/customer_confidence.svg";



// before vs after section icons
import Vector1Icon from "../assets/icons/Vector-1.svg";
import Vector2Icon from "../assets/icons/Vector-2.svg";
import Vector3Icon from "../assets/icons/Vector-3.svg";
import Vector4Icon from "../assets/icons/Vector.svg";
import dataGraphIcon from "../assets/icons/data-graph.svg";
import { useState, useEffect } from "react";
import faqData from "../assets/json/TryMyStyle_FAQ.json";
import { Typography } from "@/components/typography/typography";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { HorizontalCarousel } from "@/components/HorizontalCarousel";
import { useCalendly } from "@/lib/features/calendly/context/CalendlyContext";
import DarkGradientCircles from "@/components/DarkGradientCircles";
import MirrorImage from "@/assets/mirror_homepage.png";

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
    className={`w-0 h-0 md:w-3 md:h-3 rounded-full transition-all duration-300 z-[9999] ${active ? `bg-${color} scale-125` : `bg-gray-400 hover:bg-${color}-400`}`}
  />
);
const sections = [
  { id: "hero", color: "white" },
  { id: "features", color: "white" },
  { id: "comparison", color: "teal-950" },
  { id: "benefits", color: "white" },
  { id: "faq", color: "teal-950" },
  { id: "contact", color: "teal-950" },
  { id: "cta", color: "white" },
];

const customer_behaviour_data = [
  {
    icon: robotIcon,
    title: "Innovative Technology",
    description:
      "Adapting state-of-the-art technology that helps in providing realistic results",
  },
  {
    icon: customerConfidenceIcon,
    title: "Customer Confidence",
    description:
      "Reducing customer hesitance to try premium services and increasing business potential",
  },
  {
    icon: barIcon,
    title: "Smart Personalization",
    description:
      "Leveraging data-driven inventory management to recommend products tailored to individual customer attributes",
  },
  {
    icon: consultationIcon,
    title: "Expanding Services",
    description:
      "Engaging in additional services such as product sales, online consultations, and targeted advertisements from the insights gained",
  },
];

type GifData = {
  url: string;
  alt: string;
  text: string;
};

export default function Home() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [activeGifIndex, setActiveGifIndex] = useState(0);
  const { openCalendly } = useCalendly();

  const gifs: GifData[] = [
    {
      url: "https://tms-website.s3.us-east-1.amazonaws.com/home-page-gif/Home+page+section+2_1.gif",
      alt: "Smart Mirror Demo 1",
      text: "Sleek Design"
    },
    {
      url: "https://tms-website.s3.us-east-1.amazonaws.com/home-page-gif/Home+page+section+2_2.gif",
      alt: "Smart Mirror Demo 2",
      text: "Dual-function"
    },
    {
      url: "https://tms-website.s3.us-east-1.amazonaws.com/home-page-gif/Home+page+section+2_3.gif",
      alt: "Smart Mirror Demo 3",
      text: "New age consultation"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveGifIndex((prev) => (prev + 1) % gifs.length);
    }, 5000); // Adjust timing as needed (3000ms = 3s)

    return () => clearTimeout(timer);
  }, [activeGifIndex]);

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

  const handleFaqClick = (key: string) => {
    setActiveFaq(activeFaq === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center flex-col">
      {/* Add scroll spy dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-[9999]">
        {sections.map((section) => (
          <ScrollSpyDot
            key={section.id}
            active={activeSection === section.id}
            color={section.color}
            onClick={() => scrollToSection(section.id)}
          />
        ))}
      </div>

      <Navbar />

      <div
        id="hero"
        className="section-1 w-full flex justify-center items-center bg-black relative px-4 md:px-20"
      >

        <DarkGradientCircles overflowHidden={false} />
        {/* Hero Section with improved styling */}
        <section className="relative min-h-screen md:max-w-[1400px] w-full z-[1000]">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 "></div>

          {/* First Hero Content */}
          <div className="container mx-auto pt-40 pb-20">
            {" "}
            {/* Adjusted padding-top */}
            <div className="mx-auto relative">
              {/* Decorative element */}
              <div className="absolute top-[-100px] right-[-100px] w-[200px] h-[200px] rounded-full blur-[100px]"></div>

              <div className="relative flex gap-20 md:flex-row flex-col">

                <div className="content flex-2 flex flex-col justify-center">

                  <span className="text-white font-medium mb-4 block text-2xl md:text-3xl">
                    WELCOME TO TRY MY STYLE
                  </span>
                  <Typography
                    variant="h1"
                    className="text-white text-5xl md:text-6xl"
                  >
                    See It. Try It. Own It.
                  </Typography>
                  {/* <h1 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight text-white">
                  See It. Try It. Own It.
                  <span className="block text-white mt-2 font-semibold">All with our Smart Mirror</span>
                </h1> */}

                  <Typography
                    variant="h1"
                    className="text-white text-5xl md:text-3xl"
                  >
                    All with our Smart Mirror
                  </Typography>

                  <Typography
                    variant="content"
                    className="text-gray-400 max-w-[600px] mb-8"
                  >
                    Leveraging the strength of <span className="text-[#00A5A5] font-semibold">GenAI</span>, providing personalized and
                    highly realistic Virtual Try-On solutions, catering to Fashion
                    & Beauty Tech Industries.
                  </Typography>

                  {/* <p className="text-xl text-gray-400 max-w-[600px] mb-8 leading-relaxed">
                  Leveraging the strength of GenAI, providing personalized and highly
                  realistic Virtual Try-On solutions, catering to Fashion & Beauty Tech
                  Industries.
                </p> */}
                  <div className="button">

                    <button className="bg-white border-2 border-teal-950 text-teal-950 px-12 py-4 rounded-xl text-3xl font-semibold hover:bg-teal-950 hover:text-white transition-all duration-300 shadow-lg shadow-[#00A5A5]/20 hover:shadow-[#00A5A5]/40 hover:scale-105"
                      onClick={() => openCalendly?.()}>
                      Try Now
                    </button>
                  </div>

                </div>

                <div className="image  flex-1 flex justify-center items-center mt-20">
                  <Image src={MirrorImage} alt="Mirror Image" width={600} height={400} className="md:w-[300px] w-[200px] h-full object-cover " />
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        id="features"
        className="section-1 2 w-full flex justify-center items-center bg-black flex-col min-h-screen relative  px-4 md:px-20"
      >
        <DarkGradientCircles overflowHidden={true} isStraight={false} />

        {/* Rest of your existing hero content with improved styling */}
        <div className="w-[90%] md:max-w-[1400px] w-full mt-20 mb-20 z-[1000]">
          <div className="w-full">
            <div className="mb-20">
              <Typography variant="subheading" className="text-gray-400">
                SMARTER SALONS
              </Typography>
              <Typography variant="h1" className="text-white">
                Style Made Simple.
              </Typography>

              <Typography
                variant="content"
                className="text-gray-400 max-w-[600px]"
              >
                Transform the way you explore and perfect your look. With
                intuitive features designed to make styling effortless.
              </Typography>
            </div>

            {/* Mirror displays with enhanced shadows and effects */}
            <div className="gap-8 justify-center items-center hidden md:flex">
              {gifs.map((gif, index) => (
                <div
                  key={index}
                  className={`relative z-[1] transition-opacity duration-500 ${index === activeGifIndex ? "opacity-100" : "opacity-40"
                    }`}
                >
                  <Image
                    src={gif.url}
                    alt={gif.alt}
                    width={600}
                    height={400}
                    className={`${index === activeGifIndex ? "w-[24rem]" : "w-[18rem]"} h-full rounded-3xl shadow-lg object-cover`}
                  />

                  <Typography variant="subheading" className={`word absolute bottom-5 left-1/2 -translate-x-1/2 text-white w-full text-center text-2xl font-semibold ${index === activeGifIndex ? "opacity-100" : "opacity-0"}`} >
                    {gif.text}
                  </Typography>
                  <div className="absolute inset-0 bg-[#00A5A5]/20 rounded-3xl" />
                </div>
              ))}
            </div>

            <HorizontalCarousel className="md:hidden" color="white">
              {gifs.map((gif, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center transition-opacity duration-500 ${index === activeGifIndex ? "opacity-100" : "opacity-100"
                    }`}
                >
                  <div className="relative">
                    <Image
                      src={gif.url}
                      alt={gif.alt}
                      width={600}
                      height={400}
                      className="w-[18rem] h-full rounded-3xl shadow-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-[#00A5A5]/20 rounded-3xl" />
                    <Typography variant="subheading" className="text-white font-semibold absolute bottom-5 left-1/2 -translate-x-1/2">
                      {gif.text}
                    </Typography>
                  </div>
                </div>
              ))}
            </HorizontalCarousel>
          </div>
        </div>
      </div>


      <div
        id="comparison"
        className="section-3 w-full flex justify-center items-center bg-white min-h-screen relative overflow-hidden md:px-0 z-[150]"
      >
        {/* create two circles of radial gradient and put them in the top left and bottom right */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100"></div>
        <div className="absolute bottom-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100"></div>

        {/* Before vs After Section */}
        <section className="w-[90%] md:max-w-[1400px]  md:p-20 z-[1000]">
          {/* <div className="heading">
            <Typography variant="subheading" className="text-gray-500 text-3xl uppercase font-semibold">  Before vs After</Typography>
          </div> */}
          {/* Row-based Comparison Layout */}
          <div className="space-y-2 md:space-y-8">
            {/* Row 1: Customer Experience */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 items-center">
              <div className="text-right p-6 bg-teal-50/50 rounded-lg">
                <Typography
                  variant="h1"
                  className="text-teal-950 text-2xl font-bold"
                >
                  Before
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Typography
                  variant="h1"
                  className="!mt-2 text-teal-950 text-2xl"
                >
                  VS
                </Typography>
              </div>

              <div className="p-6 bg-teal-50/50 rounded-lg">
                <Typography
                  variant="h1"
                  className="text-teal-950 text-2xl font-bold"
                >
                  After
                </Typography>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 md:gap-4 items-center">
              <div className="text-right p-2 md:p-6 bg-teal-50/50 rounded-lg">
                <Typography
                  variant="content"
                  className="text-gray-600 text-sm md:text-xl"
                >
                  Losing potential revenue on the premium services due to
                  <span className="text-red-500 font-semibold">
                    {" "}
                    customer hesitation
                  </span>
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="rounded-full w-[35px] h-[35px] md:h-[70px] md:w-[70px]  bg-teal-950 flex items-center justify-center">
                  <Image
                    src={Vector4Icon}
                    alt="Customer Experience"
                    width={42}
                    height={42}
                    className="h-[20px] md:h-[42px]"
                  />
                </div>
                <Typography
                  variant="content"
                  className="!mt-2 text-teal-950 text-sm md:text-xl text-center"
                >
                  Customer Experience
                </Typography>
              </div>

              <div className="p-2 md:p-6 bg-teal-50/50 rounded-lg">
                <Typography
                  variant="content"
                  className="text-gray-600 text-sm md:text-xl"
                >
                  Increased customer spending by
                  <span className="text-teal-950 font-semibold">
                    {" "}
                    eliminating hesitation
                  </span>{" "}
                  through try-on
                </Typography>
              </div>
            </div>

            {/* Row 2: Data Utilization */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 items-center">
              <div className="text-right p-2 md:p-6 rounded-lg">
                <Typography
                  variant="content"
                  className="text-gray-600 text-sm md:text-xl"
                >
                  <span className="text-red-500 font-semibold">
                    No data & insights
                  </span>{" "}
                  for hair & skin on the visiting customers
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="rounded-full w-[35px] h-[35px] md:h-[70px] md:w-[70px] bg-teal-950 flex items-center justify-center">
                  <Image
                    src={dataGraphIcon}
                    alt="Data Utilization"
                    width={42}
                    height={42}
                    className="h-[20px] md:h-[42px]"
                  />
                </div>
                <Typography
                  variant="content"
                  className="!mt-2 text-teal-950 text-sm md:text-xl text-center"
                >
                  Data Utilization
                </Typography>
              </div>

              <div className="p-2 md:p-6 rounded-lg">
                <Typography
                  variant="content"
                  className="text-gray-600 text-sm md:text-xl"
                >
                  Leveraging data gained to provide
                  <span className="text-teal-950 font-semibold">
                    {" "}
                    personalized recommendations
                  </span>{" "}
                  & feedback
                </Typography>
              </div>
            </div>

            {/* Row 3: Brand Visibility */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 items-center">
              <div className="text-right p-2 md:p-6 bg-teal-50/50 rounded-lg">
                <Typography
                  variant="content"
                  className="text-gray-600 text-sm md:text-xl"
                >
                  Losing out on social media
                  <span className="text-red-500 font-semibold">
                    {" "}
                    presence
                  </span>{" "}
                  and engagement
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="rounded-full w-[35px] h-[35px] md:h-[70px] md:w-[70px] bg-teal-950 flex items-center justify-center">
                  <Image
                    src={Vector1Icon}
                    alt="Brand Visibility"
                    width={20}
                    height={20}
                    className="h-[20px] md:h-[42px]"
                  />
                </div>
                <Typography
                  variant="content"
                  className="!mt-2 text-teal-950 text-sm md:text-xl text-center"
                >
                  Brand Visibility
                </Typography>
              </div>

              <div className="p-2 md:p-6 bg-teal-50/50 rounded-lg">
                <Typography
                  variant="content"
                  className="text-gray-600 text-sm md:text-xl"
                >
                  <span className="text-teal-950 font-semibold">
                    Gaining social media presence
                  </span>{" "}
                  and word-of-mouth marketing
                </Typography>
              </div>
            </div>

            {/* Row 4: Business Growth */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 items-center">
              <div className="text-right p-2 md:p-6 rounded-lg">
                <Typography
                  variant="content"
                  className="text-gray-600 text-sm md:text-xl"
                >
                  <span className="text-red-500 font-semibold">Low</span>{" "}
                  Average ticket size
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="rounded-full w-[35px] h-[35px] md:h-[70px] md:w-[70px] bg-teal-950 flex items-center justify-center">
                  <Image
                    src={Vector2Icon}
                    alt="Business Growth"
                    width={20}
                    height={20}
                    className="h-[20px] md:h-[42px]"
                  />
                </div>
                <Typography
                  variant="content"
                  className="!mt-2 text-teal-950 text-sm md:text-xl text-center"
                >
                  Business Growth
                </Typography>
              </div>

              <div className="p-2 md:p-6 rounded-lg">
                <Typography
                  variant="content"
                  className="text-gray-600 text-sm md:text-xl"
                >
                  <span className="text-teal-950 font-semibold">Increased</span>{" "}
                  Average ticket size and footfall
                </Typography>
              </div>
            </div>

            {/* Row 5: Market Position */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 items-center">
              <div className="text-right p-2 md:p-6 bg-teal-50/50 rounded-lg">
                <Typography
                  variant="content"
                  className="text-gray-600 text-sm md:text-xl"
                >
                  <span className="text-red-500 font-semibold">
                    No major differentiator
                  </span>{" "}
                  from competition
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="rounded-full w-[35px] h-[35px] md:h-[70px] md:w-[70px] bg-teal-950 flex items-center justify-center">
                  <Image
                    src={Vector3Icon}
                    alt="Market Position"
                    width={20}
                    height={20}
                    className="h-[20px] md:h-[42px]"
                  />
                </div>
                <Typography
                  variant="content"
                  className="!mt-2 text-teal-950 text-sm md:text-xl text-center"
                >
                  Market Position
                </Typography>
              </div>

              <div className="p-2 md:p-6 bg-teal-50/50 rounded-lg">
                <Typography
                  variant="content"
                  className="text-gray-600 text-sm md:text-xl"
                >
                  Transformation into a{" "}
                  <span className="text-teal-950 font-semibold">
                    technology-first salon
                  </span>
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        id="benefits"
        className="section-2 w-full flex justify-center items-center bg-black p-4 md:p-20 min-h-[100vh] relative overflow-hidden "
      >
        <DarkGradientCircles overflowHidden={true} isStraight={false} />
        {/* create two circles of radial gradient and put them in the top left and bottom right */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-500/10 rounded-full blur-[100px] bg-teal-950"></div> */}
        {/* <div className="absolute bottom-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-500/10 rounded-full blur-[100px] bg-teal-950"></div> */}
        <section className="w-[90%] md:max-w-[1400px] w-full z-[1000] flex flex-col items-center justify-center">
          <Typography
            variant="h1"
            className="text-white text-center mb-20 pt-5"
          >
            Changing Customer Behavior
          </Typography>
          <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-[1000px]">
            {/* Innovative Technology Card */}
            {customer_behaviour_data.map((item) => (
              <>
                <div className="bg-gradient-to-br from-[#001A1A] to-[#003333] p-12 rounded-lg hover:from-[#002626] hover:to-[#004040] transition-all duration-300 z-[1] ">
                  <div className="text-[#00A5A5] mb-2">
                    <Image
                      src={item.icon}
                      alt="Innovative Technology"
                      width={50}
                      height={50}
                      className="h-[50px]"
                    />
                  </div>
                  <Typography variant="subheading" className="text-white mb-2 text-sm">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="content"
                    className="text-[#6c9797] leading-relaxed text-xs"
                  >
                    {item.description}.
                  </Typography>
                </div>
              </>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:hidden">
            {customer_behaviour_data.map((item) => (
              <>
                <div className="bg-gradient-to-br from-[#001A1A] to-[#003333] p-4 rounded-lg hover:from-[#002626] hover:to-[#004040] transition-all duration-300 z-[1] ">
                  <div className="text-[#00A5A5] mb-2">
                    <Image
                      src={item.icon}
                      alt="Innovative Technology"
                      width={40}
                      height={40}
                      className="h-[40px]"
                    />
                  </div>
                  <Typography variant="subheading" className="text-white mb-1 text-sm">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="content"
                    className="text-[#6c9797] leading-relaxed text-xs"
                  >
                    {item.description}.
                  </Typography>
                </div>
              </>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <HorizontalCarousel className="h-[600px] hidden">
              {/* Innovative Technology Card */}
              {customer_behaviour_data.map((item) => (
                <>
                  <div className="bg-gradient-to-br from-[#001A1A] to-[#003333] p-14 hover:from-[#002626] hover:to-[#004040] transition-all duration-300 z-[1]">
                    <div className="text-[#00A5A5] mb-4">
                      <Image
                        src={item.icon}
                        alt="Innovative Technology"
                        width={80}
                        height={80}
                        className="h-[80px]"
                      />
                    </div>
                    <Typography
                      variant="subheading"
                      className="text-white mb-4"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="content"
                      className="text-[#4D7C7C] leading-relaxed"
                    >
                      {item.description}
                    </Typography>
                  </div>
                </>
              ))}
              {/* Add other cards here */}
            </HorizontalCarousel>
          </div>
        </section>
      </div>


      <div
        id="faq"
        className="section-4 w-full flex justify-center items-center bg-white p-4 md:p-36 min-h-[50vh] relative "
      >

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

            <div className="space-y-3 flex-3 w-full flex flex-col">
              {Object.entries(faqData).map(([key, data]) => (
                <div key={key} className="w-full">
                  <button
                    className="w-full bg-white hover:bg-gray-200 p-3 shadow-2xl rounded-lg flex justify-between items-center group transition-all duration-300"
                    onClick={() => handleFaqClick(key)}
                  >
                    <div className="w-full h-full text-teal-950 hover:text-white flex justify-between">
                      <Typography
                        variant="content"
                        className="text-left font-semibold"
                      >
                        {data.Question}
                      </Typography>

                      <div className="w-[10px]"></div>

                      <span
                        className={`text-2xl transition-transform duration-300 ${activeFaq === key ? "rotate-45 !text-red-500" : ""}`}
                      >
                        +
                      </span>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all rounded-md mt-2 shadow-2xl duration-300 ${activeFaq === key
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="p-5 text-white bg-teal-950 rounded-b-lg">
                      <Typography
                        variant="content"
                        className="text-left text-white"
                      >
                        {data.Answer}
                      </Typography>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div
        id="contact"
        className="section-5 w-full flex justify-center items-start bg-white p-4 pt-20 md:p-36 relative"
      >
        {/* create two circles of radial gradient and put them in the top left and bottom right */}
        {/* <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100"></div> */}
        {/* <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100"></div> */}

        <div className="md:max-w-[1400px] w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 min-h-[50vh] z-[1000]">
          <div className="flex gap-10 flex-col md:flex-row">
            {/* Left Column - Text and Map */}
            <div className="flex-1">
              <div className="heading flex-1">
                <Typography
                  variant="subheading"
                  className="text-gray-500 text-xl md:text-3xl uppercase font-semibold"
                >
                  Contact Us
                </Typography>
              </div>
              <Typography variant="h1" className="text-teal-950 mb-4 mt4">
                Take the first step towards upscaling your business
              </Typography>
              {/* Map Container */}
            </div>

            {/* Right Column - Contact Form */}
            <div className="flex-1 w-full">
              <form className="space-y-4 md:space-y-8  flex flex-col ">
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="w-full text-3xl bg-transparent border-b-2 border-gray-300 p-3 text-black placeholder-transparent focus:outline-none focus:border-[#00A5A5] peer transition-all duration-300"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder=" "
                    className="w-full text-3xl bg-transparent border-b-2 border-gray-300 p-3 text-black placeholder-transparent focus:outline-none focus:border-[#00A5A5] peer transition-all duration-300"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="w-full text-3xl bg-transparent border-b-2 border-gray-300 p-3 text-black placeholder-transparent focus:outline-none focus:border-[#00A5A5] peer transition-all duration-300"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Reason for contacting
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    placeholder=" "
                    rows={4}
                    className="w-full text-3xl bg-transparent border-b-2 border-gray-300 p-3 text-black placeholder-transparent focus:outline-none focus:border-[#00A5A5] peer transition-all duration-300 resize-none"
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-teal-950 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-[#008585] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <span className="text-lg font-medium">Submit</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>


        </div>
      </div>

      <Footer openCalendly={openCalendly} />
    </div>
  );
}
