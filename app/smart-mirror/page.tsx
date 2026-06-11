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
import WebsiteSmartMirrorPng from "@/assets/mirror_smartmirrorpage.png";
import MirrorImage from "@/assets/mirror_homepage.png";
// import { faqData } from "@/data/faq";
import faqData from "../../assets/json/SmartMirror_Faq.json";
import { useCalendly } from "@/lib/features/calendly/context/CalendlyContext";
import increaseRevenueIcon from "../../assets/icons/increase_revenue.svg";
import upscalingBusinessIcon from "../../assets/icons/upscale_business.svg";
import DarkGradientCircles from "@/components/DarkGradientCircles";

// display and smart mirror images
import displayImage from "../../assets/display.png";
import smartMirrorImage from "../../assets/smart-mirror.png";


import skinAnalyserHW from "@/assets/skin_analyser_hw.jpeg";
import hairAnalyserHW from "@/assets/hair_analyser_hw.jpeg";

// Pilot deployment images
import pilot1 from "@/assets/pilot-deployments/1.jpg";
import pilot2 from "@/assets/pilot-deployments/2.jpg";
import pilot3 from "@/assets/pilot-deployments/3.jpg";
import pilot4 from "@/assets/pilot-deployments/4.jpg";
import pilot5 from "@/assets/pilot-deployments/5.jpg";

// Current operations images
import ops6 from "@/assets/current-operations/6.jpg";
import ops7 from "@/assets/current-operations/7.jpg";
import ops8 from "@/assets/current-operations/8.jpg";
import ops9 from "@/assets/current-operations/9.jpg";
import ops10 from "@/assets/current-operations/10.jpg";
import ops11 from "@/assets/current-operations/11.jpg";
import ops12 from "@/assets/current-operations/12.jpeg";
import ops13 from "@/assets/current-operations/13.png";
// icons for specifications
import { BsDisplay } from "react-icons/bs";
import { FaCamera } from "react-icons/fa6";
import { MdOutlineTouchApp } from "react-icons/md";
import { MdFilterFrames } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";
import { LuListTodo } from "react-icons/lu";

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
  { id: "technical-specifications", color: "white" },
  { id: "deployments", color: "teal-950" },
  { id: "how-it-works", color: "white" },
  { id: "optional-upgrades", color: "teal-950" },
  { id: "faq", color: "teal-950" },
];

const specifications = [
  {
    id: 1,
    icon: BsDisplay,
    title: "Display",
    description: "23\" Full HD with 1920×1080 resolution for crystal clear visuals",
  },
  {
    id: 2,
    icon: FaCamera,
    title: "Camera",
    description: "Standard: 8 MP integrated, Upgrade: 16 MP high-resolution for detailed analysis"
  },
  {
    id: 3,
    icon: MdOutlineTouchApp,
    title: "Touchscreen",
    description: "10-point capacitive touch for smooth and responsive user interactions"
  },
  {
    id: 4,
    icon: MdFilterFrames,
    title: "Mirror Frame",
    description: "Size: 60 cm × 80 cm, Aluminum alloy, wall-mounted, IP65 water & dust-proof with Display Lights in 3 Tones"
  },

  {
    id: 5,
    icon: IoLogoAndroid,
    title: "Operating System",
    description: "Android-based system for reliable performance and easy integration"
  },

  {
    id: 6,
    icon: LuListTodo,
    title: "Additional Features",
    description: "DC 12V input, Wi-Fi Enabled (5G support), Bluetooth 5.0, Dual Speakers, Multiple USB ports for peripherals"
  }
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

const pilotDeployments = [
  { id: 1, image: pilot1, name: "Eternal Salon", location: "Pimpri Chinchwad, Pune, Maharashtra" },
  { id: 2, image: pilot2, name: "Page 3 Luxury Salon", location: "Film Nagar, Hyderabad, Telangana" },
  { id: 3, image: pilot3, name: "Page 3 Luxury Salon", location: "Jubilee Hills, Hyderabad, Telangana" },
  { id: 4, image: pilot4, name: "LOOKS Privé", location: "Malcha Marg, Chanakyapuri, Delhi" },
  { id: 5, image: pilot5, name: "LOOKS Salon", location: "Ambience Mall, Vasant Kunj, Delhi" },
];

const currentOperations = [

  { id: 11, image: ops11, name: "Maletti S.P.A.", location: "Fellegara, Scandiano, Reggio Emilia, Italy" },
  { id: 10, image: ops10, name: "Diona Artisan Salon", location: "Sector 18, Noida, Uttar Pradesh" },
  { id: 7, image: ops7, name: "CLNZ Salon", location: "Mahipalpur, New Delhi" },
  { id: 9, image: ops9, name: "OQ Derm", location: "Kolkata, West Bengal" },
  { id: 8, image: ops8, name: "Cut & Style Salon", location: "RT Nagar, Bengaluru, Karnataka" },
  { id: 13, image: ops13, name: "Luca Piattelli", location: "Safdarjung Enclave, New Delhi" },
  { id: 6, image: ops6, name: "RC Studios", location: "Bairagarh, Bhopal, Madhya Pradesh" },
  {
    id: 12,
    image: ops12,
    name: "La Nova Salon",
    location: "Ahmedabad, Gujarat",
    isUpcoming: true
  },
  { id: 14, image: ops12, name: "Hipster Salon", location: "Thane, Maharashtra", isUpcoming: true },
  { id: 15, image: ops12, name: "Play Salon", location: "Indiranagar, Bengaluru, Karnataka", isUpcoming: true },
  { id: 16, image: ops12, name: "Upcoming", location: "Vuyyuru, Andhra Pradesh", isUpcoming: true },
  { id: 17, image: ops12, name: "Hair Masters Salon", location: "Chandigarh", isUpcoming: true },
  { id: 18, image: ops12, name: "Shivanjali Wellness", location: "Bhavnagar, Gujarat", isUpcoming: true },
  { id: 19, image: ops12, name: "Aks Salon", location: "Darbhanga, Bihar", isUpcoming: true },
  { id: 20, image: ops12, name: "The Little Hair Salon", location: "Viman Nagar, Pune", isUpcoming: true },
];


type DeploymentItem = {
  id: number;
  image: (typeof pilotDeployments)[0]["image"];
  name: string;
  location: string;
  isUpcoming?: boolean;
};

export default function SmartMirror() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const { openCalendly } = useCalendly();
  const [selectedDeployment, setSelectedDeployment] =
    useState<DeploymentItem | null>(null);

  const [activeFaq, setActiveFaq] = useState("");
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const videoClips: VideoClip[] = [
    {
      url: "/gifs/second1.mp4",
      alt: "Smart mirror demo",
      title: "Click"
    },
    {
      url: "/gifs/second2.mp4",
      alt: "Select Hair Style",
      title: "Choose"
    },
    {
      url: "/gifs/second3.mp4",
      alt: "Visualise It",
      title: "Visualize"
    },
    {
      url: "/gifs/second4.mp4",
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


  useEffect(() => {
    if (selectedDeployment) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedDeployment]);

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
                The Future of Interactive Experiences

              </Typography>
              <Typography className="hero-subtitle text-white max-w-2xl">
                Next-generation AI-powered mirror that blends traditional reflection with digital intelligence. Designed for beauty, wellness, fashion, retail, it enables immersive try-ons, advanced analysis, and engaging customer experiences, all in one sleek device.

              </Typography>
            </div>

            {/* underline */}

            <div className="hero-image flex-1 items-centers justify-center flex ">
              <Image
                src={WebsiteSmartMirrorPng}
                width={400}
                height={400}
                alt=""
                className="w-[300px] md:w-[500px] h-full  z-[200]"
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
            What&apos;s in store?
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
                      className="benefit-card-title poppins font-medium text-teal-950 text-start"
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
      <div className=" bg-black w-full flex items-center justify-center relative overflow-hidden" id="technical-specifications">

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
              Technical Specifications
            </Typography>

            <Typography className="how-it-works-subtitle text-gray-300 !mt-4 max-w-4xl text-start" variant={"content"}>
              Our devices comply with CE, FCC, and BIS standards for safety and reliability.
            </Typography>

            {/* Technical Specifications Cards - Same design as Section 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10 mt-4 md:mt-20 md:grid max-w-[1300px] z-[100]">
              {specifications.map((item) => (
                <div key={item.id} className="md:p-10 p-5 w-full rounded-3xl bg-white relative border shadow-lg">
                  <div className="flex flex-row md:flex-row items-center justify-start gap-4">
                    <div className="icon">
                      <item.icon className="text-teal-950 h-10 w-10 md:h-14 md:w-14" />
                    </div>
                    <Typography
                      className="benefit-card-title poppins font-medium text-teal-950 text-start"
                      variant={"subheading"}
                    >
                      {item.title}
                    </Typography>
                  </div>

                  <Typography
                    className="description poppins !mt-2 text-teal-900 text-start"
                    variant={"content"}
                  >
                    {item.description}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="cta-content poppins text-white text-4xl font-medium mt-20 text-start ">
              Looking for a customized solution?
              <br />
              <span className="text-2xl">
                Talk to our team to configure a Smart Mirror that matches your business requirements.
              </span>

            </div>

          </div>
        </div>
      </div>

      <div
        className="w-full bg-white px-4 py-16 md:py-24 md:px-16 relative overflow-hidden flex flex-col items-center"
        id="deployments"
      >
        <div className="absolute top-[-120px] left-[-150px] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] z-[0]" />
        <div className="absolute bottom-[-120px] right-[-150px] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] z-[0]" />

        <div className="max-w-[1400px] w-full z-[10]">
          <Typography className="text-teal-950" variant="h1">
            Our Smart Mirror Deployments
          </Typography>

          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <Typography className="text-teal-950" variant="subheading">
                Current Operations
              </Typography>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {currentOperations.map((item, idx) => (
                <div
                  key={item.id}
                  className={`rounded-2xl overflow-hidden border shadow-lg group relative cursor-pointer ${idx === 0 ? "col-span-2" : ""}`}
                >
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover h-[300px] transition-transform duration-500 group-hover:scale-105"
                    />
                    {
                      item.isUpcoming && (

                        <>

                          <div className="absolute inset-0 bg-yellow-300/20" />
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <span className="bg-yellow-300 text-yellow-900 px-6 py-3 rounded-full font-bold text-lg shadow-xl border-2 border-yellow-400 drop-shadow-lg animate-pulse flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <rect x="5" y="2" width="14" height="18" rx="3" />
                                <path d="M9 21h6" strokeLinecap="round" />
                                <path d="M12 6v6" strokeLinecap="round" />
                                <circle cx="12" cy="15" r="1" fill="currentColor" />
                              </svg>
                              Coming Soon
                            </span>
                          </div>

                        </>
                      )
                    }
                    {
                      !item.isUpcoming && (
                        <div className="absolute inset-0 bg-[#008080]/40" />
                      )
                    }
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-base leading-tight">
                        {item.name}
                      </p>
                      <p className="text-white text-sm mt-1 leading-snug">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>


          {/* ── Pilot Deployments ── */}
          <div className="mt-14">
            <div className="flex items-center gap-4 mb-8">
              <Typography className="text-teal-950" variant="subheading">
                Pilot Deployments
              </Typography>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {pilotDeployments.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden group relative cursor-pointer"
                >
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#008080]/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-base leading-tight">
                        {item.name}
                      </p>
                      <p className="text-white text-sm mt-1 leading-snug">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Current Operations ── */}

        </div>
      </div>
      <div className="bg-black w-full flex items-center justify-center relative overflow-hidden" id="how-it-works">

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
              How it works for salons?
            </Typography>

            <Typography className="how-it-works-subtitle text-gray-300 !mt-4 max-w-4xl text-start" variant={"content"}>
              The simple and user-friendly interface will help the hair stylist and client communicate effectively and take the salon consultation experience to a whole new level.
            </Typography>

            <div className="video-clips justify-between gap-4 mt-20 md:flex hidden">
              <div className="video-clip flex flex-row gap-4 md:gap-5 items-center justify-center">
                {videoClips.map((clip, index) => (
                  <div
                    key={index}
                    className={`video-1 rounded-3xl overflow-hidden relative group transition-opacity duration-500 ${index === activeVideoIndex ? "opacity-100" : "opacity-40"
                      }`}
                  >
                    <video
                      src={clip.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`${index === activeVideoIndex ? "w-[24rem]" : "w-[18rem]"}`}
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
                    className="video-1 rounded-3xl overflow-hidden relative group transition-opacity duration-500"
                  >
                    <video
                      src={clip.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-[18rem]"
                    />
                    <div className="absolute inset-0 bg-teal-950/20 rounded-3xl" />

                    <Typography variant="subheading" className="word absolute bottom-5 left-1/2 -translate-x-1/2 text-white w-full text-center text-2xl font-semibold" >
                      {clip.title}
                    </Typography>
                  </div>
                </div>
              ))}
            </HorizontalCarousel>
          </div>
        </div>
      </div >

      <div
        className="optional-upgrades px-4 py-10 md:p-20 mb-10 relative overflow-hidden w-full bg-white flex flex-col items-center justify-center"
        id="optional-upgrades"
      >
        <div className="heading z-[100] mb-8">
          <Typography
            variant="h1"
            className="font-bold poppins text-center text-teal-950"
          >
            Optional Upgrades
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-[1400px] w-full p-0 md:p-4 z-[100]">
          <div className="hw-card flex flex-col items-center justify-center p-4">
            <div className="image-container w-full max-w-[400px] h-[250px] md:h-[400px] mx-auto mb-4">
              <Image
                src={hairAnalyserHW}
                alt="Skin AnalyserHW"
                width={500}
                height={500}
                className="w-full h-full object-contain z-[100]"
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </div>
            <div className="content">
              <Typography
                variant="subheading"
                className="font-medium poppins text-center"
              >
                Microscopic Skin & Hair Analysis
              </Typography>
              <Typography
                variant="content"
                className="text-center max-w-xl mx-auto"
              >
                High-precision diagnosis of pores, pigmentation, and fine lines.
                Scalp imaging for early thinning, dandruff, and density checks.
              </Typography>
            </div>
          </div>
          <div className="hw-card flex flex-col items-center justify-center p-4">
            <div className="image-container w-full max-w-[400px] h-[250px] md:h-[400px] mx-auto mb-4">
              <Image
                src={skinAnalyserHW}
                alt="Hair Analyser HW"
                width={500}
                height={500}
                className="w-full h-full object-contain"
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </div>
            <div className="content">
              <Typography
                variant="subheading"
                className="font-medium poppins text-center"
              >
                Skin Hydration Sensor
              </Typography>
              <Typography
                variant="content"
                className="text-center max-w-xl mx-auto"
              >
                Seamlessly connects with the Smart Mirror to measure skin moisture levels in real time.
                Provides insights for skincare recommendations and progress tracking.
              </Typography>
            </div>
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
                Smart Mirror
                <br />
                Hardware
                <br />
                FAQs.
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

      {/* Deployment Image Lightbox */}
      {selectedDeployment && (
        <div
          className="fixed  inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedDeployment(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          {/* Dialog */}
          <div
            className="relative max-w-4xl h-[60vh]  z-10  bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors duration-200"
              onClick={() => setSelectedDeployment(null)}
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Full image */}
            <div className="w-full">
              <Image
                src={selectedDeployment.image}
                alt={selectedDeployment.name}
                fill
                className="object-contain h-[60vh]"
                sizes="w-full h-full"
                priority
              />
            </div>

            {/* Info footer */}
            <div className="p-4 md:p-6 bg-white">
              <p className="text-teal-950 font-semibold text-lg md:text-xl leading-tight">
                {selectedDeployment.name}
              </p>
              <p className="text-gray-500 text-sm md:text-base mt-1">
                {selectedDeployment.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </div >
  );
}
