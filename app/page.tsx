"use client"
import Image from "next/image";
import './index.css';
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
import { useState, useEffect } from 'react';
import faqData from '../assets/json/TryMyStyle_FAQ.json';
import { Typography } from "@/components/typography/typography";
import { Navbar } from "@/components/layout/navbar";

const ScrollSpyDot = ({ active, onClick, color }: { active: boolean; onClick: () => void; color: string }) => (
  <button
    onClick={onClick}
    className={`w-3 h-3 rounded-full transition-all duration-300 z-[9999] ${active ? `bg-${color} scale-125` : `bg-gray-400 hover:bg-${color}-400`
      }`}
  />
);
const sections = [
  { id: 'hero', color: 'white' },
  { id: 'features', color: 'teal-950' },
  { id: 'comparison', color: 'white' },
  { id: 'benefits', color: 'teal-950' },
  { id: 'faq', color: 'white' },
  { id: 'contact', color: 'teal-950' },
  { id: 'cta', color: 'white' }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

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

      <div id="hero" className="section-1 w-full flex justify-center items-center bg-black relative overflow-hidden px-4 md:px-0">
        {/* create two circles of radial gradient and put them in the top left and bottom right */}
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-teal-950"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-teal-950"></div>

        {/* Hero Section with improved styling */}
        <section className="relative min-h-screen w-[90%] md:max-w-[1400px] w-full z-[1000]">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 "></div>

          {/* First Hero Content */}
          <div className="container mx-auto pt-40 pb-20"> {/* Adjusted padding-top */}
            <div className="mx-auto relative">
              {/* Decorative element */}
              <div className="absolute top-[-100px] right-[-100px] w-[200px] h-[200px] rounded-full blur-[100px]"></div>

              <div className="mt-40 relative ">
                <span className="text-white font-medium mb-4 block text-3xl">
                  WELCOME TO TRY MY STYLE
                </span>
                <Typography variant="h1" className="text-white">
                  See It. Try It. Own It.
                </Typography>
                {/* <h1 className="text-6xl md:text-7xl font-semibold mb-6 leading-tight text-white">
                  See It. Try It. Own It.
                  <span className="block text-white mt-2 font-semibold">All with our Smart Mirror</span>
                </h1> */}

                <Typography variant="h1" className="text-white">
                  All with our Smart Mirror
                </Typography>

                <Typography variant="content" className="text-gray-400 max-w-[600px] mb-8">
                  Leveraging the strength of GenAI, providing personalized and highly
                  realistic Virtual Try-On solutions, catering to Fashion & Beauty Tech
                  Industries.
                </Typography>

                {/* <p className="text-xl text-gray-400 max-w-[600px] mb-8 leading-relaxed">
                  Leveraging the strength of GenAI, providing personalized and highly
                  realistic Virtual Try-On solutions, catering to Fashion & Beauty Tech
                  Industries.
                </p> */}
                <button className="bg-white border-2 border-teal-950 text-teal-950 px-12 py-4 rounded-xl text-3xl font-semibold hover:bg-teal-950 hover:text-white transition-all duration-300 shadow-lg shadow-[#00A5A5]/20 hover:shadow-[#00A5A5]/40 hover:scale-105">
                  Try Now
                </button>
              </div>
            </div>
          </div>

        </section>

      </div>

      <div id="features" className="section-1 2 w-full flex justify-center items-center bg-white flex-col min-h-screen relative overflow-hidden px-4 md:px-0">
        {/* create two circles of radial gradient and put them in the top left and bottom right */}
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100"></div>

        {/* Rest of your existing hero content with improved styling */}
        <div className="w-[90%] md:max-w-[1400px] w-full mt-20 mb-20 z-[1000]">
          <div className="w-full">
            <div className="mb-20">
              <Typography variant="subheading" className="text-gray-500">
                SMARTER SALONS
              </Typography>
              {/* <div className="heading text-gray-500 text-3xl font-semibold">SMARTER SALONS</div> */}
              <Typography variant="h1" className="text-primary">
                Style Made Simple.
              </Typography>

              <Typography variant="content" className="text-black max-w-[600px]">
                Transform the way you explore and perfect your look.
                With intuitive features designed to make styling effortless.
              </Typography>
              {/* <p className="text-lg text-black max-w-[600px]">
                Transform the way you explore and perfect your look.
                With intuitive features designed to make styling effortless.
              </p> */}
            </div>

            {/* Mirror displays with enhanced shadows and effects */}
            {/* ... rest of your mirror display code ... */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Mirror */}
              <div className="relative z-[1]">
                <div className="w-full h-[25.2rem] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-lg"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-[100]">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                </div>
              </div>

              {/* Second Mirror */}
              <div className="relative z-[1]">
                <div className="w-full h-[25.2rem] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-lg"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-[100]">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id="comparison" className="section-2 w-full flex justify-center items-center bg-black p-4 md:p-20 min-h-screen relative overflow-hidden bg-gradient-to-br linear-gradient-to-br from-black to-teal-950">
        {/* create two circles of radial gradient and put them in the top left and bottom right */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-500/10 rounded-full blur-[100px] bg-teal-950"></div> */}
        {/* <div className="absolute bottom-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-500/10 rounded-full blur-[100px] bg-teal-950"></div> */}
        <section className="w-[90%] md:max-w-[1400px] w-full z-[1000]">
          <Typography variant="h1" className="text-white text-center mb-20">
            Changing Customer Behavior
          </Typography>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Innovative Technology Card */}
            <div className="bg-gradient-to-br from-[#001A1A] to-[#003333] p-14 hover:from-[#002626] hover:to-[#004040] transition-all duration-300 z-[1]">
              <div className="text-[#00A5A5] mb-4">
                <Image
                  src={robotIcon}
                  alt="Innovative Technology"
                  width={80}
                  height={80}
                  className="h-[80px]"

                />
              </div>
              <Typography variant="subheading" className="text-white mb-4">
                Innovative Technology
              </Typography>
              <Typography variant="content" className="text-[#4D7C7C] leading-relaxed">
                Adapting state-of-the-art technology that helps in providing realistic results
              </Typography>
            </div>
            {/* Customer Confidence Card */}
            <div className="bg-gradient-to-br from-[#001A1A] to-[#003333] p-14 hover:from-[#002626] hover:to-[#004040] transition-all duration-300 z-[1]">
              <div className="text-[#00A5A5] mb-4">
                <Image
                  src={customerConfidenceIcon}
                  alt="Customer Confidence"
                  width={80}
                  height={80}
                  className="h-[80px]"
                />
              </div>
              <Typography variant="subheading" className="text-white mb-4">
                Customer Confidence
              </Typography>
              <Typography variant="content" className="text-[#4D7C7C] leading-relaxed">
                Reducing customer hesitance to try premium services and increasing business potential
              </Typography>
            </div>

            {/* Smart Personalization Card */}
            <div className="bg-gradient-to-br from-[#001A1A] to-[#003333] p-14 hover:from-[#002626] hover:to-[#004040] transition-all duration-300 z-[1]">
              <div className="text-[#00A5A5] mb-4">
                <Image
                  src={barIcon}
                  alt="Smart Personalization"
                  width={80}
                  height={80}
                  className="h-[80px]"

                />
              </div>
              <Typography variant="subheading" className="text-white mb-4">
                Smart Personalization
              </Typography>
              <Typography variant="content" className="text-[#4D7C7C] leading-relaxed">
                Leveraging data-driven inventory management to recommend products tailored to individual customer attributes
              </Typography>
            </div>

            {/* Expanding Services Card */}
            <div className="bg-gradient-to-br from-[#001A1A] to-[#003333] p-14 hover:from-[#002626] hover:to-[#004040] transition-all duration-300 z-[1]">
              <div className="text-[#00A5A5] mb-4">
                <Image
                  src={consultationIcon}
                  alt="Expanding Services"
                  width={80}
                  height={80}
                  className="h-[80px]"

                />
              </div>
              <Typography variant="subheading" className="text-white mb-4">
                Expanding Services
              </Typography>
              <Typography variant="content" className="text-[#4D7C7C] leading-relaxed">
                Engaging in additional services such as product sales, online consultations, and targeted advertisements from the insights gained
              </Typography>
            </div>
          </div>
        </section>
      </div>

      <div id="benefits" className="section-3 w-full flex justify-center items-center bg-white min-h-screen relative overflow-hidden px-4 md:px-0">

        {/* create two circles of radial gradient and put them in the top left and bottom right */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100"></div>
        <div className="absolute bottom-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100"></div>

        {/* Before vs After Section */}
        <section className="w-[90%] md:max-w-[1400px]  p-4 md:p-20 z-[1000]">
          {/* <div className="heading">
            <Typography variant="subheading" className="text-gray-500 text-3xl uppercase font-semibold">  Before vs After</Typography>
          </div> */}
          {/* Row-based Comparison Layout */}
          <div className="space-y-8">
            {/* Row 1: Customer Experience */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="text-right p-6 bg-teal-50/50 rounded-lg">
                <Typography variant="h1" className="text-gray-600 text-xl">
                  Before
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">

                <Typography variant="h1" className="!mt-2 text-teal-950">
                  VS
                </Typography>
              </div>

              <div className="p-6 bg-teal-50/50 rounded-lg">
                <Typography variant="h1" className="text-gray-600 text-xl">
                  After
                </Typography>
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="text-right p-6 bg-teal-50/50 rounded-lg">
                <Typography variant="content" className="text-gray-600 text-xl">
                  Losing potential revenue on the premium services due to
                  <span className="text-red-500 font-semibold"> customer hesitation</span>
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="rounded-full p-3 bg-teal-950">
                  <Image src={Vector4Icon} alt="Customer Experience" width={42} height={42} className="h-[42px]" />
                </div>
                <Typography variant="content" className="!mt-2 text-teal-950">
                  Customer Experience
                </Typography>
              </div>

              <div className="p-6 bg-teal-50/50 rounded-lg">
                <Typography variant="content" className="text-gray-600 text-xl">
                  Increased customer spending by
                  <span className="text-teal-950 font-semibold"> eliminating hesitation</span> through try-on
                </Typography>
              </div>
            </div>

            {/* Row 2: Data Utilization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="text-right p-6 rounded-lg">
                <Typography variant="content" className="text-gray-600 text-xl">
                  <span className="text-red-500 font-semibold">No data & insights</span> for hair & skin on the visiting customers
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="rounded-full p-3 bg-teal-950">
                  <Image src={dataGraphIcon} alt="Data Utilization" width={42} height={42} className="h-[42px]" />
                </div>
                <Typography variant="content" className="!mt-2 text-teal-950">
                  Data Utilization
                </Typography>
              </div>

              <div className="p-6 rounded-lg">
                <Typography variant="content" className="text-gray-600 text-xl">
                  Leveraging data gained to provide
                  <span className="text-teal-950 font-semibold"> personalized recommendations</span> & feedback
                </Typography>
              </div>
            </div>

            {/* Row 3: Brand Visibility */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="text-right p-6 bg-teal-50/50 rounded-lg">
                <Typography variant="content" className="text-gray-600 text-xl">
                  Losing out on social media
                  <span className="text-red-500 font-semibold"> presence</span> and engagement
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="rounded-full p-3 bg-teal-950">
                  <Image src={Vector1Icon} alt="Brand Visibility" width={42} height={42} className="h-[42px]" />
                </div>
                <Typography variant="content" className="!mt-2 text-teal-950">
                  Brand Visibility
                </Typography>
              </div>

              <div className="p-6 bg-teal-50/50 rounded-lg">
                <Typography variant="content" className="text-gray-600 text-xl">
                  <span className="text-teal-950 font-semibold">Gaining social media presence</span> and word-of-mouth marketing
                </Typography>
              </div>
            </div>

            {/* Row 4: Business Growth */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="text-right p-6 rounded-lg">
                <Typography variant="content" className="text-gray-600 text-xl">
                  <span className="text-red-500 font-semibold">Low</span> Average ticket size
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="rounded-full p-3 bg-teal-950">
                  <Image src={Vector2Icon} alt="Business Growth" width={42} height={42} className="h-[42px]" />
                </div>
                <Typography variant="content" className="!mt-2 text-teal-950">
                  Business Growth
                </Typography>
              </div>

              <div className="p-6 rounded-lg">
                <Typography variant="content" className="text-gray-600 text-xl">
                  <span className="text-teal-950 font-semibold">Increased</span> Average ticket size and footfall
                </Typography>
              </div>
            </div>

            {/* Row 5: Market Position */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="text-right p-6 bg-teal-50/50 rounded-lg">
                <Typography variant="content" className="text-gray-600 text-xl">
                  <span className="text-red-500 font-semibold">No major differentiator</span> from competition
                </Typography>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="rounded-full p-3 bg-teal-950">
                  <Image src={Vector3Icon} alt="Market Position" width={42} height={42} className="h-[42px]" />
                </div>
                <Typography variant="content" className="!mt-2 text-teal-950">
                  Market Position
                </Typography>
              </div>

              <div className="p-6 bg-teal-50/50 rounded-lg">
                <Typography variant="content" className="text-gray-600 text-xl">
                  Transformation into a <span className="text-teal-950 font-semibold">technology-first salon</span>
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="faq" className="section-4 w-full flex justify-center items-center bg-black p-4 md:p-20 min-h-screen relative overflow-hidden">

        {/* create two circles of radial gradient and put them in the top left and bottom right */}
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-teal-950"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-teal-950"></div>

        <section className="w-[90%] md:max-w-[1400px] w-full z-[1000]">
          <div className="mb-16 flex flex-col md:flex-row md:gap-[250px]">
            <div className="heading flex-1">

              <Typography variant="subheading" className="text-gray-500 text-3xl uppercase font-semibold">FAQ</Typography>


              <Typography variant="h1" className="text-white mt-2 mb-12">
                Frequently<br />asked<br />questions.
              </Typography>
            </div>

            <div className="space-y-3 flex-3 w-full flex flex-col gap-4">
              {Object.entries(faqData).map(([key, data]) => (
                <div key={key} className="w-full">
                  <button
                    className="w-full bg-[#1A1A1A] hover:bg-[#252525] p-3 rounded-lg flex justify-between items-center group transition-all duration-300"
                    onClick={() => handleFaqClick(key)}
                  >
                    <Typography variant="content" className="text-white text-left">{data.Question}</Typography>
                    <span className={`text-white text-2xl transition-transform duration-300 ${activeFaq === key ? 'rotate-45 !text-red-500' : ''}`}>
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${activeFaq === key ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="p-5 text-white/80 bg-[#1A1A1A]/50 rounded-b-lg">
                      <Typography variant="content" className="text-white text-left">{data.Answer}</Typography>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div id="contact" className="section-5 w-full flex justify-center items-center bg-white p-4 md:p-20 relative">

        {/* create two circles of radial gradient and put them in the top left and bottom right */}
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] bg-green-100"></div>

        <div className="w-[90%] md:max-w-[1400px] w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 min-h-screen z-[1000]">
          {/* Left Column - Text and Map */}
          <div className="flex-1">
            <div className="heading flex-1">
              <Typography variant="subheading" className="text-gray-500 text-3xl uppercase font-semibold">Contact Us</Typography>
            </div>
            <Typography variant="h1" className="text-teal-950 mb-4">
              Take the first step towards upscaling your business
            </Typography>
            {/* Map Container */}
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1 w-full">
            <form className="space-y-8  flex flex-col ">
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
                className="bg-[#00A5A5] text-white px-8 py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-[#008585] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
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

      <div id="cta" className="wrapper flex justify-center items-center w-full py-10 md:py-20 bg-gradient-to-br from-[#001A1A] to-black px-4 md:px-0">
        <div className="w-[90%] md:max-w-[1200px] bg-[#00A5A5]/10 backdrop-blur-lg rounded-3xl p-8 md:p-20 text-center relative overflow-hidden border border-[#00A5A5]/20">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#00A5A5]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#00A5A5]/10 rounded-full blur-[100px]"></div>

          <Typography variant="h1" className="text-white mb-4 relative z-10">
            Goodbye Guesswork
          </Typography>
          <Typography variant="subheading" className="text-white/90 relative z-10">
            Hello <span className="text-white font-semibold text-3xl">Perfect Virtual Try-on</span> look!
          </Typography>

          <button className="mt-4 bg-white border-2 border-teal-950 text-teal-950 px-12 py-4 rounded-xl text-lg font-medium hover:bg-[#008585] transition-all duration-300 shadow-lg shadow-[#00A5A5]/20 hover:shadow-[#00A5A5]/40 hover:scale-105 relative z-10">
            Book Demo
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-black text-white px-4 md:px-20 py-8 md:py-16">
        <div className="w-[90%] md:max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description Column */}
          <div className="col-span-4">
            <Typography variant="subheading" className="text-white mb-4">
              TryMyStyle
            </Typography>
            {/* <Image
              src="/try-my-style-logo.svg"
              alt="Try My Style"
              width={150}
              height={40}
              className="mb-6"
            /> */}
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
          Try My Style™ is a venture of VtStyle Technologies Pvt. Ltd. (CIN
          : U72200UP2022PTC157545)
        </div>
      </footer>

    </div>
  );
}
