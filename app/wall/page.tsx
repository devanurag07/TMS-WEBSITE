"use client";
import "../index.css";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Typography } from "@/components/typography/typography";
import { useCalendly } from "@/lib/features/calendly/context/CalendlyContext";

import tryMyStyleLogo from "@/assets/trymystyle_logo_white_long.png";

import laaPolky from "@/assets/wall/laa-polky.jpeg";
import rajulsBelleza from "@/assets/wall/rajuls-belleza.jpeg";
import artistSalon from "@/assets/wall/artist-salon.jpeg";
import lucaPiattelli from "@/assets/wall/luca-piattelli.jpeg";
import rcStudios from "@/assets/wall/rc-studios.jpeg";
import duskSalon from "@/assets/wall/dusk-salon.jpeg";
import dcubeSalon from "@/assets/wall/dcube.jpeg";

type WallItem = {
  image: StaticImageData;
  name: string;
  location?: string;
  description?: string;
};

const stats = [
  { value: "60+", label: "Installations" },
  { value: "25+", label: "Cities" },
  { value: "5+", label: "Countries" },
];

const wallItems: WallItem[] = [
  {
    image: laaPolky,
    name: "Laa Polky Stories by Raniwala 1881",
    location: "Gurgaon",
    description:
      "A beautifully integrated setup that blends technology with the jewellery-inspired aesthetic. The framing, lighting and surrounding frames make the consultation area feel like part of the brand experience.",
  },
  {
    image: rajulsBelleza,
    name: "Rajul's Belleza",
    location: "Nashik",
    description:
      "A sleek, dark-toned setup that makes the consultation area feel modern and premium. Strong visual focal point while keeping the space refined.",
  },
  {
    image: artistSalon,
    name: "Artist Salon",
    description:
      "A clean consultation wall that puts transformation at the centre of the experience. The bold messaging makes the space feel like an intentional part of the client journey.",
  },
  {
    image: lucaPiattelli,
    name: "Luca Piattelli",
    description:
      "The mirror is framed as the centrepiece, with the bold black surround creating a striking visual anchor. The layered framing ties it seamlessly into the salon's surrounding mirrors and aesthetic.",
  },
  {
    image: rcStudios,
    name: "RC Studios",
    location: "Bhopal",
    description:
      "A dedicated AI consultation corner designed as part of the salon's signature pink aesthetic. The soft, playful setting makes the consultation feel like an experience in itself.",
  },
  {
    image: duskSalon,
    name: "Dusk Salon",
    location: "Jaipur",
    description:
      "A compact, mobile setup that fits naturally into the retail environment. Positioned alongside the product display, it brings consultation closer to the client's purchase journey.",
  },
  {
    image: dcubeSalon,
    name: "DCUBE Salon",
    location: "Chalakudy",
    description:
      "A bold, colour-led space where technology blends naturally into the salon's design. The setup turns a functional station into a more immersive client experience.",
  },
];

// The CTA tile fills whatever is left of the last grid row, so the grid always ends evenly.
// Literal class names so Tailwind picks them up.
const ctaSpanSm = wallItems.length % 2 === 0 ? "sm:col-span-2" : "";
const ctaSpanLg = ["lg:col-span-3", "lg:col-span-2", "lg:col-span-1"][wallItems.length % 3];

const faqs = [
  {
    question: "How is the mirror installed?",
    answer:
      "The mirror comes with a wall-mounting system and step-by-step video installation instructions. Our team can also guide you through the installation if required.",
  },
  {
    question: "Can the mirror be installed on a movable stand?",
    answer:
      "Yes. In addition to wall mounting, the mirror can be installed on a movable stand, available at an additional cost. This gives salons greater flexibility to reposition it within the space.",
  },
  {
    question: "Can your team help us decide the right placement?",
    answer:
      "Yes. Our team can help identify the most suitable position based on your salon layout, styling stations and client flow.",
  },
  {
    question: "What do we need to prepare before installation?",
    answer:
      "Our team can guide you on the requirements for your chosen setup, including placement, lights, power and connectivity.",
  },
];

export default function Wall() {
  const { openCalendly } = useCalendly();
  const [activeFaq, setActiveFaq] = useState("");

  const handleFaqClick = (key: string) => {
    setActiveFaq(activeFaq === key ? "" : key);
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center flex-col relative">
      <Navbar />

      <section id="wall" className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 pt-36 md:pt-44 pb-16 md:pb-24">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <Typography
                variant="subheading"
                className="text-gray-500 text-base md:text-xl uppercase tracking-wider"
              >
                Installations
              </Typography>
              <Typography
                as="h1"
                className="text-teal-950 !mt-4 flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2"
                variant={"h1"}
              >
                <span className="sr-only">The Try My Style</span>
                {/* Logo is white-on-transparent, so mask it to render in brand teal */}
                <span
                  aria-hidden="true"
                  className="block bg-teal-950 h-9 sm:h-10 md:h-14 lg:h-16 aspect-[1140/166]"
                  style={{
                    WebkitMaskImage: `url(${tryMyStyleLogo.src})`,
                    maskImage: `url(${tryMyStyleLogo.src})`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                  }}
                />
                <span>Wall</span>
              </Typography>
              <Typography className="text-gray-600 !mt-5" variant={"content"}>
                From Delhi to the Middle East &amp; Europe, our Smart Mirrors are already transforming
                salon spaces. A selection of partner salons and how they have integrated the mirror into
                their client experience.
              </Typography>
            </div>

            <dl className="grid grid-cols-3 divide-x divide-gray-200 border-y border-gray-200 lg:min-w-[440px]">
              {stats.map((stat) => (
                <div key={stat.label} className="py-5 px-4 first:pl-0 md:px-6">
                  <dt className="inter text-xs md:text-sm uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </dt>
                  <dd className="poppins text-3xl md:text-4xl font-semibold text-teal-950 mt-1">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-14 md:mt-20">
            {wallItems.map((item) => (
              <article
                key={item.name}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200 transition-shadow duration-300 hover:shadow-xl hover:shadow-teal-950/10"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={`Try My Style Smart Mirror at ${item.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-6 md:p-7">
                  <h2 className="poppins text-teal-950 text-xl md:text-2xl font-semibold leading-snug">
                    {item.name}
                  </h2>
                  {item.location && (
                    <p className="inter text-gray-500 text-base mt-2 flex items-center gap-1">
                      <MapPin size={16} /> {item.location}
                    </p>
                  )}
                  {item.description && (
                    <p className="inter text-gray-600 text-base md:text-lg leading-relaxed mt-4">
                      {item.description}
                    </p>
                  )}
                </div>
              </article>
            ))}

            {/* CTA tile — spans the remaining columns of the last row so the grid ends evenly */}
            <div className={`relative rounded-2xl bg-teal-950 p-8 md:p-10 ${ctaSpanSm} ${ctaSpanLg} min-h-[280px] flex flex-col justify-between overflow-hidden`}>
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#00A5A5]/20 blur-3xl pointer-events-none" />
              <p className="inter text-xs uppercase tracking-wider text-white/60 relative">Join the network</p>
              <div className="relative max-w-md">
                <p className="poppins text-white text-2xl md:text-4xl font-semibold leading-tight">
                  Your salon could be next.
                </p>
                <p className="inter text-white/70 text-sm md:text-base mt-3">
                  See how the Smart Mirror fits into your space with a personalised demo.
                </p>
                <button
                  type="button"
                  onClick={() => openCalendly?.()}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-teal-950 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[#00A5A5] hover:text-white"
                >
                  Book a demo <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="faq"
        className="w-full flex justify-center items-center bg-white p-4 md:p-20 relative overflow-hidden z-[150]"
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
                Installation
                <br />
                FAQs.
              </Typography>
            </div>

            <div className="space-y-3 flex-3 w-full flex flex-col">
              {faqs.map((data) => (
                <div key={data.question} className="w-full">
                  <button
                    className="w-full bg-white hover:bg-gray-200 p-3 shadow-2xl rounded-lg justify-between items-center group transition-all duration-300"
                    onClick={() => handleFaqClick(data.question)}
                  >
                    <div className="w-full h-full text-teal-950 flex justify-between">
                      <Typography variant="content" className="text-left font-semibold">
                        {data.question}
                      </Typography>

                      <div className="w-[10px]"></div>

                      <span
                        className={`text-2xl transition-transform duration-300 ${activeFaq === data.question ? "rotate-45 !text-red-500" : ""}`}
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
                      <Typography variant="content" className="text-left text-white">
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
