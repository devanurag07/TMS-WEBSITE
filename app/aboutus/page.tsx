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
import { MdFaceRetouchingNatural } from "react-icons/md"; //#1
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

const ScrollSpyDot = ({ active, onClick }: { active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-3 h-3 rounded-full transition-all duration-300 ${active ? 'bg-teal-400 scale-125' : 'bg-gray-400 hover:bg-teal-400'
      }`}
  />
);

const sections = [
  'hero',
  'story',
  'journey-1',
  'journey-2',
  'journey-3',
  'team',
  'blogs',
  'cta'
];

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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
    },
    {
      num: 13,
      title: "Hardware Upgrades Upcoming!",
      desc: "Continuing to develop new technologies to transform salon and retail services.",
      date: "January 2025",
      icon: <IoRocket className="text-white w-16 h-16 md:w-24 md:h-24" />
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center flex-col relative">
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-[1000]">
        {sections.map((section) => (
          <ScrollSpyDot
            key={section}
            active={activeSection === section}
            onClick={() => scrollToSection(section)}
          />
        ))}
      </div>

      <Navbar />

      <div id="hero" className="section-1 w-full flex justify-center items-center bg-black relative overflow-hidden">
        <Image src={backgroundImg} alt="background" className="absolute top-0 left-0 w-full h-full object-cover z-[100]" />
        <div className="max-w-[1400px] w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-center z-[200] px-4 md:px-20">
          <div className="py-20 md:py-0">
            <Typography variant="h1" className="text-white mb-6 text-center md:text-left">
              Know us before your believe us
            </Typography>
            <Typography variant="content" className="text-gray-400 mb-8 text-center md:text-left">
              Try My Style revolutionizes the hair styling industry by aligning hairstylists’ expertise with customers’ vision through cutting-edge technology, empowering salons to regain business and customers to explore confidently.
            </Typography>
          </div>
          <div className="relative h-full flex items-center justify-center">
            {/* Add your 3D model or image here */}
            {/* <Image
              src={BusinessPeople}
              alt="Business People"
              width={300}
              height={300}
              className="object-contain"
            /> */}
          </div>
        </div>
      </div>

      <div id="story" className="section-2 w-full flex justify-center items-center bg-white relative overflow-hidden">
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
                Providing convenience and inspiration to empower users to make informed choices about their style, while helping salon owners upscale their businesses.
              </Typography>
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
                Revolutionizing the salon industry with AI-powered try-on tools.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div id="journey-1" className="sub-section-1 bg-black min-h-screen flex justify-center items-center relative w-full">
        <Image src={backgroundImg} alt="background" className="absolute top-0 left-0 w-full h-full object-cover z-[100]" />
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-400/20"
          style={{
            clipPath: "path('M 0,0 C 30,25 -30,75 0,100')", // Modified to create S-curve
            animation: "flow 3s linear infinite",
            transform: "translateX(-50%)"
          }}></div>
        <div className="max-w-[1400px] w-full py-16 px-4 md:px-20 min-h-screen relative z-[200]">

          <Typography variant="h1" className="text-white mb-5 text-center md:text-left">
            Development<br />Journey<br />So Far
          </Typography>
          <div className="content relative mt-5">
            {journeyContent.slice(0, 3).map((milestone, index) => (
              <JourneyCard key={index} title={milestone.title} desc={milestone.desc} date={milestone.date} index={index} icon={milestone.icon} />
            ))}
          </div>
        </div>
      </div>
      <div id="journey-2" className="sub-section-2 bg-white min-h-screen flex justify-center items-center relative overflow-hidden w-full">

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
            {journeyContent.slice(3, 8).map((milestone, index) => (
              <JourneyCard key={index} title={milestone.title} desc={milestone.desc} date={milestone.date} index={index} icon={milestone.icon} darkTheme={true} />
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
            {journeyContent.slice(8, 13).map((milestone, index) => (
              <JourneyCard key={index} title={milestone.title} desc={milestone.desc} date={milestone.date} index={index} icon={milestone.icon} />
            ))}
          </div>
        </div>
      </div>

      <div id="team" className="section-4 w-full flex justify-center items-center bg-white">
        <div className="max-w-[1400px] w-full py-32 px-10 min-h-screen">
          <Typography variant="h1" className="text-black mb-0 text-center">
            Team
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Typography variant="content" className="text-gray-600 text-sm">Co-Founder | Technology</Typography>
                <Typography variant="subheading" className="text-black mt-2">Amarpal Singh</Typography>
                <div className="social-icons mt-2">
                  <a href="https://linkedin.com" className="text-teal-600 hover:text-teal-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
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
                <Typography variant="content" className="text-gray-600 text-sm">Co-Founder | Operations</Typography>
                <Typography variant="subheading" className="text-black mt-2">Dhruv Gupta</Typography>
                <div className="social-icons mt-2">
                  <a href="https://linkedin.com" className="text-teal-600 hover:text-teal-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
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
                <Typography variant="content" className="text-gray-600 text-sm">Co-Founder | Strategy</Typography>
                <Typography variant="subheading" className="text-black mt-2">Yuvraj Singh</Typography>
                <div className="social-icons mt-2">
                  <a href="https://linkedin.com" className="text-teal-600 hover:text-teal-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
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
              <Image src={BITSImage} alt="BITS" width={100} height={100} className="md:w-[150px]" />
              <Image src={PIEDSImage} alt="PIEDS" width={100} height={100} className="md:w-[150px]" />
              <Image src={SPTBiImage} alt="SPTBi" width={100} height={100} className="md:w-[150px]" />
              <Image src={IIMKImage} alt="IIMK" width={100} height={100} className="md:w-[150px]" />
              <Image src={CIIFImage} alt="CIIF" width={100} height={100} className="md:w-[150px]" />
              <Image src={GLBCRIIMAGE} alt="GLBCRI" width={100} height={100} className="md:w-[150px]" />
            </div>
          </div>

          <div className="mt-5 incubated-by">
            {/* <Typography variant="h1" className="text-black mb-0 text-center">
              Incubated by
            </Typography> */}

            <div className="mt-2 flex flex-wrap justify-center md:justify-between items-center gap-5 shadow-lg rounded-3xl p-5">
              <Image src={StartupIndiaImage} alt="Startup India" width={100} height={100} className="md:w-[150px]" />
              <Image src={StartUpIndiaSeedImage} alt="Startup India Seed" width={100} height={100} className="md:w-[150px]" />
              <Image src={NidhiPrayasImage} alt="Nidhi Prayas" width={100} height={100} className="md:w-[150px]" />
              <Image src={MEITYImage} alt="MEITY" width={100} height={100} className="md:w-[150px]" />
              <Image src={StartInUPImage} alt="Start In UP" width={100} height={100} className="md:w-[150px]" />
              <Image src={MSMEImage} alt="MSME" width={100} height={100} className="md:w-[150px]" />
            </div>

          </div>
        </div>
      </div>
      <div id="blogs" className="section-5 w-full flex justify-center items-center bg-black min-h-[100vh]">
        <div className="max-w-[1400px] w-full py-32 px-10 min-h-screen">
          <Typography variant="h1" className="text-white mb-10 text-start">
            Blogs
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-800 hover:border-zinc-700">
              <div className="h-56 bg-zinc-800 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1626544827763-d516dce335e2"
                  alt="AI Technology"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="p-8">
                <Typography variant="subheading" className="text-white mb-3 group-hover:text-teal-400 transition-colors">
                  The Future of Virtual Try-On Technology
                </Typography>
                <Typography variant="content" className="text-zinc-400 mb-6 line-clamp-3">
                  Explore how AI and AR are revolutionizing the beauty industry through virtual try-on solutions.
                </Typography>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-500">5 min read</span>
                  <a href="/blog/future-of-virtual-try-on" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-800 hover:border-zinc-700">
              <div className="h-56 bg-zinc-800 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df"
                  alt="Salon Consultation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="p-8">
                <Typography variant="subheading" className="text-white mb-3 group-hover:text-teal-400 transition-colors">
                  Transforming Salon Consultations
                </Typography>
                <Typography variant="content" className="text-zinc-400 mb-6 line-clamp-3">
                  How digital tools are enhancing the salon consultation experience and boosting customer satisfaction.
                </Typography>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-500">4 min read</span>
                  <a href="/blog/transforming-salon-consultations" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-800 hover:border-zinc-700">
              <div className="h-56 bg-zinc-800 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                  alt="Innovation Journey"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
              </div>
              <div className="p-8">
                <Typography variant="subheading" className="text-white mb-3 group-hover:text-teal-400 transition-colors">
                  Our Journey: From Idea to Innovation
                </Typography>
                <Typography variant="content" className="text-zinc-400 mb-6 line-clamp-3">
                  The story behind Try My Style and our mission to revolutionize the hair styling industry.
                </Typography>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-zinc-500">6 min read</span>
                  <a href="/blog/our-journey" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Final CTA Section */}
      <div id="cta" className="wrapper flex justify-center items-center w-full py-10 md:py-20 bg-gradient-to-br from-[#001A1A] to-black px-4">
        <div className="w-[95%] md:w-[90%] max-w-[1200px] bg-[#00A5A5]/10 backdrop-blur-lg rounded-3xl p-8 md:p-20 text-center relative overflow-hidden border border-[#00A5A5]/20">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#00A5A5]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#00A5A5]/10 rounded-full blur-[100px]"></div>

          <h2 className="text-5xl font-bold text-white mb-4 relative z-10">
            Goodbye Guesswork
          </h2>
          <h3 className="text-4xl mb-12 text-white/90 relative z-10">
            Hello <span className="text-[#00A5A5] font-semibold">Perfect Virtual Try-on</span> look!
          </h3>
          <button className="bg-[#00A5A5] text-white px-12 py-4 rounded-xl text-lg font-medium hover:bg-[#008585] transition-all duration-300 shadow-lg shadow-[#00A5A5]/20 hover:shadow-[#00A5A5]/40 hover:scale-105 relative z-10">
            Book Demo
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-black text-white px-4 md:px-20 py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description Column */}
          <div className="col-span-4">
            <Image
              src="/try-my-style-logo.svg"
              alt="Try My Style"
              width={150}
              height={40}
              className="mb-6"
            />
            <p className="text-gray-400 mb-6">
              Upscaling the experience of a hairdo with a <span className="text-[#00A5A5]">try-on technology</span> that sits right at the center of Salon Consultations, Services and Aftercare.
            </p>
            <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
              Know our journey and what brought us here with blogs
            </a>
          </div>

          {/* Company Links Column */}
          <div className="col-span-4 ml-auto">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/help" className="text-gray-400 hover:text-white transition-colors">Help</a></li>
              <li><a href="/affiliates" className="text-gray-400 hover:text-white transition-colors">Affiliates</a></li>
              <li><a href="/professionals" className="text-gray-400 hover:text-white transition-colors">Professionals</a></li>
            </ul>
          </div>

          {/* Legal Links Column */}
          <div className="col-span-4">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund policy</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          Try My Style™ is a venture of VtStyle Technologies Pvt. Ltd. (CIN: U72200UP2022PTC157545)
        </div>
      </footer>

    </div>
  );
}


const JourneyCard = ({ title, desc, date, index, darkTheme, icon }: { title: string, desc: string, date: string, index: number, darkTheme?: boolean, icon: React.ReactNode }) => {
  const offset = darkTheme ? 1 : 0;
  return (
    <div
      key={index}
      className={`flex ${(index + offset) % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center mb-8`}
      style={{
        transform: `translateX(${(index + offset) % 2 === 0 ? '0' : '0'}) md:translateX(${(index + offset) % 2 === 0 ? '10%' : '-10%'})`,
      }}
    >
      <div className="relative w-full md:w-[500px] px-4 md:px-0">
        <div className={`${darkTheme ? 'bg-teal-950' : 'bg-gray-900/50'} backdrop-blur-lg p-4 md:p-6 rounded-xl border ${darkTheme ? 'border-white/10' : 'border-white/20'} hover:bg-gray-900/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/10`}>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <div className="icon flex justify-center md:justify-start">
              {icon}
            </div>
            <div className="flex flex-col items-center md:items-start gap-2 md:gap-4 mb-2 md:mb-3">
              <div className="text-center md:text-left">
                <Typography variant="subheading" className={`${darkTheme ? 'text-white' : 'text-teal-400'} font-semibold`}>{title}</Typography>
                <Typography variant="content" className={`${darkTheme ? 'text-white/80' : 'text-white/80'} !mt-1 md:!mt-2 font-semibold`}>{date}</Typography>
              </div>
            </div>
          </div>
          <Typography variant="content" className={`${darkTheme ? 'text-white/80' : 'text-white/80'} text-center md:text-left`}>{desc}</Typography>
        </div>
      </div>
    </div>
  )
}