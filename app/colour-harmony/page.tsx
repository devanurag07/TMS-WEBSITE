"use client";
import "../index.css";
import { Navbar } from "@/components/layout/navbar";
import { useState, useEffect } from "react";
import Footer from "@/components/layout/footer";
import { Typography } from "@/components/typography/typography";
import { useCalendly } from "@/lib/features/calendly/context/CalendlyContext";
import DarkGradientCircles from "@/components/DarkGradientCircles";
import { HorizontalCarousel } from "@/components/HorizontalCarousel";
import {
  MdCameraAlt,
  MdPalette,
  MdAutoAwesome,
  MdPictureAsPdf,
  MdInvertColors,
  MdVisibility,
  MdColorLens,
} from "react-icons/md";
import { LuScanFace } from "react-icons/lu";
import {

  HiOutlineSparkles,
  HiOutlineShoppingBag,
  HiOutlineChartBar,
  HiOutlineUsers,
} from "react-icons/hi2";
import { BsChevronDown } from "react-icons/bs";
import Section1Img from "@/assets/color-harmony/Section1.png";
import Section2Img from "@/assets/color-harmony/Section2.png";
import Image from "next/image";


// Import specific skin analysis icons


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
  { id: "how-it-works", color: "teal-950" },
  { id: "benefits", color: "white" },
  { id: "faq", color: "teal-950" },
  { id: "cta", color: "white" },
];

const howItWorksSteps = [
  {
    id: 1,
    icon: MdCameraAlt,
    title: "Smart Mirror Photo Capture",
    description:
      "Simply stand in front of the Smart Mirror and capture a photo. Our AI instantly analyses facial features, undertones, and skin tone.",
  },
  {
    id: 2,
    icon: MdPalette,
    title: "12 Seasonal Colour Analysis",
    description:
      "Based on colour theory, the tool identifies your season from the 12 seasonal palettes to determine which colours complement you the most.",
  },
  {
    id: 3,
    icon: MdAutoAwesome,
    title: "Personalised Colour Recommendations",
    description:
      "Get curated colour suggestions tailored to your natural tones, helping you choose clothing, accessories, and styles that enhance your appearance.",
  },
  {
    id: 4,
    icon: MdPictureAsPdf,
    title: "Digital Report",
    description:
      "Receive a detailed downloadable PDF report containing your personal colour profile and recommended colour palette.",
  },
];

const coreParameters = [
  {
    id: 1,
    icon: MdCameraAlt,
    title: "Smart Mirror Photo Capture",
    description: "Simply stand in front of the Smart Mirror and capture a photo. Our AI instantly analyses facial features, undertones, and skin tone.",
  },
  {
    id: 2,
    icon: MdPalette,
    title: "Colour Analysis",
    description: "Based on colour theory, the tool identifies your season from the 12 seasonal palettes to determine which colours complement you the most.",
  },
  {
    id: 3,
    icon: MdAutoAwesome,
    title: "Colour Palette",
    description: "Get curated colour suggestions tailored to your natural tones, helping you choose clothing, accessories, and styles that enhance your appearance.",
  },
  {
    id: 4,
    icon: MdPictureAsPdf,
    title: "Digital Report",
    description: "Receive a detailed downloadable PDF report containing your personal colour profile and recommended colour palette.",
  },
]

const benefitsData = [
  {
    id: 1,
    icon: HiOutlineUsers,
    title: "Enhanced Customer Engagement",
    description:
      "Create an interactive and memorable experience that encourages visitors to explore and spend more time in your space.",
  },
  {
    id: 2,
    icon: HiOutlineShoppingBag,
    title: "Personalised Shopping Journeys",
    description:
      "Shoppers receive actionable style insights that guide them directly to relevant stores.",
  },
  {
    id: 3,
    icon: HiOutlineSparkles,
    title: "Increased Store Discovery",
    description:
      "The downloadable report highlights stores inside the mall, helping retailers benefit from targeted customer traffic.",
  },
  {
    id: 4,
    icon: HiOutlineChartBar,
    title: "Data-Driven Insights",
    description:
      "Gain valuable insights about customer preferences and trends to improve merchandising and marketing strategies.",
  },
];

const faqData = [
  {
    question: "How does colour analysis work?",
    answer:
      "The Smart Mirror captures a photo of the user and uses advanced image analysis to evaluate facial features, skin tone, and undertones. Based on this analysis, the system assigns the user to one of the 12 seasonal colour palettes and generates personalised colour recommendations.",
  },
  {
    question: "What are the 12 seasonal colour palettes?",
    answer:
      "The 12 seasonal colour system is based on professional colour analysis used by stylists worldwide. It categorises individuals into palettes such as Spring, Summer, Autumn, and Winter, each with sub-categories to identify colours that naturally complement their appearance.",
  },
  {
    question: "What does the user receive after the analysis?",
    answer:
      "After completing the analysis, users receive a personalised downloadable PDF report that includes: their seasonal colour category, recommended colour palettes, styling insights based on their features, and suggested stores within the mall where they can shop.",
  },
  {
    question: "How does this benefit malls and retail spaces?",
    answer:
      "The Colour Harmony Tool transforms a regular shopping visit into a personalised styling experience. By directing shoppers to stores that carry their recommended colours, it increases store discovery, customer engagement, and potential sales across the mall.",
  },
  {
    question: "Is the process quick and easy for users?",
    answer:
      "Yes. The analysis takes only a few moments. Users simply stand in front of the Smart Mirror, capture their photo, and receive their personalised colour profile almost instantly.",
  },
  {
    question: "Can users access their results later?",
    answer:
      "Yes. The results are delivered in a downloadable PDF format, allowing users to save their colour profile and refer to it whenever they shop.",
  },
  {
    question: "Does the tool recommend specific stores in the mall?",
    answer:
      "Yes. The generated report can include stores located within the mall that offer products in the recommended colour palette, helping users easily find items that match their personal style.",
  },
];

const seasonalPalettes = [
  { name: "Spring", shades: ["#F9C784", "#F4845F", "#F7B2AD", "#E8D5B7"] },
  { name: "Summer", shades: ["#B8D4E8", "#9BB7D4", "#C4B7CB", "#E8D4DC"] },
  { name: "Autumn", shades: ["#C17F24", "#8B4513", "#6B8E23", "#D2691E"] },
  { name: "Winter", shades: ["#1C1C2E", "#4B0082", "#DC143C", "#191970"] },
];

export default function ColourHarmony() {
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
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleFaqClick = (key: string) => {
    setActiveFaq(activeFaq === key ? "" : key);
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center flex-col relative">
      {/* ScrollSpy Dots */}
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

      {/* ─── Section 1 · Hero ─────────────────────────────────────────────── */}
      <div
        id="hero"
        className="section-1 overflow-hidden bg-black w-full flex flex-col items-center justify-center p-4 md:p-16 pt-36 md:pt-0"
      >
        <div className="flex max-w-[1400px] w-full flex-col">
          <div className="hero flex flex-col lg:flex-row items-center justify-center min-h-[84vh] md:min-h-screen max-h-screen relative gap-12">
            {/* Gradient blobs */}
            <div className="absolute top-[-120px] left-[-150px] w-[600px] h-[600px] bg-teal-950 rounded-full blur-[100px] z-[0]" />
            <div className="absolute bottom-[-120px] right-[-150px] w-[600px] h-[600px] bg-teal-950 rounded-full blur-[100px] z-[0]" />

            {/* Text */}
            <div className="hero-content flex-1 z-[100] w-full">
              <Typography className="hero-title text-white" variant="h1">
                Discover the Colours That Truly Suit You
              </Typography>
              <Typography className="hero-subtitle text-gray-300 !mt-4 max-w-2xl">
                Powered by the Try My Style Smart Mirror, this tool performs
                colour analysis and delivers tailored recommendations you can
                actually shop.
              </Typography>
            </div>

            <div className="hero-image flex-1 flex items-start justify-start">
              <div className="rounded-full border border-dashed p-2 md:p-4 z-[100]">
                <Image
                  src={Section1Img}
                  width={400}
                  height={400}
                  alt=""
                  className="
                    md:w-[300px] md:h-[300px]
                    lg:w-[400px] lg:h-[400px]
                    xl:w-[500px] xl:h-[500px]
                    z-[200] rounded-full object-cover"
                  priority
                />
              </div>
            </div>



          </div>
        </div>
      </div>


      {/* Section 2 - Core Parameters (Light Background) */}
      <div id="parameters" className="section-2 min-h-screen w-full bg-white pb-10 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-[-120px] left-[-150px] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] z-[0]"></div>
        <div className="absolute bottom-[-120px] right-[-150px] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] z-[0]"></div>

        <div className="core-parameters p-4 pt-20 z-[100] relative max-w-[1400px] w-full flex flex-col items-center justify-center">

          <Typography className=" max-w-2xl text-center text-teal-950" variant={"h1"}>
            How It Works
          </Typography>

          {/* Mobile Carousel View */}
          <div className="block md:hidden w-full max-w-[350px] mt-8">

            {Array.from({ length: Math.ceil(coreParameters.length / 4) }, (_, slideIndex) => (
              <div key={slideIndex} className="flex flex-col gap-4 px-2">
                {coreParameters.slice(slideIndex * 4, slideIndex * 4 + 4).map((item) => (
                  <div key={item.id} className="p-4 w-full rounded-3xl bg-white relative border shadow-lg">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="flex items-center gap-4 w-full">
                        <div className="icon flex-shrink-0">
                          <item.icon className="text-teal-950 h-10 w-10" />
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
          </div>

          {/* Desktop Grid View */}
          <div className="flex flex-row">

            <div className="hidden md:grid grid-cols-2 gap-6 mt-10 max-w-[700px]">
              {coreParameters.map((item) => (
                <div key={item.id} className="p-6 w-full rounded-3xl bg-white relative border shadow-lg">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex items-center gap-4 w-full">
                      <div className="icon">
                        <item.icon className="text-teal-950 h-10 w-10" />
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

            <div>
              <Image src={Section2Img} alt="Section 2" width={1000} height={1000} />
            </div>

          </div>
        </div>
      </div>


      {/* ─── Section 3 · Why Malls & Retail Spaces Love It ───────────────── */}
      <div
        id="benefits"
        className="bg-black w-full flex items-center justify-center relative overflow-hidden"
      >
        <DarkGradientCircles overflowHidden={true} />
        <div className="flex  flex-col pt-20 items-start justify-start w-full p-4">
          <div className="z-[100] w-full mb-20 md:mt-0 min-h-screen h-full items-center justify-center flex flex-col md:p-0 text-center">
            <Typography
              className="text-white text-center"
              variant="h1"
            >
              Why Malls &amp; Retail Spaces Love It?
            </Typography>

            <Typography
              className="text-gray-300 !mt-8 text-start"
              variant="content"
            >
              Transform a regular shopping visit into a personalised styling
              experience that drives engagement and increases store discovery.
            </Typography>
            <div className="flex items-center justify-center w-full">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 mt-4 md:mt-20 max-w-[1000px] z-[100]">
                {benefitsData.map((item) => (
                  <div
                    key={item.id}
                    className="md:p-10 p-5 w-full rounded-3xl bg-white relative border shadow-lg"
                  >
                    <div className="flex flex-row items-center justify-start gap-4">
                      <div className="icon">
                        <item.icon className="text-teal-950 h-10 w-10 md:h-14 md:w-14" />
                      </div>
                      <Typography
                        className="poppins font-medium text-teal-950 text-start"
                        variant="subheading"
                      >
                        {item.title}
                      </Typography>
                    </div>
                    <Typography
                      className="poppins !mt-2 text-teal-900 text-start"
                      variant="content"
                    >
                      {item.description}
                    </Typography>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ─── Section 4 · FAQ ──────────────────────────────────────────────── */}
      <div
        id="faq"
        className="section-4 w-full flex justify-center items-center bg-white p-4 md:p-20 min-h-[100vh] relative overflow-hidden z-[150]"
      >
        <section className="md:max-w-[1400px] w-full z-[1000]">
          <div className="mb-16 flex flex-col md:flex-row md:gap-[200px]">
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
                Asked
                <br />
                Questions.
              </Typography>
            </div>

            <div className="space-y-3 flex-[3] w-full flex flex-col">
              {faqData.map((data) => (
                <div key={data.question} className="w-full">
                  <button
                    className="w-full bg-white hover:bg-gray-50 p-4 shadow-md rounded-xl flex justify-between items-center group transition-all duration-300 border border-gray-100"
                    onClick={() => handleFaqClick(data.question)}
                  >
                    <Typography
                      variant="content"
                      className="text-left font-semibold text-teal-950 flex-1"
                    >
                      {data.question}
                    </Typography>
                    <BsChevronDown
                      className={`text-teal-600 ml-4 shrink-0 transition-transform duration-300 ${activeFaq === data.question ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all rounded-xl mt-1 duration-300 ${activeFaq === data.question
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="p-5 text-white bg-teal-950 rounded-b-xl shadow-md">
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
