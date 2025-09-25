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

// Import specific skin analysis icons
import acneIcon from "../../assets/skin-icons/Acne.png";
import wrinklesIcon from "../../assets/skin-icons/Wrinkles.png";
import pigmentationIcon from "../../assets/skin-icons/Pigmentation.png";
import darkSpotsIcon from "../../assets/skin-icons/Dark Spots.png";
import poresIcon from "../../assets/skin-icons/Pores.png";
import rednessIcon from "../../assets/skin-icons/Redness.png";
import oilinessIcon from "../../assets/skin-icons/Oiliness.png";
import skinTextureIcon from "../../assets/skin-icons/Skin Texture.png";
import MicroscopicHairAnalyserImage from "../../assets/microscopic_analyser.png";
// Import hair analyser image
import HairAnalyserImage from "@/assets/hair_analyser_hw.jpeg";
import FrontalImage from "@/assets/head-parts/Frontal.svg"
import OcciptalImage from "@/assets/head-parts/Occipital.svg"
import ParietalImage from "@/assets/head-parts/Parietal.svg"
import TemporalImage from "@/assets/head-parts/Temporal.svg"
import SkinSkeleton from "@/assets/skin-skeleton.png";
import skinAnalyserFaqData from "../../assets/json/SkinAnalyser_Faq.json";
import skinCareProductsData from "../../assets/json/SkinCareProducts.json";
import facewashImg from "@/assets/products/facewash.jpg"
import serumImg from "@/assets/products/face-serum.jpg"
import moisturizerImg from "@/assets/products/moisturizer.jpg"

// Image mapping for products
const productImages: { [key: number]: any } = {
  1: moisturizerImg,  // Moisturizer
  2: facewashImg,     // Face Wash
  3: serumImg,        // Face Serum
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
  { id: "parameters", color: "teal-950" },
  { id: "insights", color: "white" },
  { id: "faq", color: "teal-950" },
];

const coreParameters = [
  {
    id: 1,
    icon: acneIcon,
    title: "Acne",
    description: "Identifies active acne and breakout-prone areas for preventive care.",
  },
  {
    id: 2,
    icon: wrinklesIcon,
    title: "Wrinkles",
    description: "Detects fine lines and deep wrinkles for age-related insights.",
  },
  {
    id: 3,
    icon: pigmentationIcon,
    title: "Pigmentation",
    description: "Highlights uneven skin tone, dark patches, and hyperpigmentation.",
  },
  {
    id: 4,
    icon: darkSpotsIcon,
    title: "Dark Spots",
    description: "Locates visible dark spots and under-eye circles for targeted treatment.",
  },
  {
    id: 5,
    icon: poresIcon,
    title: "Pores",
    description: "Analyzes pore size and distribution for texture refinement needs.",
  },
  {
    id: 6,
    icon: rednessIcon,
    title: "Redness",
    description: "Detects skin redness and irritation for sensitivity monitoring.",
  },
  {
    id: 7,
    icon: oilinessIcon,
    title: "Oiliness",
    description: "Evaluates sebum levels, especially in the T-zone, to manage oily skin.",
  },
  {
    id: 8,
    icon: skinTextureIcon,
    title: "Skin Texture",
    description: "Assesses smoothness and surface irregularities for quality of skin.",
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

const faqData = skinAnalyserFaqData.faqs;

export default function Page() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const { openCalendly } = useCalendly();
  const [activeFaq, setActiveFaq] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const products = skinCareProductsData.products;
  const categories = skinCareProductsData.categories;

  // Filter products based on active category
  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(product => product.category.includes(activeCategory));

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

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
                Skin Analyser For Hair Salons

              </Typography>
              <Typography className="hero-subtitle text-white max-w-2xl">
                Instant, Accurate & Personalized Skin Analysis in under 10 seconds.
              </Typography>
            </div>

            <div className="hero-image flex-1 items-centers justify-center flex ">
              <Image
                src={SkinSkeleton}
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

          <Typography className=" !mt-16 max-w-2xl text-center text-teal-950" variant={"h1"}>
            Core Features
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
                            <Image src={item.icon} alt="Icon" width={50} height={50} className="text-teal-950 h-10 w-10 object-contain" />
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
          <div className="hidden md:grid grid-cols-4 gap-6 mt-10 max-w-[1300px]">
            {coreParameters.map((item) => (
              <div key={item.id} className="p-6 w-full rounded-3xl bg-white relative border shadow-lg">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="flex items-center gap-4 w-full">
                    <div className="icon">
                      <Image src={item.icon} alt="Icon" width={60} height={60} className="text-teal-950 h-12 w-full object-contain" />
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

      {/* Section 3 - Personalized Skincare Recommendations (Dark Background) */}
      <div className="bg-black w-full flex items-center justify-center relative overflow-hidden" id="insights">
        <DarkGradientCircles overflowHidden={true} />
        <div className="flex max-w-[1400px] flex-col pt-20 pb-20 items-center justify-center w-full p-4">
          <div className="recommendations z-[100] mb-20 md:mt-0 min-h-screen h-full items-center justify-center flex flex-col md:p-0">
            <Typography
              className="recommendations-title text-white text-center"
              variant={"h1"}
            >
              Personalized Skincare Recommendations
            </Typography>

            <Typography className="recommendations-subtitle text-white !mt-4 max-w-4xl text-center" variant={"content"}>
              Based on your skin analysis results, our AI recommends the most suitable products for your specific skin concerns and type.
            </Typography>

            {/* Filter Tabs */}
            <div className="filter-tabs flex flex-wrap justify-center gap-4 mt-16 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${activeCategory === category.id
                    ? "bg-teal-950 text-white"
                    : "bg-white text-teal-950 hover:bg-teal-950 hover:text-white"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl w-full">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card bg-white rounded-2xl p-6 shadow-lg">
                  <div className="product-image rounded-lg h-80 mb-4 overflow-hidden">
                    {productImages[product.id] ? (
                      <Image
                        src={productImages[product.id]}
                        alt={product.name}
                        width={300}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                        <span className="text-white text-sm">Product Image</span>

                      </div>
                    )}
                  </div>
                  <div className="product-tagline text-teal-950 text-sm font-medium mb-2 italic">
                    "{product.tagline}"
                  </div>
                  <Typography variant="subheading" className="text-teal-950 font-semibold mb-2">
                    {product.name}
                  </Typography>
                  <Typography variant="content" className="text-black">
                    {product.description}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="cta-section mt-16 text-center">
              <Typography variant="content" className="text-white mb-6">
                Get personalized product recommendations based on your unique skin analysis
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
    </div >
  );
}