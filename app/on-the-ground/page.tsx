"use client";

import "../index.css";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Typography } from "@/components/typography/typography";
import DarkGradientCircles from "@/components/DarkGradientCircles";
import { useCalendly } from "@/lib/features/calendly/context/CalendlyContext";
import { MapPin, Calendar } from "lucide-react";
import { partnerVisits } from "@/data/partner-visits";

export default function OnTheGroundPage() {
  const { openCalendly } = useCalendly();

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center flex-col relative">
      <Navbar />

      {/* Section 1 — Hero */}
      <section
        id="hero"
        className="w-full min-h-screen flex justify-center items-center bg-black relative overflow-hidden px-4 md:px-20"
      >
        <DarkGradientCircles overflowHidden={false} />
        <div className="max-w-[1100px] w-full relative z-[100] py-32 md:py-40">
          <span className="text-[#00A5A5] font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6 block">
            On the Ground
          </span>
          <Typography
            variant="h1"
            as="h1"
            className="text-white mb-8 max-w-[900px]"
          >
            Building Try My Style,
            <br />
            One Salon at a Time.
          </Typography>
          <Typography
            variant="content"
            className="text-gray-400 max-w-[640px] !mt-0"
          >
            We travel across India to meet salon &amp; brand owners in person,
            understanding their floors, their customers, and building the
            partnerships behind every mirror we install.
          </Typography>
        </div>
      </section>

      {/* Section 2 — Partner cards */}
      <section
        id="visits"
        className="w-full flex justify-center items-center bg-white relative z-[100] px-4 md:px-20"
      >
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] w-full py-20 md:py-28 relative z-10">
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <Typography variant="h2" as="h2" className="text-teal-950 mb-3">
              Partnerships in the Making
            </Typography>
            <Typography
              variant="content"
              className="text-gray-500 !mt-0 max-w-[560px] mx-auto md:mx-0"
            >
              Moments from the road — the people and places shaping Try My Style.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {partnerVisits.map((visit) => (
              <article
                key={visit.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-200/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
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
                    className="text-teal-950 mb-1.5 group-hover:text-[#00A5A5] transition-colors"
                  >
                    {visit.heading}
                  </Typography>
                  <Typography
                    variant="content"
                    className="text-gray-500 !mt-0 text-sm md:text-base mb-4"
                  >
                    {visit.subheading}
                  </Typography>
                  <div className="mt-auto flex flex-col gap-2 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin size={14} className="text-[#00A5A5] shrink-0" />
                      <span>{visit.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={14} className="text-[#00A5A5] shrink-0" />
                      <span>{visit.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Footer */}
      <Footer openCalendly={openCalendly} />
    </div>
  );
}
