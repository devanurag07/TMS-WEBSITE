"use client";
import Image from "next/image";
import "./index.css";

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
import DeploymentsSection from "@/components/DeploymentsSection";
import CustomerBehaviourSection from "@/components/CustomerBehaviourSection";
import MirrorImage from "@/assets/mirror_homepage.png";
import { partnerVisits } from "@/data/partner-visits";
import { MapPin, Calendar } from "lucide-react";

// Client logos - International
import logoMaletti from "@/assets/clients-logos/international/MALETTI.png";
import logoDivaLounge from "@/assets/clients-logos/international/DIVA LOUNGE.png";
import logoFrancisBeauty from "@/assets/clients-logos/international/FRANCIS SALON.jpeg";
import logoKteis from "@/assets/clients-logos/international/kteis-logo.png";

// Client logos - Salon Chains India
import logoFlorianHurel from "@/assets/clients-logos/salon-chains-india/FLORIAN HUREL SALON.png";
import logoCutAndStyle from "@/assets/clients-logos/salon-chains-india/CUT & STYLE SALON.png";
import logoLooks from "@/assets/clients-logos/salon-chains-india/LOOKS SALON.png";
import logoPage3 from "@/assets/clients-logos/salon-chains-india/PAGE 3 SALON.png";
import logoNaturals from "@/assets/clients-logos/salon-chains-india/NATURALS.png";
import logoNaturalsSignature from "@/assets/clients-logos/salon-chains-india/NATURALS SIGNATURE.png";
import logoLucaPiattelli from "@/assets/clients-logos/salon-chains-india/LUCA PIATTELLI.png";
import logoHairMasters from "@/assets/clients-logos/salon-chains-india/HAIR MASTERS.jpg";
import logoPlaySalon from "@/assets/clients-logos/salon-chains-india/PLAY SALON.png";
import logoTheArtistSalon from "@/assets/clients-logos/salon-chains-india/THE ARTIST SALON.png";
import logoPortfolioSalon from "@/assets/clients-logos/salon-chains-india/PORTFOLIO SALON.jpeg";
import logoMarcSalon from "@/assets/clients-logos/standalone-salons-india/marc.png";

// Client logos - Partners
import logoMarc from "@/assets/clients-logos/partners/marc.png";
import logoMirrar from "@/assets/clients-logos/partners/mirrar.png";

// Client logos - Standalone Salons India
import logoClnz from "@/assets/clients-logos/standalone-salons-india/CLNZ.png";
import logoDiona from "@/assets/clients-logos/standalone-salons-india/DIONA.png";
import logoOqDerm from "@/assets/clients-logos/standalone-salons-india/OQ DERM.png";
import logoRcStudios from "@/assets/clients-logos/standalone-salons-india/RC STUDIOS.png";
import logoHipster from "@/assets/clients-logos/standalone-salons-india/HIPSTER.png";
import logoShivanjali from "@/assets/clients-logos/standalone-salons-india/SHIVANJALI WELLNESS.png";
import logoTheLittleHairSalon from "@/assets/clients-logos/standalone-salons-india/THE LITTLE HAIR SALON.png";
import logoAndhamSalon from "@/assets/clients-logos/standalone-salons-india/ANDHAM SALON.png";
import logoAkshGlamStudio from "@/assets/clients-logos/standalone-salons-india/AKSH GLAM STUDIO.png";
import logoLaNova from "@/assets/clients-logos/standalone-salons-india/LA NOVA.png";
import logoAureSalon from "@/assets/clients-logos/standalone-salons-india/AURE SALON.png";
import logoRajuls from "@/assets/clients-logos/standalone-salons-india/RAJULS.jpeg";
import logoOrum from "@/assets/clients-logos/salon-chains-india/orum.png";

import PresenceMapSection from "@/components/PresenceMapSection";

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
    className={`w-0 h-0 - md:w-3 md:h-3 rounded-full transition-all duration-300 z-[9999] ${active ? `bg-${color} scale-125` : `bg-gray-400 hover:bg-${color}-400`
      }`}
  />
);

type BrandLogo = { name: string; logo: typeof logoMaletti };

const internationalBrands: BrandLogo[] = [
  { name: "Maletti", logo: logoMaletti },
  { name: "Diva Lounge", logo: logoDivaLounge },
  { name: "Francis Beauty", logo: logoFrancisBeauty },
  { name: "KTEIS", logo: logoKteis },
];

const salonChainsIndiaBrands: BrandLogo[] = [
  { name: "Florian Hurel", logo: logoFlorianHurel },
  { name: "Cut & Style", logo: logoCutAndStyle },
  { name: "LOOKS", logo: logoLooks },
  { name: "Page 3", logo: logoPage3 },
  { name: "Naturals", logo: logoNaturals },
  { name: "Naturals Signature", logo: logoNaturalsSignature },
  { name: "Luca Piattelli", logo: logoLucaPiattelli },
  { name: "Hair Masters", logo: logoHairMasters },
  { name: "Play Salon", logo: logoPlaySalon },
  { name: "The Artist Salon", logo: logoTheArtistSalon },
  { name: "Portfolio Salon", logo: logoPortfolioSalon },
];

const partnerBrands: BrandLogo[] = [
  { name: "MARC", logo: logoMarc },
  { name: "MIRRAR", logo: logoMirrar },
];

const standaloneSalonsIndiaBrands: BrandLogo[] = [
  { name: "CLNZ", logo: logoClnz },
  { name: "Diona", logo: logoDiona },
  { name: "OQ Derm", logo: logoOqDerm },
  { name: "RC Studios", logo: logoRcStudios },
  { name: "Hipster Salon", logo: logoHipster },
  { name: "Shivanjali Wellness", logo: logoShivanjali },
  { name: "The Little Hair Salon", logo: logoTheLittleHairSalon },
  { name: "Andham Salon", logo: logoAndhamSalon },
  { name: "Aksh Glam Studio", logo: logoAkshGlamStudio },
  { name: "La Nova", logo: logoLaNova },
  { name: "Aure Salon", logo: logoAureSalon },
  { name: "Rajuls", logo: logoRajuls },
  { name: "ORUM", logo: logoOrum },
];

const brandCategories = [
  { title: "International", brands: internationalBrands },
  { title: "Salon Chains · India", brands: salonChainsIndiaBrands },
  { title: "Partners", brands: partnerBrands },
  { title: "Standalone Salons · India", brands: standaloneSalonsIndiaBrands },
];

const sections = [
  { id: "hero", color: "white" },
  { id: "brands", color: "teal-950" },
  { id: "our-presence", color: "white" },
  { id: "deployments", color: "teal-950" },
  { id: "on-ground", color: "white" },
  { id: "features", color: "teal-950" },
  { id: "benefits", color: "white" },
  { id: "comparison", color: "teal-950" },
  { id: "faq", color: "white" },
  { id: "contact", color: "teal-950" },
  { id: "cta", color: "white" },
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reason, setReason] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const gifs: GifData[] = [
    {
      url: "/gifs/first1.mp4",
      alt: "Smart Mirror Demo 1",
      text: "Sleek Design",
    },
    {
      url: "/gifs/first2.mp4",
      alt: "Smart Mirror Demo 2",
      text: "Dual-function",
    },
    {
      url: "/gifs/first3.mp4",
      alt: "Smart Mirror Demo 3",
      text: "New age consultation",
    },
  ];

  const sendContactUsEmail = async (
    name: string,
    email: string,
    message: string,
    reason: string
  ) => {
    if (!email || !name || !message || !reason) {
      alert("Please fill all the fields");
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "c4f731a6-f7a9-4636-886d-bdd7b5ba7aef",
        name,
        email,
        phone_number,
        message,
        reason,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setShowSuccessDialog(true);
      setName("");
      setEmail("");
      setMessage("");
      setReason("");
      setPhone_number("");
    } else {
      alert("Failed to send email");
    }
  };

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

      <div
        id="hero"
        className="section-1 w-full overflow-hidden  flex justify-center items-center bg-black relative px-4 md:px-20"
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
                    Leveraging the strength of{" "}
                    <span className="text-[#00A5A5] font-semibold">GenAI</span>,
                    providing personalized and highly realistic Virtual Try-On
                    solutions, catering to Fashion & Beauty Tech Industries.
                  </Typography>

                  {/* <p className="text-xl text-gray-400 max-w-[600px] mb-8 leading-relaxed">
                  Leveraging the strength of GenAI, providing personalized and highly
                  realistic Virtual Try-On solutions, catering to Fashion & Beauty Tech
                  Industries.
                </p> */}
                  <div className="button">
                    <button
                      className="bg-white border-2 border-teal-950 text-teal-950 px-12 py-4 rounded-xl text-3xl font-semibold hover:bg-teal-950 hover:text-white transition-all duration-300 shadow-lg shadow-[#00A5A5]/20 hover:shadow-[#00A5A5]/40 hover:scale-105"
                      onClick={() => openCalendly?.()}
                    >
                      Try Now
                    </button>
                  </div>
                </div>

                <div className="image  flex-1 flex justify-center items-center mt-20">
                  <Image
                    src={MirrorImage}
                    alt="Mirror Image"
                    width={600}
                    height={400}
                    className="md:w-[300px] w-[200px] h-full object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Brands Section - Section 2 */}
      <div
        id="brands"
        className="w-full z-100 overflow-hidden flex justify-center items-center bg-white py-16 md:py-24 px-4 md:px-20"
      >
        <section className="md:max-w-[1400px] w-full">
          <Typography
            variant="h1"
            className="text-teal-950 text-center mb-12 md:mb-16"
          >
            Brands we have worked with
          </Typography>

          {brandCategories.map((category) => (
            <div key={category.title} className="mb-12 md:mb-16 last:mb-0">
              <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="h-px flex-1 bg-teal-950/10" />
                <Typography
                  as="h3"
                  variant="h4"
                  className="text-black text-center shrink-0 !text-2xl sm:!text-2xl md:!text-3xl !font-bold tracking-wide"
                >
                  {category.title}
                </Typography>
                <div className="h-px flex-1 bg-teal-950/10" />
              </div>
              <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-14">
                {category.brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-full max-w-[100px] sm:max-w-[120px] md:max-w-none md:w-[160px] h-[56px] sm:h-[70px] md:h-[90px] relative flex items-center justify-center mx-auto">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </section>
      </div>

      <PresenceMapSection />

      <DeploymentsSection />

      <div
        id="on-ground"
        className="w-full flex justify-center items-center bg-black relative overflow-hidden px-4 md:px-20"
      >
        <DarkGradientCircles overflowHidden={true} isStraight={false} />

        <div className="max-w-[1400px] w-full py-20 md:py-28 z-[100]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="text-[#00A5A5] font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4 block">
                On the Ground
              </span>
              <Typography variant="h1" className="text-white">
                Building Try My Style,
                <br />
                One Salon at a Time.
              </Typography>
              <Typography
                variant="content"
                className="text-gray-400 max-w-[640px]"
              >
                We travel across India to meet salon &amp; brand owners in
                person, understanding their floors, their customers, and
                building the partnerships behind every mirror we install.
              </Typography>
            </div>

            <a
              href="/on-the-ground"
              className="shrink-0 bg-white border-2 border-teal-950 text-teal-950 px-8 py-3 rounded-xl font-medium hover:bg-teal-950 hover:text-white transition-all duration-300 shadow-lg shadow-[#00A5A5]/20 hover:shadow-[#00A5A5]/40 hover:scale-105 whitespace-nowrap"
            >
              View all visits
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {partnerVisits.slice(0, 4).map((visit) => (
              <article
                key={visit.id}
                className="group flex flex-col bg-gradient-to-br from-[#001A1A] to-[#003333] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={visit.image}
                    alt={`${visit.heading} — ${visit.location}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <Typography
                    variant="h4"
                    as="h3"
                    className="text-white mb-1.5 group-hover:text-teal-400 transition-colors"
                  >
                    {visit.heading}
                  </Typography>
                  <Typography
                    variant="content"
                    className="text-gray-400 !mt-0 text-sm md:text-base mb-4"
                  >
                    {visit.subheading}
                  </Typography>
                  <div className="mt-auto flex flex-col gap-2 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin size={14} className="text-[#00A5A5] shrink-0" />
                      <span>{visit.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={14} className="text-[#00A5A5] shrink-0" />
                      <span>{visit.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div
        id="features"
        className="section-1 overflow-hidden 2 w-full flex justify-center items-center bg-white flex-col min-h-screen relative  px-4 md:px-20"
      >
        <div className="absolute top-[-120px] left-[-150px] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] z-[0]" />
        <div className="absolute bottom-[-120px] right-[-150px] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] z-[0]" />

        {/* Rest of your existing hero content with improved styling */}
        <div className="w-[90%] md:max-w-[1400px] w-full mt-20 mb-20 z-[1000]">
          <div className="w-full">
            <div className="mb-20">
              <Typography variant="subheading" className="text-gray-500">
                SMARTER SALONS
              </Typography>
              <Typography variant="h1" className="text-teal-950">
                Style Made Simple.
              </Typography>

              <Typography
                variant="content"
                className="text-gray-600 max-w-[600px]"
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
                  <video
                    src={gif.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`${index === activeGifIndex ? "w-[24rem]" : "w-[18rem]"
                      } h-full rounded-3xl shadow-lg object-cover`}
                  />

                  <Typography
                    variant="subheading"
                    className={`word absolute bottom-5 left-1/2 -translate-x-1/2 text-white w-full text-center text-2xl font-semibold ${index === activeGifIndex ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    {gif.text}
                  </Typography>
                  <div className="absolute inset-0 bg-[#00A5A5]/20 rounded-3xl" />
                </div>
              ))}
            </div>

            <HorizontalCarousel className="md:hidden" color="teal-950">
              {gifs.map((gif, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center transition-opacity duration-500 ${index === activeGifIndex ? "opacity-100" : "opacity-100"
                    }`}
                >
                  <div className="relative">
                    <video
                      src={gif.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-[18rem] h-full rounded-3xl shadow-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-[#00A5A5]/20 rounded-3xl" />
                    <Typography
                      variant="subheading"
                      className="text-white font-semibold absolute bottom-5 left-1/2 -translate-x-1/2"
                    >
                      {gif.text}
                    </Typography>
                  </div>
                </div>
              ))}
            </HorizontalCarousel>
          </div>
        </div>
      </div>

      <CustomerBehaviourSection />

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
        id="faq"
        className="section-4 w-full flex justify-center items-center bg-black p-4 md:p-36 min-h-[50vh] relative overflow-hidden"
      >
        <DarkGradientCircles overflowHidden={true} isStraight={false} />
        <section className="md:max-w-[1400px] w-full z-[1000]">
          <div className="mb-16 flex flex-col md:flex-row md:gap-[250px]">
            <div className="heading flex-1">
              <Typography
                variant="subheading"
                className="text-white text-xl md:text-3xl uppercase font-semibold"
              >
                FAQ
              </Typography>

              <Typography variant="h1" className="text-white mt-2 mb-12">
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
                    className="w-full bg-gradient-to-br from-[#001A1A] to-[#003333] hover:from-[#002626] hover:to-[#004040] border border-white/10 hover:border-white/20 p-3 shadow-lg shadow-black/20 rounded-lg flex justify-between items-center group transition-all duration-300"
                    onClick={() => handleFaqClick(key)}
                  >
                    <div className="w-full h-full text-white flex justify-between items-center">
                      <Typography
                        variant="content"
                        className="text-left font-semibold text-white"
                      >
                        {data.Question}
                      </Typography>

                      <div className="w-[10px]"></div>

                      <span
                        className={`text-2xl text-white transition-transform duration-300 ${activeFaq === key ? "rotate-45 !text-red-500" : ""
                          }`}
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
                    <div className="p-5 text-white bg-teal-950 border border-white/10 rounded-b-lg">
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="number"
                    placeholder=" "
                    className="w-full text-3xl bg-transparent border-b-2 border-gray-300 p-3 text-black placeholder-transparent focus:outline-none focus:border-[#00A5A5] peer transition-all duration-300"
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Phone Number
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="w-full text-3xl bg-transparent border-b-2 border-gray-300 p-3 text-black placeholder-transparent focus:outline-none focus:border-[#00A5A5] peer transition-all duration-300"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    sendContactUsEmail(name, email, message, reason);
                  }}
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

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-[90%] text-center shadow-2xl animate-in">
            <div className="w-16 h-16 mx-auto mb-6 bg-teal-100 rounded-full flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="#0f766e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-teal-950 mb-3">
              Thank You!
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              We have received your message. Our team will connect with you soon!
            </p>
            <button
              onClick={() => setShowSuccessDialog(false)}
              className="bg-teal-950 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#008585] transition-all duration-300"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
