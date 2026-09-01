"use client";

import Image, { StaticImageData } from "next/image";
import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Typography } from "@/components/typography/typography";

import pilot1 from "@/assets/pilot-deployments/1.jpg";
import pilot2 from "@/assets/pilot-deployments/2.jpg";
import pilot3 from "@/assets/pilot-deployments/3.jpg";
import pilot4 from "@/assets/pilot-deployments/4.jpg";
import pilot5 from "@/assets/pilot-deployments/5.jpg";

import ops6 from "@/assets/current-operations/6.jpg";
import ops7 from "@/assets/current-operations/7.jpg";
import ops8 from "@/assets/current-operations/8.jpg";
import ops9 from "@/assets/current-operations/9.jpg";
import ops10 from "@/assets/current-operations/10.jpg";
import ops11 from "@/assets/current-operations/11.jpg";
import ops12 from "@/assets/current-operations/12.jpeg";
import ops13 from "@/assets/current-operations/13.png";
import aure_salon from "@/assets/current-operations/aure-salon.jpeg";
import hairMasterSalon from "@/assets/current-operations/hairmaster-salon.jpeg";
import luca_piattelli from "@/assets/current-operations/luca-piattelli.jpeg";
import andham_salon from "@/assets/current-operations/ANDHAM-SALON.jpeg";
import qatarSalon from "@/assets/current-operations/qatar.jpeg";
import puneSalon from "@/assets/current-operations/pune.jpeg";
import hipsterSalon from "@/assets/current-operations/hipster.jpeg";
import shivanjaliSalon from "@/assets/current-operations/shivanjali.jpeg";
import lanovaSalon from "@/assets/current-operations/lanova.jpeg";
import artistSalon from "@/assets/current-operations/artist-salon.jpeg";
import artistSalonGurgaon from "@/assets/current-operations/artist-salon-1.jpeg";
import rajulsNashik from "@/assets/current-operations/rajuls-nashik.jpeg";
import playSalon from "@/assets/current-operations/PLAY-SALON.jpeg";
import natTirunelveli from "@/assets/current-operations/NAT-TIRUNELVELI.jpeg";
import natCoimbatore from "@/assets/current-operations/NAT-COIMBATORE.jpeg";
import natKozhikode from "@/assets/current-operations/NAT-KOZHIKODE.jpeg";
import natPune from "@/assets/current-operations/NAT-PUNE.jpeg";
import natBangalore from "@/assets/current-operations/NAT-BANGLORE.jpeg";
import bespokeSalon from "@/assets/current-operations/BESPOKE.jpeg";
import natChennai from "@/assets/current-operations/NAT-CHENNAI.jpeg";
import mirrarSalon from "@/assets/current-operations/RANIWALA JEWELLERY.jpeg";
import marcSalon from "@/assets/current-operations/MARC-SALON.jpeg";
import orumSalon from "@/assets/current-operations/ORUM.jpeg";

const PREVIEW_COUNT = 7;

type DeploymentItem = {
  id: number;
  image: StaticImageData;
  name: string;
  location: string;
  isUpcoming?: boolean;
  featured?: boolean;
};

type DeploymentRegion = {
  title: string;
  states: string[];
  items: DeploymentItem[];
};

function sortDeployments(items: DeploymentItem[]): DeploymentItem[] {
  const operational = items.filter((item) => !item.isUpcoming);
  const upcoming = items.filter((item) => item.isUpcoming);
  return [...operational, ...upcoming];
}

function formatRegionHeading(title: string, states: string[]) {
  return `${title} — (${states.join(", ")})`;
}

const pilotDeployments: DeploymentItem[] = [
  { id: 1, image: pilot1, name: "Eternal Salon", location: "Pune" },
  { id: 2, image: pilot2, name: "Page 3 Luxury Salon", location: "Hyderabad" },
  { id: 3, image: pilot3, name: "Page 3 Luxury Salon", location: "Hyderabad" },
  { id: 4, image: pilot4, name: "LOOKS Privé", location: "Delhi" },
  { id: 5, image: pilot5, name: "LOOKS Salon", location: "Delhi" },
];

const internationalOperations: DeploymentItem[] = [
  { id: 11, image: ops11, name: "Maletti S.P.A.", location: "Reggio Emilia", featured: true },
  { id: 14, image: qatarSalon, name: "Diva Lounge Spa", location: "Doha", featured: false },
  { id: 28, image: ops12, name: "Francis Beauty", location: "Kuwait", isUpcoming: true },
  { id: 32, image: ops12, name: "Kteis Hair IKE", location: "Thessaloniki", isUpcoming: true },
];

const domesticRegions: DeploymentRegion[] = [
  {
    title: "North",
    states: ["Delhi", "Uttar Pradesh", "Chandigarh", "Punjab", "Haryana", "Rajasthan", "Jammu & Kashmir"],
    items: [
      { id: 10, image: ops10, name: "Diona Artisan Salon", location: "Noida" },
      { id: 7, image: ops7, name: "CLNZ Salon", location: "New Delhi" },
      { id: 13, image: ops13, name: "Luca Piattelli", location: "New Delhi" },
      { id: 17, image: hairMasterSalon, name: "Hair Masters Salon", location: "Chandigarh" },
      { id: 22, image: artistSalon, name: "Artist Salon", location: "Zirakpur" },
      { id: 30, image: artistSalonGurgaon, name: "Artist Salon", location: "Gurgaon" },
      { id: 29, image: ops12, name: "Portfolio Salon", location: "New Delhi", isUpcoming: true },
      { id: 34, image: ops12, name: "Hoor Salon", location: "Pathankot", isUpcoming: true },
      { id: 35, image: ops12, name: "Dusk Salon", location: "Jaipur", isUpcoming: true },
      { id: 39, image: ops12, name: "Nexa Bella", location: "Pulwama", isUpcoming: true },
    ],
  },
  {
    title: "South",
    states: ["Karnataka", "Andhra Pradesh", "Kerala", "Tamil Nadu", "Telangana"],
    items: [
      { id: 8, image: ops8, name: "Cut & Style Salon", location: "Bengaluru" },
      { id: 23, image: andham_salon, name: "Andham Salon", location: "Vuyyuru" },
      { id: 24, image: aure_salon, name: "Aure Salon", location: "Kochi" },
      { id: 41, image: natTirunelveli, name: "Naturals NXT", location: "Tirunelveli" },
      { id: 42, image: natChennai, name: "Naturals Signature", location: "Chennai" },
      { id: 43, image: natKozhikode, name: "PAGE 3", location: "Kozhikode" },
      { id: 45, image: natCoimbatore, name: "Naturals Signature", location: "Coimbatore" },
      { id: 46, image: natBangalore, name: "Naturals Signature", location: "Bengaluru" },
      { id: 49, image: bespokeSalon, name: "BE-SPOKE", location: "Chennai" },
      { id: 15, image: playSalon, name: "Play Salon", location: "Bengaluru" },
      { id: 52, image: orumSalon, name: "ORUM", location: "Hyderabad" },
      { id: 31, image: ops12, name: "Aira Salon", location: "Mangalore", isUpcoming: true },
      { id: 47, image: ops12, name: "PAGE 3", location: "Kochi", isUpcoming: true },
      { id: 44, image: ops12, name: "Naturals NXT", location: "Kollam", isUpcoming: true },
      { id: 40, image: ops12, name: "Blowout Salon", location: "Bengaluru", isUpcoming: true },
    ],
  },
  {
    title: "Center-West",
    states: ["Madhya Pradesh", "Maharashtra", "Gujarat"],
    items: [
      { id: 6, image: ops6, name: "RC Studios", location: "Bhopal" },
      { id: 21, image: luca_piattelli, name: "Luca Piattelli", location: "Mumbai" },
      { id: 20, image: puneSalon, name: "The Little Hair Salon", location: "Pune" },
      { id: 12, image: lanovaSalon, name: "La Nova Salon", location: "Ahmedabad" },
      { id: 14, image: hipsterSalon, name: "Hipster Salon", location: "Thane" },
      { id: 18, image: shivanjaliSalon, name: "Shivanjali Wellness", location: "Bhavnagar" },
      { id: 34, image: rajulsNashik, name: "Rajuls Belleza", location: "Nashik" },
      { id: 48, image: natPune, name: "Naturals NXT", location: "Pune" },
      { id: 33, image: ops12, name: "Amiro Salon", location: "Surat", isUpcoming: true },
      { id: 36, image: ops12, name: "Delnaaz", location: "Sambhajinagar", isUpcoming: true },
      { id: 37, image: ops12, name: "Delnaaz", location: "Navi Mumbai", isUpcoming: true },
    ],
  },
  {
    title: "East",
    states: ["West Bengal", "Bihar", "Odisha"],
    items: [
      { id: 9, image: ops9, name: "OQ Derm", location: "Kolkata" },
      { id: 19, image: ops12, name: "Aks Salon", location: "Darbhanga", isUpcoming: true },
      { id: 53, image: ops12, name: "TrimX Studios", location: "Kharagpur", isUpcoming: true },
      { id: 38, image: ops12, name: "Jawed Habib", location: "Bhubaneshwar", isUpcoming: true },
    ],
  },
];

const partnerOperations: DeploymentItem[] = [
  { id: 50, image: mirrarSalon, name: "Raniwala Jewellery", location: "Gurgaon" },
  { id: 55, image: ops12, name: "Hair Originals", location: "Gurgaon", isUpcoming: true },
  { id: 51, image: marcSalon, name: "MARC", location: "Kochi" },
];

function ShowMoreCard({
  expanded,
  onClick,
}: {
  expanded: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-2xl overflow-hidden border-2 border-dashed border-teal-950/25 shadow-lg group relative min-h-[200px] h-full w-full flex flex-col items-center justify-center gap-3 bg-teal-50/60 hover:bg-teal-950 hover:border-teal-950 transition-all duration-300 hover:scale-[1.02]"
    >
      <span className="text-teal-950 group-hover:text-white font-semibold text-sm md:text-base">
        {expanded ? "Show less" : "Show more"}
      </span>
      <ChevronDown
        size={22}
        className={`text-teal-950 group-hover:text-white transition-transform duration-300 ${expanded ? "rotate-180" : "group-hover:translate-y-0.5"}`}
      />
    </button>
  );
}

function ExpandableGrid({
  items,
  renderItem,
}: {
  items: DeploymentItem[];
  renderItem: (item: DeploymentItem) => ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const sortedItems = sortDeployments(items);
  const hasMore = sortedItems.length > PREVIEW_COUNT;
  const visible = expanded ? sortedItems : sortedItems.slice(0, PREVIEW_COUNT);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-8 gap-6">
      {visible.map((item) => renderItem(item))}
      {hasMore && (
        <ShowMoreCard
          expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
        />
      )}
    </div>
  );
}

const DeploymentsSection = () => {
  return (
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

          <div className="mb-12">
            <Typography className="text-teal-800 mb-6" variant="content">
              {formatRegionHeading("International", ["Italy", "Qatar", "Kuwait", "Greece"])}
            </Typography>
            <ExpandableGrid
              items={internationalOperations}
              renderItem={(item) => (
                <OperationCard key={item.id} item={item} featured={item.featured} />
              )}
            />
          </div>

          <div className="space-y-12">
            {domesticRegions.map((region) => (
              <div key={region.title}>
                <Typography className="text-teal-800 mb-6" variant="content">
                  {formatRegionHeading(region.title, region.states)}
                </Typography>
                <ExpandableGrid
                  items={region.items}
                  renderItem={(item) => (
                    <OperationCard
                      key={`${item.id}-${item.name}-${item.location}`}
                      item={item}
                    />
                  )}
                />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Typography className="text-teal-800 mb-6" variant="content">
              Partners
            </Typography>
            <ExpandableGrid
              items={partnerOperations}
              renderItem={(item) => (
                <OperationCard
                  key={`${item.id}-${item.name}-${item.location}`}
                  item={item}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-4 mb-8">
            <Typography className="text-teal-950" variant="subheading">
              Pilot Deployments
            </Typography>
          </div>
          <ExpandableGrid
            items={pilotDeployments}
            renderItem={(item) => (
              <OperationCard key={item.id} item={item} />
            )}

          />
        </div>
      </div>
    </div>
  );
};

function OperationCard({
  item,
  featured = false,
}: {
  item: DeploymentItem;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border shadow-lg group relative ${featured ? "col-span-2" : ""}`}
    >
      <div className="relative w-full h-[200px]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover h-[300px] transition-transform duration-500 group-hover:scale-105"
        />
        {item.isUpcoming && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <span className="bg-yellow-200/90 text-yellow-800 px-2 py-0.5 rounded text-[13px] font-semibold border border-yellow-300 shadow-sm flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="5" y="2" width="14" height="18" rx="3" />
                <path d="M9 21h6" strokeLinecap="round" />
                <path d="M12 6v6" strokeLinecap="round" />
                <circle cx="12" cy="15" r="1" fill="currentColor" />
              </svg>
              Coming Soon
            </span>
          </div>
        )}



        {!item.isUpcoming && <div className="absolute inset-0 bg-[#008080]/40" />}
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
  );
}

export default DeploymentsSection;
