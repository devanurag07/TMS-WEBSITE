"use client";
import "../index.css";
import { Navbar } from "@/components/layout/navbar";
import { useState, useEffect } from "react";
import Footer from "@/components/layout/footer";
import { Typography } from "@/components/typography/typography";
import Image from "next/image";
import { useCalendly } from "@/lib/features/calendly/context/CalendlyContext";
import DarkGradientCircles from "@/components/DarkGradientCircles";
import { HorizontalCarousel } from "@/components/HorizontalCarousel";

import { TbTexture } from "react-icons/tb";
// Import specific hair icons for Core Parameters
import dandruffIcon from "../../assets/hairicons/Dandruff.svg";
import oilinessIcon from "../../assets/hairicons/Oiliness.svg";
import scalpRednessIcon from "../../assets/hairicons/Scalp Redness.svg";
import shaftThicknessIcon from "../../assets/hairicons/Shaft Thickness.svg";
import hairThinningIcon from "../../assets/hairicons/Hair Thinning.svg";
import hairDensityIcon from "../../assets/hairicons/Hair Density.svg";
import hairTextureIcon from "../../assets/hairicons/Hair Texture.svg";
// Fallback icon for scalp texture (no specific icon available)
import consultationIcon from "../../assets/icons/consultation.svg";
import MicroscopicHairAnalyserImage from "../../assets/microscopic_analyser.png";
// Import hair analyser image
import HairAnalyserImage from "@/assets/hair_analyser_hw.jpeg";
import FrontalImage from "@/assets/head-parts/Frontal.svg"
import OcciptalImage from "@/assets/head-parts/Occipital.svg"
import ParietalImage from "@/assets/head-parts/Parietal.svg"
import TemporalImage from "@/assets/head-parts/Temporal.svg"

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
  { id: "parameters", color: "teal-950" },
  { id: "insights", color: "white" },
  { id: "faq", color: "teal-950" },
];

const coreParameters = [
  {
    id: 1,
    icon: dandruffIcon,
    title: "Dandruff",
    description: "Detects visible flakes and scalp buildup.",
    isSvg: true,
  },
  {
    id: 2,
    icon: oilinessIcon,
    title: "Oiliness",
    description: "Identifies excess sebum production.",
    isSvg: true,
  },
  {
    id: 3,
    icon: scalpRednessIcon,
    title: "Scalp Redness",
    description: "Highlights irritation or inflammation zones.",
    isSvg: true,
  },
  {
    id: 4,
    icon: TbTexture,
    title: "Scalp Texture",
    description: "Assesses smoothness vs rough/patchy areas.",
    isSvg: false,
  },
  {
    id: 5,
    icon: shaftThicknessIcon,
    title: "Shaft Thickness",
    description: "Measures consistency of hair strand diameter.",
    isSvg: true,
  },
  {
    id: 6,
    icon: hairThinningIcon,
    title: "Hair Thinning",
    description: "Detects miniaturised follicles and patch thinning.",
    isSvg: true,
  },
  {
    id: 7,
    icon: hairDensityIcon,
    title: "Hair Density",
    description: "Evaluates follicle count per area.",
    isSvg: true,
  },
  {
    id: 8,
    icon: hairTextureIcon,
    title: "Hair Texture",
    description: "Identifies straight/wavy/curly texture and irregularities.",
    isSvg: true,
  },
];

const headPartsSvgs = [
  {
    id: 1,
    label: "Frontal",
    image: FrontalImage,
  },

  {
    id: 2,
    label: "Occipital",
    image: OcciptalImage,
  },

  {
    id: 3,
    label: "Parietal",
    image: ParietalImage,
  },

  {
    id: 4,
    label: "Temporal",
    image: TemporalImage,
  },

];

const faqData = [
  {
    question: "Do I need special equipment for this feature?",
    answer: "Yes, the Smart Mirror comes with an optional microscopic camera attachment that enables scalp imaging for precise analysis."
  },
  {
    question: "How long does a hair analysis take?",
    answer: "A complete scan and AI report typically take under 5 minutes."
  },
  {
    question: "Can the Hair Analyser suggest treatments?",
    answer: "Yes, the AI identifies key concerns and provides personalized recommendations for treatments and products."
  },
  {
    question: "Who can benefit from this analysis?",
    answer: "Salons, dermatologists and wellness centers can use it for professional consultations. End-users benefit from personalized insights into scalp and hair health."
  },
  {
    question: "Can the results be integrated into salon workflows?",
    answer: "Yes, results can be stored, tracked, and exported via API integration for salon/clinic management systems."
  }
];

export default function HairAnalyser() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const { openCalendly } = useCalendly();
  const [activeFaq, setActiveFaq] = useState("");

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

      {/* Section 1 - Hero (Dark Background) */}
      <div id="hero" className="section-1 overflow-hidden bg-black w-full flex flex-col items-center justify-center p-4 md:p-16 pt-36 md:pt-0">
        <div className="flex max-w-[1400px] flex-col">
          <div className="hero flex flex-col lg:flex-row items-center justify-center min-h-[84vh] md:min-h-screen max-h-screen relative">
            {/* Gradient circles */}
            <div className="absolute top-[-120px] left-[-150px] w-[600px] h-[600px] bg-teal-950 rounded-full blur-[100px] z-[0]"></div>
            <div className="absolute bottom-[-120px] right-[-150px] w-[600px] h-[600px] bg-teal-950 rounded-full blur-[100px] z-[0]"></div>

            <div className="hero-content flex-1 z-[100] w-full">
              <Typography className="hero-title text-white" variant={"h1"}>
                Microscopic Hair Analyser
              </Typography>
              <Typography className="hero-subtitle text-white max-w-2xl">
                With the integrated Microscopic Hair Analyser, the Smart Mirror goes beyond surface styling to provide deep scalp and follicle insights.
              </Typography>
            </div>

            <div className="hero-image flex-1 items-centers justify-center flex ">
              <Image
                src={MicroscopicHairAnalyserImage}
                width={400}
                height={400}
                alt="Microscopic Hair Analyser"
                className="w-[300px] md:w-[500px] h-full object-contain z-[200]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Core Parameters (Light Background) */}
      <div id="parameters" className="section-2 min-h-screen w-full bg-white pb-10 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-[-120px] left-[-150px] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] z-[0]"></div>
        <div className="absolute bottom-[-120px] right-[-150px] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] z-[0]"></div>

        <div className="core-parameters p-4 pt-20 z-[100] relative max-w-[1400px] w-full flex flex-col items-center justify-center">
          <Typography
            className="parameters-title text-center text-teal-950"
            variant={"h1"}
          >
            Core Parameters
          </Typography>
          <Typography className="parameters-subtitle text-black !mt-4 max-w-2xl text-center" variant={"content"}>
            By capturing high-resolution images from different regions of the scalp, it allows AI-powered assessment of hair and scalp health.
            <br />
            Each parameter scored out of 100, with personalized insights.
          </Typography>

          {/* Mobile Carousel View */}
          <div className="block md:hidden w-full max-w-[350px] mt-8">
            <HorizontalCarousel
              autoPlayInterval={5000}
              color="teal-600"
              showDots={true}
            >
              {Array.from({ length: Math.ceil(coreParameters.length / 3) }, (_, slideIndex) => (
                <div key={slideIndex} className="flex flex-col gap-4 px-2">
                  {coreParameters.slice(slideIndex * 3, slideIndex * 3 + 3).map((item) => (
                    <div key={item.id} className="p-4 w-full rounded-3xl bg-white relative border shadow-lg">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="flex items-center gap-4 w-full">
                          <div className="icon flex-shrink-0">
                            {item.isSvg ? <Image src={item.icon} alt="Icon" width={50} height={50} className="text-teal-950 h-10 w-10 object-contain" /> : <item.icon className="text-teal-950 h-10 w-10" />}
                          </div>
                          <Typography
                            className="parameter-card-title poppins font-medium text-teal-950"
                            variant={"subheading"}
                          >
                            {item.title}
                          </Typography>
                        </div>
                        <Typography
                          className="description poppins text-black text-left mt-2"
                          variant={"content"}
                        >
                          {item.description}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </HorizontalCarousel>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-4 gap-6 mt-20 max-w-[1300px]">
            {coreParameters.map((item) => (
              <div key={item.id} className="p-6 w-full rounded-3xl bg-white relative border shadow-lg">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="flex items-center gap-4 w-full">
                    <div className="icon">
                      {item.isSvg ? <Image src={item.icon} alt="Icon" width={60} height={60} className="text-teal-950 h-12 w-12 md:h-16 md:w-16" /> : <item.icon className="text-teal-950 h-12 w-12 md:h-16 md:w-16" />}
                    </div>
                    <Typography
                      className="parameter-card-title poppins font-medium text-teal-950"
                      variant={"subheading"}
                    >
                      {item.title}
                    </Typography>
                  </div>
                  <Typography
                    className="description poppins text-black text-left"
                    variant={"content"}
                  >
                    {item.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Section 3 - Insights (Dark Background) */}
      <div className="bg-black w-full flex items-center justify-center relative overflow-hidden" id="insights">
        <DarkGradientCircles overflowHidden={true} />
        <div className="flex max-w-[1400px] flex-col pt-20 items-center justify-center w-full p-4">
          <div className="insights z-[100] mb-20 md:mt-0 min-h-screen h-full items-center justify-center flex flex-col md:p-0 text-center">
            <Typography
              className="insights-title text-white"
              variant={"h1"}
            >
              INSTANT
              HAIR DIAGNOSIS
            </Typography>

            <Typography className="insights-subtitle text-gray-300 !mt-4 max-w-4xl text-center" variant={"content"}>
              Our advanced tech engine conducts detailed analysis of the user’s hair and scalp to
              detecting indicators like dandruff, scalp redness, & other customisable hair parameters.
            </Typography>

            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-24 mt-16 max-w-4xl">
              {headPartsSvgs.map((item) => (
                <div key={item.id} className="w-full h-[250px]">
                  <Image src={item.image} alt="Head Part" width={100} height={100} className="w-full h-full" />

                  <Typography variant="subheading" className="text-white uppercase font-bold mt-4 ">{item.label}</Typography>
                </div>
              ))}
            </div>


            <div className="extra-content mt-20 max-w-3xl text-center">
              <Typography variant="content" className="text-white">
                Hair health parameters benchmarked against leading global standards.
                <br />
                Ensuring high precision and professional grade diagnosis under 10 seconds.
              </Typography>
            </div>

          </div>
        </div>
      </div>

      {/* Section 4 - FAQ (Light Background) */}
      <div
        id="faq"
        className="section-4 w-full flex justify-center items-center bg-white p-4 md:p-20 min-h-[100vh] relative overflow-hidden z-[150]"
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
              {faqData.map((data) => (
                <div key={data.question} className="w-full">
                  <button
                    className="w-full bg-white hover:bg-gray-200 p-3 shadow-2xl rounded-lg flex justify-between items-center group transition-all duration-300"
                    onClick={() => handleFaqClick(data.question)}
                  >
                    <div className="w-full h-full text-teal-950 hover:text-teal-950 flex justify-between">
                      <Typography
                        variant="content"
                        className="text-left font-semibold"
                      >
                        {data.question}
                      </Typography>

                      <div className="w-[10px]"></div>

                      <span
                        className={`text-2xl transition-transform duration-300 ${activeFaq === data.question ? "rotate-45 !text-red-500" : ""
                          }`}
                      >
                        +
                      </span>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all rounded-md mt-2 shadow-2xl duration-300 ${activeFaq === data.question
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

      {/* Section 5 - Footer */}
      <Footer openCalendly={openCalendly} />
    </div>
  );
}