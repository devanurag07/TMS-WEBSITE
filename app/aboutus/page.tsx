"use client"
import Image from "next/image";
import '../index.css';
import backgroundImg from "../../assets/background2.png";
import { Navbar } from "@/components/layout/navbar";
// import { Footer } from "@/components/layout/footer";
// import targetIcon from "../../assets/icons/target_icon.svg";
// import eyeIcon from "../../assets/icons/eye_icon.svg";
import { Typography, } from "@/components/typography/typography";
import AmarpalImage from "../../assets/images/team/amarpal.png";
import DhruvImage from "../../assets/images/team/dhruv.png";
import YuvrajImage from "../../assets/images/team/yuvraj.png";
// incubators images
import CIIFImage from "../../assets/images/incubators/CIIF.png";
import BITSImage from "../../assets/images/incubators/BITS.png";
import GLBCRIIMAGE from "../../assets/images/incubators/GLBCRI.png";
import IIMKImage from "../../assets/images/incubators/IIMK.png";
import PIEDSImage from "../../assets/images/incubators/PIEDS.png";
import SPTBiImage from "../../assets/images/incubators/SPTBi.png";
// supported by images
import MEITYImage from "../../assets/images/supported_by/MEITY.png";
import MSMEImage from "../../assets/images/supported_by/MSME.png";
import NidhiPrayasImage from "../../assets/images/supported_by/Nidhi Prayas.png";
import StartInUPImage from "../../assets/images/supported_by/StartinUP.jpeg";
import StartupIndiaImage from "../../assets/images/supported_by/StartupIndia.png";
import StartUpIndiaSeedImage from "../../assets/images/supported_by/startupindia_seed.jpg";

// icons for journey
import { MdDeveloperBoard, MdFaceRetouchingNatural } from "react-icons/md"; //#1
import { FaUserCheck } from "react-icons/fa"; //#2
import { GiJumpAcross } from "react-icons/gi"; //#3
import { MdPrecisionManufacturing } from "react-icons/md"; //#4
import { VscMirror } from "react-icons/vsc"; //#5
import { FaTools } from "react-icons/fa"; //#6
import { FaHammer } from "react-icons/fa"; //#7
import { FaNewspaper } from "react-icons/fa6"; //#8
import { FaCheckToSlot } from "react-icons/fa6"; //#9
import { GiMirrorMirror } from "react-icons/gi"; //#10
import { IoIosPeople } from "react-icons/io"; //#11
import { IoMapSharp } from "react-icons/io5"; //#12
import { IoRocket } from "react-icons/io5"; //#13

import { useState, useEffect } from 'react';
import Footer from "@/components/layout/footer";
import faqData from "../../assets/json/TryMyStyle_FAQ.json";
import AboutUsImage from "../../assets/about_us_hero.svg";
import { useCalendly } from "@/lib/features/calendly/context/CalendlyContext";
import DarkGradientCircles from "@/components/DarkGradientCircles";
import blog1Image from "../../assets/blog/blog_1.png";
import blog2Image from "../../assets/blog/blog_2.jpg";
import blog3Image from "../../assets/blog/blog_3.jpeg";
import blog4Image from "../../assets/blog/blog_4.jpeg";
import { RocketIcon } from "lucide-react";
import { color } from "three/tsl";
import Link from "next/link";


// featured by 
import featuredBy1Image from "../../assets/featured/featured_1.jpeg";
import featuredBy2Image from "../../assets/featured/featured_2.jpeg";
import featuredBy3Image from "../../assets/featured/featured_3.jpeg";
import featuredBy4Image from "../../assets/featured/featured_4.jpeg";

// Location markers data
const locations = [
  {
    name: "Delhi",
    coordinates: [77.2090, 28.6139] as [number, number],
    description: "National Capital Region"
  },
  {
    name: "Bhopal",
    coordinates: [77.4126, 23.2599] as [number, number],
    description: "Madhya Pradesh"
  },
  {
    name: "Hyderabad",
    coordinates: [78.4867, 17.3850] as [number, number],
    description: "Telangana"
  }
];


// IndiaMap Component with fallback
const IndiaMap = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Fallback to SVG-based India map for better reliability */}
      <div className="relative bg-white rounded-2xl p-8 shadow-lg">
        <svg
          viewBox="0 0 800 600"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Detailed India Map Outline */}
          <path
            d="M158 102c12-8 28-12 45-8 15 3 28 8 42 15l35 18c18 10 35 22 48 38 8 10 14 22 16 35 2 15-2 30-8 43-8 18-20 34-28 52-5 12-8 25-6 38 2 10 8 18 16 24 12 8 26 12 40 18 20 8 38 20 52 36 8 10 14 22 12 35-2 15-12 28-24 38-15 12-33 20-52 25-25 6-51 8-76 4-22-4-43-12-60-25-12-8-22-18-28-30-8-15-10-32-8-48 2-20 8-39 18-56 8-14 18-27 24-42 4-10 6-21 4-32-2-8-8-15-16-18-12-5-25-5-37-2-18 4-35 12-48 24-10 8-18 18-22 30-5 15-4 31 2 45 8 18 22 33 38 44 20 14 43 22 66 26 28 5 57 4 85-2 24-5 47-14 66-28 12-8 22-18 28-30 8-15 10-32 6-48-5-20-16-38-30-53-18-18-40-32-64-40-15-5-31-8-46-6-12 2-23 8-30 18-5 8-6 18-4 27 2 8 8 15 16 18 12 5 25 2 36-4 8-5 14-12 16-21 2-8 0-17-5-24-8-10-20-15-32-15z"
            fill="#e5f3f2"
            stroke="#0f766e"
            strokeWidth="3"
            className="hover:fill-teal-100 transition-colors duration-300"
          />

          {/* More detailed India boundary */}
          <path
            d="M300 80c25 0 50 5 73 15 20 8 38 20 53 35 12 12 22 26 28 42 5 15 6 31 4 47-2 18-8 35-18 50-12 18-28 33-46 45-22 15-47 25-73 30-30 6-61 6-91 0-26-5-51-15-72-30-18-12-34-27-46-45-10-15-16-32-18-50-2-16-1-32 4-47 6-16 16-30 28-42 15-15 33-27 53-35 23-10 48-15 73-15z"
            fill="none"
            stroke="#0f766e"
            strokeWidth="2"
            opacity="0.3"
          />

          {/* Delhi Marker */}
          <g>
            <circle cx="350" cy="200" r="10" fill="#dc2626" className="animate-pulse">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="350" cy="200" r="20" fill="#dc2626" opacity="0.3" className="animate-ping" />
            <text x="368" y="205" className="text-base font-bold fill-teal-950" style={{ fontSize: '16px' }}>Delhi</text>
          </g>

          {/* Bhopal Marker */}
          <g>
            <circle cx="380" cy="320" r="10" fill="#dc2626" className="animate-pulse">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="0.7s" />
            </circle>
            <circle cx="380" cy="320" r="20" fill="#dc2626" opacity="0.3" className="animate-ping" />
            <text x="398" y="325" className="text-base font-bold fill-teal-950" style={{ fontSize: '16px' }}>Bhopal</text>
          </g>

          {/* Hyderabad Marker */}
          <g>
            <circle cx="420" cy="420" r="10" fill="#dc2626" className="animate-pulse">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1.4s" />
            </circle>
            <circle cx="420" cy="420" r="20" fill="#dc2626" opacity="0.3" className="animate-ping" />
            <text x="438" y="425" className="text-base font-bold fill-teal-950" style={{ fontSize: '16px' }}>Hyderabad</text>
          </g>

          {/* Decorative elements */}
          <circle cx="200" cy="150" r="2" fill="#0f766e" opacity="0.4" />
          <circle cx="600" cy="200" r="2" fill="#0f766e" opacity="0.4" />
          <circle cx="550" cy="400" r="2" fill="#0f766e" opacity="0.4" />
          <circle cx="250" cy="450" r="2" fill="#0f766e" opacity="0.4" />
        </svg>

        {/* Connection lines between cities */}
        <svg
          viewBox="0 0 800 600"
          className="w-full h-auto absolute inset-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Delhi to Bhopal */}
          <line x1="350" y1="200" x2="380" y2="320" stroke="#0f766e" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" />
          </line>
          {/* Bhopal to Hyderabad */}
          <line x1="380" y1="320" x2="420" y2="420" stroke="#0f766e" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" begin="1s" />
          </line>
        </svg>
      </div>
    </div>
  );
};
const developmentTimeline = [
  {
    month: "Dec",
    year: "2022",
    icon: <MdFaceRetouchingNatural className="text-teal-950 w-16 h-16 md:w-24 md:h-24" />,
    iconWhite: <MdFaceRetouchingNatural className="text-white w-16 h-16 md:w-24 md:h-24" />,
    title: "Conceptualization Stage",
    points: [
      "Started with the concept",
      "Customer Surveys",
      "Funded by PIEDS & CIIF"
    ]
  },
  {
    month: "May",
    year: "2023",
    icon: <MdDeveloperBoard className="text-teal-950 w-16 h-16 md:w-24 md:h-24" />,
    iconWhite: <MdDeveloperBoard className="text-white w-16 h-16 md:w-24 md:h-24" />,
    title: "Product Development",
    points: [
      "Improved accuracy & speed",
      "Software Alpha Testing",
      "Built Gen 1 Smart Mirror"
    ]
  },
  {
    month: "Jan",
    year: "2024",
    icon: <GiJumpAcross className="text-teal-950 w-16 h-16 md:w-24 md:h-24" />,
    iconWhite: <GiJumpAcross className="text-white w-16 h-16 md:w-24 md:h-24" />,
    title: "Product Market Launch",
    points: [
      "Smart Mirror Patent Granted",
      "MVP Launch & Beta Testing",
      "Pilot at Page3 & LOOKS Salon"
    ]
  },
  {
    month: "Jan",
    year: "2025",
    icon: <RocketIcon className="text-teal-950 w-16 h-16 md:w-24 md:h-24" />,
    iconWhite: <RocketIcon className="text-white w-16 h-16 md:w-24 md:h-24" />,
    title: "Expand Service Offerings",
    points: [
      "Develop New Hardware",
      "Virtual Try-on For New Industries",

    ]
  }
]


const ScrollSpyDot = ({ active, onClick, color }: { active: boolean; onClick: () => void; color: string }) => (

  <button
    onClick={onClick}
    className={`w-0 h-0 md:w-3 md:h-3 rounded-full transition-all duration-300 ${active ? `bg-${color} scale-125` : `bg-gray-400 hover:bg-${color}-400`
      }`}
  />
);

// const sections = [
//   { id: 'hero', color: 'white' },
//   { id: 'features', color: 'teal-950' },
//   { id: 'comparison', color: 'white' },
//   { id: 'benefits', color: 'teal-950' },
//   { id: 'faq', color: 'white' },
//   { id: 'contact', color: 'teal-950' },
//   { id: 'cta', color: 'white' }
// ];

// Add this new component for the timeline visualization
const DevelopmentTimeline = () => {
  return (
    <div className="bg-black pt-40 rounded-lg w-full lg:px-0 px-12">
      <div className="z-[200] relative">
        <Typography className="text-white text-2xl md:text-3xl mb-10 md:mb-20 text-center z-[200] " variant={"h1"}>Our Journey So Far</Typography>
      </div>

      <div className="relative pb-24 md:pb-48 flex flex-col items-center justify-center">
        {/* Dashed timeline line */}
        <div
          className="absolute top-[80px] md:top-[259px] left-0 right-0 border-t border-dashed border-gray-600 "
          style={{ borderWidth: '4px' }}
        />
        {/* Timeline points */}

        <div className="max-w-[1400px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8">
            {developmentTimeline.map((point, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex flex-col items-center gap-1 md:gap-2">
                  <Typography className="text-white font-medium !text-5xl" variant="subheading">
                    {point.year}
                  </Typography>
                </div>

                <div className="vector -translate-y-2 z-[100]">
                  {/* Timeline line with circle */}
                  <div className="flex flex-col items-center my-4 md:my-8">
                    <div className="h-16 md:h-32 w-[2px] bg-gray-600 relative">
                      <div className="w-2 h-2 rounded-full bg-white translate-x-[-3px]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex  flex-col items-center md:items-start -translate-y-10 z-[100]">
                    <div className="flex items-center justify-center w-full">
                      <div className="w-10 h-10 md:w-32 md:h-32 rounded-full bg-white mb-4 md:mb-8 flex items-center justify-center">
                        {point.icon}
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center bg-gradient-to-br from-[#001A1A] to-[#003333] backdrop-blur-sm rounded-xl p-6 shadow-lg shadow-black/20 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 h-[30vh]">
                      <Typography variant="subheading" className="text-white mb-4 font-medium bg-clip-text">
                        {point.title}
                      </Typography>
                      <ul className="text-white/90 !mt-0 leading-tight text-start list-disc pl-4">
                        {point.points.map((point, i) => (
                          <li key={i} className="mb-1">
                            <Typography variant="content" className="text-white/90 !mt-0 leading-tight text-start">
                              {point}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export default function AboutUs() {
  const { openCalendly } = useCalendly();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [showJourney, setShowJourney] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const sections = [
    { id: 'hero', color: 'white' },
    { id: 'story', color: 'teal-950' },
    { id: 'timeline', color: 'white' },
    { id: 'team', color: 'teal-950' },
    { id: 'blogs', color: 'white' },
    { id: 'faq', color: 'teal-950' },
    { id: 'cta', color: 'white' }
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

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
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Disconnect existing observations
    observer.disconnect();

    // Observe all current sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [showJourney]);

  const handleFaqClick = (key: string) => {
    setActiveFaq(activeFaq === key ? null : key);
  };

  const journeyContent = [
    {
      num: 1,
      title: "Inspiration for the Virtual Try-on",
      desc: "Started with the concept of the smart mirror, funded by PIEDS & CIIF.",
      date: "December 2022",
      icon: <MdFaceRetouchingNatural className="text-white w-16 h-16 md:w-24 md:h-24" />
    },
    {
      num: 2,
      title: "Beginning User Testing",
      desc: "Developed the initial software models for virtual hairstyling, focusing on reducing processing time and expanding functionality.",
      date: "May 2023",
      icon: <FaUserCheck className="text-white w-16 h-16 md:w-24 md:h-24" />
    },
    {
      num: 3,
      title: "A Major Leap",
      desc: "Improved Tech stack to process images in 4 mins with new features and optimizations.",
      date: "July 2023",
      icon: <GiJumpAcross className="text-white w-16 h-16 md:w-24 md:h-24" />
    },
    {
      num: 4,
      title: "Prototyping",
      desc: "Started working on the concept of Smart Mirror for Hair Salons. Patent filed in India. Received Funding from SP-TBI.",
      date: "September 2023",
      icon: <MdPrecisionManufacturing className="text-white w-16 h-16 md:w-24 md:h-24" />
    },
    {
      num: 5,
      title: "Built Smart Mirror Version 1",
      desc: "Noticed the shortcomings of bulky design and non-touch screen.",
      date: "December 2023",
      icon: <VscMirror className="text-white w-16 h-16 md:w-24 md:h-24" />
    },
    {
      num: 6,
      title: "Further Improvements",
      desc: "Worked on dedicated UI for Smart Mirror and added provision for lights & peripherals with the Mirror.",
      date: "February 2024",
      icon: <FaTools className="text-white w-16 h-16 md:w-24 md:h-24" />
    },
    {
      num: 7,
      title: "Fabrication",
      desc: "Produced a functional prototype with enhanced portability and integrated power management.",
      date: "March 2024",
      icon: <FaHammer className="text-white w-16 h-16 md:w-24 md:h-24" />
    },
    {
      num: 8,
      title: "Patent Granted",
      desc: "Patented the smart mirror in India",
      date: "June 2024",
      icon: <FaNewspaper className="text-white w-16 h-16 md:w-24 md:h-24" />
    },
    {
      num: 9,
      title: "Testing MVP",
      desc: "Started Alpha Testing with Eternals Salon in Pune.",
      date: "July 2024",
      icon: <FaCheckToSlot className="text-white w-16 h-16 md:w-24 md:h-24" />
    },
    {
      num: 10,
      title: "Commercially Deployable Model",
      desc: "Presented for pilot testing, addressing previous hardware limitations.",
      date: "September 2024",
      icon: <GiMirrorMirror className="text-white w-16 h-16 md:w-24 md:h-24" />
    },
    {
      num: 11,
      title: "Beta Testing",
      desc: "Started Pilot Testing with Page3 Salons in Hyderabad",
      date: "October 2024",
      icon: <IoIosPeople className="text-white w-16 h-16 md:w-24 md:h-24" />
    },
    {
      num: 12,
      title: "Expanding Presence",
      desc: "Started Pilot Testing with LOOKS Salon in New Delhi",
      date: "December 2024",
      icon: <IoMapSharp className="text-white w-16 h-16 md:w-24 md:h-24" />
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center flex-col relative">
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-[1000]">
        {sections.map((section) => (
          <ScrollSpyDot
            key={section.id}
            active={activeSection === section.id}
            onClick={() => scrollToSection(section.id)}
            color={section.color === 'white' ? 'white' : 'teal-950'}
          />
        ))}
      </div>

      <Navbar />

      <div id="hero" className="section-1 w-full flex justify-center items-center bg-black relative overflow-hidden">
        <Image src={backgroundImg} alt="background" className="absolute top-0 left-0 w-full h-full md:object-cover z-[100]" />
        <div className="max-w-[1400px] p-4  lg:p-8 2xl:p-0  w-full min-h-screen flex flex-col md:flex-row items-center justify-start z-[200] px-4 mt-20 md:mt-0">
          <div className="py-10 md:py-0 md:flex-1">
            <Typography variant="h1" className="text-white mb-6 text-center md:text-left">
              Know us before you believe us
            </Typography>
            <Typography variant="content" className="text-gray-400 mb-8 text-center md:text-left">
              Try My Style revolutionizes the hair styling industry by aligning hairstylists’ expertise with customers’ vision through cutting-edge technology, empowering salons to regain business and customers to explore confidently.
            </Typography>
          </div>
          <div className="flex justify-center items-center md:flex-1">
            {/* Add your 3D model or image here */}
            <Image
              src={AboutUsImage}
              alt="Business People"
              width={300}
              height={200}
              className="object-contain h-full md:w-[90%]"
            />
          </div>
        </div>
      </div>

      <div id="story" className="section-2 w-full flex justify-center items-center bg-white relative z-[100] ">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100 z-[100]"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100 z-[100]"></div>

        <div className="max-w-[1400px] w-full py-20 md:py-32 px-4 md:px-20 min-h-screen">
          <Typography variant="h1" className="text-black mb-12 text-center">Our Story</Typography>
          <Typography variant="content" className="text-gray-600 mb-20 text-center">
            We are a team of 3 engineering graduates from BITS Pilani, working towards revolutionizing the hair styling industry. Our venture, Try My Style, is here to fill the gap between hairstylists&apos; comprehension and customers&apos; imagination, giving a technological uplift to the industry. Our product mitigates the customers&apos; reluctance to try high-ticket products/services and hence helps salons regain potential business. We have been putting our day-and-night for the past year and are confident that the technology will prove to be a great stride in the right direction.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className=" h-40 w-40 bg-teal-950 rounded-2xl flex items-center justify-center mx-auto mb-8">
                {/* <Image src={targetIcon} alt="Mission" width={100} height={100} /> */}
                <svg width="67" height="66" viewBox="0 0 67 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.5 34L47.5 19" stroke="#ffffff" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M65.5 10H56.5V1L47.5 10V19H56.5L65.5 10Z" stroke="#ffffff" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M33 48C41.0081 48 47.5 41.5081 47.5 33.5C47.5 25.4919 41.0081 19 33 19C24.9919 19 18.5 25.4919 18.5 33.5C18.5 41.5081 24.9919 48 33 48Z" stroke="#ffffff" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M58.7308 17.3077C61.8308 22.0769 63.5 27.8 63.5 34C63.5 51.1692 49.6692 65 32.5 65C15.3308 65 1.5 51.1692 1.5 34C1.5 16.8308 15.3308 3 32.5 3C38.7 3 44.4231 4.66923 49.1923 7.76923" stroke="#ffffff" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <Typography variant="subheading" className="text-black mb-4">Mission</Typography>
              <Typography variant="content" className="text-gray-600 leading-relaxed">
                To deliver AI-powered, Smart Mirror solutions that provide personalised hairstyle, skin, and hair analysis, along with product recommendations, while enabling salons and retailers to enhance engagement and revenue.              </Typography>
            </div>
            <div className="text-center  p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className=" h-40 w-40 bg-teal-950 rounded-2xl flex items-center justify-center mx-auto mb-8">
                {/* <Image src={eyeIcon} alt="Vision" width={100} height={100} /> */}

                <svg width="115" height="64" viewBox="0 0 115 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path strokeWidth="4" d="M113.111 27.975C112.87 27.6889 107.083 20.8845 97.3168 13.9973C88.2621 7.61175 73.9639 0 57.2697 0C40.5756 0 26.2773 7.61175 17.2226 13.9973C7.4561 20.8849 1.66961 27.6889 1.428 27.9752C-0.476 30.2325 -0.476 33.768 1.428 36.025C1.66938 36.3111 7.4561 43.1155 17.2226 50.0027C26.2775 56.3883 40.5756 64 57.2697 64C73.9639 64 88.2621 56.3883 97.3168 50.0027C107.083 43.1151 112.87 36.3111 113.111 36.025C115.016 33.768 115.016 30.2325 113.111 27.975ZM110.281 33.636C110.225 33.7029 104.503 40.4193 95.0992 47.0347C86.4997 53.0847 72.9559 60.2967 57.2695 60.2967C41.5829 60.2967 28.0393 53.0847 19.4398 47.0347C10.0364 40.4193 4.31454 33.7031 4.25816 33.6364C3.5226 32.7649 3.52283 31.2354 4.25772 30.364C4.31454 30.2971 10.0364 23.5807 19.4398 16.9653C28.039 10.9153 41.5831 3.7033 57.2695 3.7033C72.9561 3.7033 86.4997 10.9153 95.0992 16.9653C104.503 23.5807 110.224 30.2969 110.281 30.3633C111.016 31.2354 111.016 32.7649 110.281 33.636Z" fill="#ffffff" />
                  <path strokeWidth="4" d="M57.2721 6.93945C43.4533 6.93945 32.2109 18.1818 32.2109 32.0008C32.2109 45.8199 43.4531 57.0622 57.2721 57.0622C71.0909 57.0622 82.3333 45.8199 82.3333 32.0008C82.3333 18.1818 71.0907 6.93945 57.2721 6.93945ZM57.2721 53.3587C45.4955 53.3587 35.9145 43.7776 35.9145 32.0008C35.9145 20.2241 45.4953 10.643 57.2721 10.643C63.0195 10.643 68.2429 12.9255 72.086 16.631C70.9878 15.8668 69.6549 15.4176 68.2187 15.4176C66.1373 15.4176 64.2727 16.3599 63.0264 17.8393C61.2076 17.1017 59.2481 16.7154 57.2719 16.7154C48.8434 16.7154 41.9864 23.5723 41.9864 32.0008C41.9864 40.4294 48.8436 47.2863 57.2719 47.2863C65.7002 47.2863 72.5574 40.4294 72.5574 32.0008C72.5574 30.5845 72.3625 29.1966 71.984 27.8539C73.8059 26.6347 75.0081 24.5591 75.0081 22.2072C75.0081 21.0428 74.7133 19.9464 74.1945 18.9876C76.9736 22.5932 78.6291 27.107 78.6291 32.0006C78.6295 43.7774 69.0487 53.3587 57.2721 53.3587ZM68.2189 28.9971C68.2988 28.9971 68.3778 28.9937 68.4567 28.9913C68.7187 29.9664 68.8543 30.9736 68.8543 32.0011C68.8543 38.3873 63.6586 43.5832 57.2721 43.5832C50.8858 43.5832 45.6899 38.3876 45.6899 32.0011C45.6899 25.6146 50.8856 20.4189 57.2721 20.4189C58.7231 20.4189 60.1622 20.6923 61.5023 21.2169C61.4548 21.5404 61.4291 21.871 61.4291 22.2077C61.4291 25.951 64.4749 28.9971 68.2189 28.9971ZM68.2189 25.2936C66.5169 25.2936 65.1326 23.9092 65.1326 22.2072C65.1326 20.5055 66.5169 19.1209 68.2189 19.1209C69.9209 19.1209 71.3053 20.5053 71.3053 22.2072C71.305 23.9092 69.9205 25.2936 68.2189 25.2936Z" fill="#ffffff" />
                </svg>
              </div>
              <Typography variant="subheading" className="text-black mb-4">Vision</Typography>
              <Typography variant="content" className="text-gray-600 leading-relaxed">
                To transform beauty and fashion retail into immersive, data-driven digital experiential hubs enabling personalised style discovery across hair, skin, beauty, nails, fashion, and jewellery globally.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="jounery-1-laptop-view w-full bg-black items-center justify-center min-h-screen hidden lg:flex relative " id="timeline">
        <DarkGradientCircles overflowHidden={true} isStraight={false} />
        <div className="max-w-[] w-full pt-16 md:pt-0">
          <DevelopmentTimeline />
        </div>
        {/* Show More Button */}
        {!showJourney && (
          <div className="w-full flex cursor-pointer  justify-center items-center absolute bottom-[-20px] md:bottom-[-40px] z-[200] left-1/2 -translate-x-1/2">
            <button
              onClick={() => { }}
              className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-teal-950 border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-900"
            >
              <svg
                className="w-8 h-8 md:w-12 md:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div id="timeline" className="sub-section-1 bg-black min-h-screen justify-center items-center relative flex w-full lg:hidden">
        <Image src={backgroundImg} alt="background" className="absolute top-0 left-0 w-full h-full object-cover z-[100]" />

        <div className="max-w-[1400px] w-full py-16 px-4 md:px-20 min-h-screen relative z-[200]">
          <Typography variant="h1" className="text-white mb-12 text-center md:text-left">
            Our Journey<br />So Far
          </Typography>

          <div className="content relative flex flex-col gap-4 ">
            {developmentTimeline.map((item, index) => (
              <div className="md:p-10 p-5 w-full r bg-gradient-to-br from-[#001A1A] to-[#003333] backdrop-blur-sm rounded-xl p-6 shadow-lg shadow-black/20 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30" key={index}>
                <div className="flex flex-row md:flex-row items-center justify-start gap-4">
                  <div className="icon">
                    {item.iconWhite}
                  </div>
                  <div className="content">
                    <Typography variant="subheading" className="text-white font-bold">
                      {item.year}
                    </Typography>
                    <Typography
                      className="benefit-card-title mt-2 poppins font-medium text-white text-start"
                      variant={"subheading"}
                    >
                      {item.title}
                    </Typography>
                    <ul className="text-white/90 !mt-0  text-start  !list-disc pl-5">
                      {item.points.map((point, i) => (
                        <li key={i}>
                          <Typography variant="content" className="text-white/90 !mt-0 leading-tight text-start">
                            {point}
                          </Typography>
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        {!showJourney && (
          <div className="w-full flex cursor-pointer  justify-center items-center absolute bottom-[-20px] md:bottom-[-40px] z-[200] left-1/2 -translate-x-1/2">
            <button
              onClick={() => { }}
              className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-teal-950 border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-900"
            >
              <svg
                className="w-8 h-8 md:w-12 md:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      {/* Journey Sections */}
      {false && (
        <>

          <div id="journey-2" className="sub-section-2 bg-white min-h-screen flex justify-center items-center relative overflow-hidden w-full z-[100]">

            <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100 z-[100]"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100 z-[100]"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-400/20"
              style={{
                clipPath: "path('M 0,0 C -30,25 30,75 0,100')", // Inverted S-curve
                animation: "flow 3s linear infinite",
                transform: "translateX(-50%)"
              }}></div>
            <div className="max-w-[1400px] w-full py-16  px-4 md:px-20 min-h-screen z-[200]">
              <div className="content relative">
                {journeyContent.slice(0, 6).map((milestone, index) => (
                  <JourneyCard key={index} {...milestone} index={index} lightTheme={true} start={index == 0} />
                ))}
              </div>
            </div>
          </div>

          <div id="journey-3" className="sub-section-3 bg-black min-h-screen flex justify-center items-center relative w-full">
            <Image src={backgroundImg} alt="background" className="absolute top-0 left-0 w-full h-full object-cover z-[100]" />

            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-400/20"
              style={{
                clipPath: "path('M 0,0 C 30,25 -30,75 0,100')", // Back to original S-curve
                animation: "flow 3s linear infinite",
                transform: "translateX(-50%)"
              }}></div>
            <div className="max-w-[1400px] w-full py-16  px-4 md:px-20 min-h-screen z-[200]">
              <div className="content relative">
                {journeyContent.slice(6, 12).map((milestone, index) => (
                  <JourneyCard key={index} {...milestone} index={index} start={index == 0} offset={0} />
                ))}
              </div>
            </div>

            {/* Show More Button */}
            {showJourney && (
              <div className=" w-full flex justify-center items-center absolute bottom-[-20px] md:bottom-[-40px] z-[250] left-1/2 -translate-x-1/2">
                <button
                  onClick={() => { }}
                  className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-teal-950 border-4 border-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-900"
                >
                  <svg
                    className="w-8 h-8 md:w-12 md:h-12 text-white rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </>
      )}
      <div id="team" className="section-4 w-full flex justify-center items-center bg-white z-[100] ">
        <div className="max-w-[1400px] w-full py-32 px-10 min-h-screen">
          <Typography variant="h1" className="text-black mb-0 text-center">
            Team
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {/* Team Member Cards */}
            <div className="flex items-center justify-start gap-5 bg-white rounded-lg p-4 shadow-lg">
              <div className="image-wrapper">
                <Image
                  src={AmarpalImage}
                  alt="Amarpal Singh"
                  width={100}
                  height={100}
                  className="rounded-2xl mx-auto mb-4"
                />
              </div>
              <div className="content">
                <Typography variant="content" className="text-teal-950 text-sm">Co-Founder | Technology</Typography>
                <Typography variant="subheading" className="text-teal-950 mt-2">Amarpal Singh</Typography>
                <div className="social-icons mt-2 flex gap-2">
                  <a href="https://www.linkedin.com/in/amarpal-singh-2501/" className="text-teal-950 hover:text-teal-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href="mailto:amarpal@trymystyle.co.in" className="text-teal-950 hover:text-teal-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-5 bg-white rounded-lg p-4 shadow-lg">
              <div className="image-wrapper">
                <Image
                  src={DhruvImage}
                  alt="Dhruv"
                  width={100}
                  height={100}
                  className="rounded-2xl mx-auto mb-4"
                />
              </div>
              <div className="content">
                <Typography variant="content" className="text-teal-950 text-sm">Co-Founder | Operations</Typography>
                <Typography variant="subheading" className="text-teal-950 mt-2">Dhruv Gupta</Typography>
                <div className="social-icons mt-2 flex gap-2">
                  <a href="https://www.linkedin.com/in/dhruv-gupta-008568188/" className="text-teal-950 hover:text-teal-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href="mailto:dhruvguptaa26@gmail.com" className="text-teal-950 hover:text-teal-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start gap-5 bg-white rounded-lg p-4 shadow-lg">
              <div className="image-wrapper">
                <Image
                  src={YuvrajImage}
                  alt="Yuvraj"
                  width={100}
                  height={100}
                  className="rounded-2xl mx-auto mb-4"
                />
              </div>
              <div className="content">
                <Typography variant="content" className="text-teal-950 text-sm">Co-Founder | Strategy</Typography>
                <Typography variant="subheading" className="text-teal-950 mt-2">Yuvraj Singh</Typography>
                <div className="social-icons mt-2 flex gap-2">
                  <a href="https://www.linkedin.com/in/yuvraj-singh-sekhon-a0548a1b1/" className="text-teal-950 hover:text-teal-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href="mailto:ysekhon02@gmail.com" className="text-teal-950 hover:text-teal-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className="mt-24 supported-by">
            <Typography variant="h1" className="text-black mb-0 text-center">
              Backed by
            </Typography>

            <div className="mt-5 flex flex-wrap justify-center md:justify-between items-center gap-5 shadow-lg rounded-3xl p-5">
              <a href="https://www.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer">
                <Image src={BITSImage} alt="BITS" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://www.linkedin.com/company/pilani-innovation-entrepreneurship-development-society-pieds-bits-pilani/" target="_blank" rel="noopener noreferrer">
                <Image src={PIEDSImage} alt="PIEDS" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://www.linkedin.com/company/sp-tbi/" target="_blank" rel="noopener noreferrer">
                <Image src={SPTBiImage} alt="SPTBi" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://www.linkedin.com/company/iimklive/" target="_blank" rel="noopener noreferrer">
                <Image src={IIMKImage} alt="IIMK" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://www.chitkara.edu.in/ciif/" target="_blank" rel="noopener noreferrer">
                <Image src={CIIFImage} alt="CIIF" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://glbcri.org/" target="_blank" rel="noopener noreferrer">
                <Image src={GLBCRIIMAGE} alt="GLBCRI" width={100} height={100} className="md:w-[150px]" />
              </a>
            </div>
          </div>
          <div className="mt-5 incubated-by">
            {/* <Typography variant="h1" className="text-black mb-0 text-center">
              Incubated by
            </Typography> */}

            <div className="mt-2 flex flex-wrap justify-center md:justify-between items-center gap-5 shadow-lg rounded-3xl p-5">
              <a href="https://seedfund.startupindia.gov.in/" target="_blank" rel="noopener noreferrer">
                <Image src={StartupIndiaImage} alt="Startup India" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://seedfund.startupindia.gov.in/" target="_blank" rel="noopener noreferrer">
                <Image src={StartUpIndiaSeedImage} alt="Startup India Seed" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://www.nidhi-prayas.org/#parentVerticalTab11" target="_blank" rel="noopener noreferrer">
                <Image src={NidhiPrayasImage} alt="Nidhi Prayas" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://msh.meity.gov.in/" target="_blank" rel="noopener noreferrer">
                <Image src={MEITYImage} alt="MEITY" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://startinup.up.gov.in/" target="_blank" rel="noopener noreferrer">
                <Image src={StartInUPImage} alt="Start In UP" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://msme.gov.in/" target="_blank" rel="noopener noreferrer">
                <Image src={MSMEImage} alt="MSME" width={100} height={100} className="md:w-[150px]" />
              </a>
            </div>

          </div>
          <div className="mt-24 featured-by">
            <Typography variant="h1" className="text-black mb-0 text-center">
              Featured by
            </Typography>

            <div className="mt-5 flex flex-wrap justify-center md:justify-between items-center gap-5 shadow-lg rounded-3xl p-5">
              <a href="https://share.google/y9dMgBUG86JqOAnQo" target="_blank" rel="noopener noreferrer">
                <Image src={featuredBy1Image} alt="HBS" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://share.google/y9dMgBUG86JqOAnQo" target="_blank" rel="noopener noreferrer">
                <Image src={featuredBy2Image} alt="StyleSpeak" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://share.google/flJkgwx1vNDUYrjmN" target="_blank" rel="noopener noreferrer">
                <Image src={featuredBy3Image} alt="ET Startup Awards" width={100} height={100} className="md:w-[150px]" />
              </a>
              <a href="https://share.google/flJkgwx1vNDUYrjmN" target="_blank" rel="noopener noreferrer">
                <Image src={featuredBy4Image} alt="The Economic Times" width={100} height={100} className="md:w-[150px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="blogs" className="section-5 w-full flex justify-center items-center bg-black min-h-[100vh] relative">
        <DarkGradientCircles overflowHidden={true} />
        <div className="max-w-[1400px] w-full py-32 px-10 min-h-screen">

          <div className="relative z-[150]">
            <Typography variant="h1" className="text-white mb-10 text-start">
              Read About Us
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 z-[250] relative ">

            <div className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-800 hover:border-zinc-700">
              <div className="h-[11rem] md:h-[20rem] bg-white relative overflow-hidden">
                <Image
                  src={blog3Image}
                  alt="Salon Consultation"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="p-8">
                <Typography variant="subheading" className="text-white mb-3 group-hover:text-teal-400 transition-colors">
                  Economic Times Startup Awards 2025
                </Typography>
                <Typography variant="content" className="text-zinc-400 mb-6 line-clamp-3">
                  Try My Style has been featured in The Economic Times as part of The Economic Times Startup Awards 2025 coverage.
                </Typography>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-500">4 min read</span>
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7365643141229539328" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-800 hover:border-zinc-700">
              <div className="h-[11rem] md:h-[20rem] bg-white relative overflow-hidden">
                <Image
                  src={blog4Image}
                  alt="AI Technology"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="p-8">
                <Typography variant="subheading" className="text-white mb-3 group-hover:text-teal-400 transition-colors">
                  StyleSpeak Beauty Conference 2025

                </Typography>
                <Typography variant="content" className="text-zinc-400 mb-6 line-clamp-3">
                  It was a truly enriching experience to share the stage with industry pioneers like Vikram Bhatt, Sahil Gupta, and Sachin Kamat, as we explored how AI and personalisation are redefining the beauty and salon industry
                </Typography>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-500">5 min read</span>
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7317880220013735938" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Blog Card 1 */}

            {/* Blog Card 2 */}

            <div className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-800 hover:border-zinc-700">
              <div className="h-[11rem] md:h-[20rem] bg-zinc-800 relative overflow-hidden">
                <Image
                  src={blog1Image}
                  alt="Salon Consultation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="p-8">
                <Typography variant="subheading" className="text-white mb-3 group-hover:text-teal-400 transition-colors">
                  Journey of Try My Style’s Patented Smart Mirror
                </Typography>
                <Typography variant="content" className="text-zinc-400 mb-6 line-clamp-3">
                  With our current partnership with Looks Salon & PAGE3  Salons by Naturals Salon & Spa, we have deployed our first set of Smart Mirrors in Delhi and Hyderabad for consumer testing. We introduced features such as virtual styling, interactive consultations, and customizable lighting,                </Typography>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-500">4 min read</span>
                  <a href="https://www.linkedin.com/pulse/journey-try-my-styles-patented-smart-mirror-trymystyle-fbu3c/?trackingId=mwwyAxWsRLyIeLoC00SQXg%3D%3D" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-800 hover:border-zinc-700">
              <div className="h-[11rem] md:h-[20rem] bg-zinc-800 relative overflow-hidden">
                <Image
                  src={blog2Image}
                  alt="AI Technology"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="p-8">
                <Typography variant="subheading" className="text-white mb-3 group-hover:text-teal-400 transition-colors">
                  How Try My Style’s Software Evolved Through Continuous Iterations
                </Typography>
                <Typography variant="content" className="text-zinc-400 mb-6 line-clamp-3">
                  Try My Style ® set out to revolutionize hair salons with a virtual try-on feature but faced significant challenges due to augmented reality&apos;s limitations in precision and accuracy for hairstyling.
                </Typography>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-500">5 min read</span>
                  <a href="https://www.linkedin.com/pulse/how-try-my-styles-software-evolved-through-continuous-iterations-irllf" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div
        id="faq"
        className="section-6 w-full flex justify-center items-center bg-white p-4 md:p-36 min-h-[50vh] relative z-[100] "
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

      <Footer openCalendly={openCalendly} />

    </div>
  );
}

const JourneyCard = ({ title, desc, date, index, lightTheme, icon, start, offset = 0 }: { title: string, desc: string, date: string, index: number, start?: boolean, lightTheme?: boolean, icon: React.ReactNode, offset?: number }) => {
  const isLeft = (index + offset) % 2 === 0;
  return (
    <div className="relative flex items-center w-full">
      {/* Main vertical timeline line - hidden on mobile */}
      <div className={`absolute left-1/2 w-[2px] ${lightTheme ? 'bg-teal-400' : 'bg-white'} -translate-x-1/2 ${start ? 'h-[50%] translate-y-1/2' : 'h-full'} hidden md:block`} />

      {/* Timeline node with horizontal connector - hidden on mobile */}
      <div className="absolute left-1/2 -translate-x-1/2 items-center hidden md:flex">
        <div className="border-2 border-teal-200 relative w-[40px] h-[40px] rounded-full flex items-center justify-center">
          <div className={`w-4 h-4 rounded-full ${lightTheme ? 'bg-teal-400' : 'bg-white'} border-2 ${lightTheme ? 'border-white' : 'border-teal-400'} z-10`} />
        </div>
      </div>

      {/* Card container */}
      <div className={`w-full flex ${isLeft ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'} px-4`}>
        <div className="w-full md:w-[500px] relative">
          {/* Connecting line from horizontal connector to card - hidden on mobile */}
          <div
            className={`absolute top-1/2 ${isLeft ? 'right-full' : 'left-full'} 
            w-[52px] h-[4px] ${lightTheme ? 'bg-teal-400' : 'bg-white/20'} hidden md:block`}
          >
            <div className={`z-10 w-5 h-5 ${lightTheme ? 'bg-teal-400' : 'bg-white'} rounded-full absolute top-1/2 -translate-y-1/2 ${isLeft ? 'right-[-10px]' : 'left-[-5px]'}`} />
          </div>

          <div className={`
            ${lightTheme ? 'bg-teal-950' : 'bg-gray-900/50'} 
            backdrop-blur-lg p-4 md:p-6 rounded-xl 
            border ${lightTheme ? 'border-white/10' : 'border-white/20'} 
            hover:bg-gray-900/60 transition-all duration-300 
            hover:scale-105 hover:shadow-lg hover:shadow-teal-500/10
            mb-6 md:mb-0
          `}>
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="icon flex justify-center">
                {icon}
              </div>
              <div className="flex flex-col items-center gap-2 md:gap-4 mb-2 md:mb-3">
                <div className="text-center">
                  <Typography
                    variant="subheading"
                    className={`${lightTheme ? 'text-white' : 'text-teal-400'} font-semibold`}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="content"
                    className={`${lightTheme ? 'text-white/80' : 'text-white/80'} !mt-1 md:!mt-2 font-semibold`}
                  >
                    {date}
                  </Typography>
                </div>
              </div>
            </div>
            <Typography
              variant="content"
              className={`${lightTheme ? 'text-white/80' : 'text-white/80'} text-center`}
            >
              {desc}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};