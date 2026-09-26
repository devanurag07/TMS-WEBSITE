"use client";

import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Typography } from "@/components/typography/typography";
import indiaGeoJson from "@/assets/geojson/in.json";

type MapMarker = {
  name: string;
  coordinates: [number, number];
  labelOffset: { x: number; y: number };
  anchor: "start" | "middle" | "end";
  count: number;
};

const operationalMarkers: MapMarker[] = [
  {
    name: "Noida",
    coordinates: [77.45, 28.53],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Delhi NCR",
    coordinates: [77.1, 28.7],
    labelOffset: { x: -12, y: 4 },
    anchor: "end",
    count: 5,
  },
  {
    name: "Bhopal",
    coordinates: [77.4126, 23.2599],
    labelOffset: { x: 0, y: -12 },
    anchor: "middle",
    count: 1,
  },
  {
    name: "Kolkata",
    coordinates: [88.3639, 22.5726],
    labelOffset: { x: 0, y: -12 },
    anchor: "middle",
    count: 1,
  },
  {
    name: "Bangalore",
    coordinates: [77.5946, 12.9716],
    labelOffset: { x: 0, y: -30 },
    anchor: "middle",
    count: 5,
  },
  {
    name: "Mumbai",
    coordinates: [72.8777, 19.076],
    labelOffset: { x: -12, y: 4 },
    anchor: "end",
    count: 3,
  },
  {
    name: "Kochi",
    coordinates: [76.2673, 9.9312],
    labelOffset: { x: -12, y: 4 },
    anchor: "end",
    count: 3,
  },
  {
    name: "Chalakudy",
    coordinates: [76.332, 10.3119],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Vuyyuru",
    coordinates: [80.8444, 16.3618],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Chandigarh",
    coordinates: [76.65, 30.85],
    labelOffset: { x: -12, y: 4 },
    anchor: "end",
    count: 1,
  },
  {
    name: "Thane",
    coordinates: [72.9781, 19.2183],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Pune",
    coordinates: [73.8567, 18.5204],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 2,
  },
  {
    name: "Ahmedabad",
    coordinates: [72.5714, 23.0225],
    labelOffset: { x: 0, y: -12 },
    anchor: "middle",
    count: 1,
  },
  {
    name: "Bhavnagar",
    coordinates: [72.1519, 21.7645],
    labelOffset: { x: 0, y: -12 },
    anchor: "middle",
    count: 1,
  },
  {
    name: "Zirakpur",
    coordinates: [76.95, 30.5],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Gurgaon",
    coordinates: [77.0266, 28.4595],
    labelOffset: { x: 12, y: 14 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Chennai",
    coordinates: [80.2707, 13.0827],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 3,
  },
  {
    name: "Coimbatore",
    coordinates: [76.9558, 11.0168],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Hyderabad",
    coordinates: [78.4867, 17.385],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Nashik",
    coordinates: [73.7898, 19.9975],
    labelOffset: { x: 12, y: -8 },
    anchor: "start",
    count: 1,
  },

  {
    name: "Kollam",
    coordinates: [76.6141, 8.8932],
    labelOffset: { x: -12, y: 4 },
    anchor: "end",
    count: 2,
  },
  {
    name: "Tirunelveli",
    coordinates: [77.69, 8.7139],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 2,
  },
  {
    name: "Jaipur",
    coordinates: [75.7873, 26.9124],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Lohit",
    coordinates: [96.162, 27.913],
    labelOffset: { x: -12, y: 4 },
    anchor: "end",
    count: 1,
  },
  {
    name: "Kharagpur",
    coordinates: [87.3237, 22.346],
    labelOffset: { x: 12, y: 16 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Bhubaneswar",
    coordinates: [85.8245, 20.2961],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Surat",
    coordinates: [72.8311, 21.1702],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Mangalore",
    coordinates: [74.856, 12.9141],
    labelOffset: { x: -12, y: 4 },
    anchor: "end",
    count: 1,
  },
  {
    name: "Sambhajinagar",
    coordinates: [75.3433, 19.8762],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
];

const upcomingMarkers: MapMarker[] = [
  {
    name: "Saharsa",
    coordinates: [86.595, 25.8838],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Pathankot",
    coordinates: [75.6499, 32.2643],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Vadakara",
    coordinates: [75.489, 11.595],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
  {
    name: "Vijayawada",
    coordinates: [80.648, 16.5062],
    labelOffset: { x: 12, y: 24 },
    anchor: "end",
    count: 1,
  },
  {
    name: "Jabalpur",
    coordinates: [79.9864, 23.1815],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
    count: 1,
  },
];

const overviewLabelCities = new Set([
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kochi",
  "Ahmedabad",
  "Chandigarh",
  "Bhopal",
  "Bhubaneswar",
  "Jaipur",
  "Kozhikode",
  "Lohit",
]);

type Zone = "overview" | "north" | "west" | "east" | "south";

const zoneConfigs: {
  key: Zone;
  label: string;
  center: [number, number];
  scale: number;
  cities: string[];
}[] = [
  {
    key: "overview",
    label: "All India",
    center: [82.8, 22],
    scale: 1200,
    cities: [],
  },
  {
    key: "north",
    label: "North",
    center: [77, 29],
    scale: 4000,
    cities: [
      "Noida",
      "Delhi NCR",
      "Gurgaon",
      "Chandigarh",
      "Zirakpur",
      "Jaipur",
      "Pathankot",
    ],
  },
  {
    key: "west",
    label: "West & Central",
    center: [75, 21],
    scale: 3000,
    cities: [
      "Bhopal",
      "Jabalpur",
      "Ahmedabad",
      "Bhavnagar",
      "Surat",
      "Nashik",
      "Sambhajinagar",
      "Mumbai",
      "Thane",
      "Pune",
    ],
  },
  {
    key: "east",
    label: "East & Northeast",
    center: [90, 24],
    scale: 2200,
    cities: ["Kolkata", "Kharagpur", "Bhubaneswar", "Lohit", "Saharsa"],
  },
  {
    key: "south",
    label: "South",
    center: [78, 13],
    scale: 3200,
    cities: [
      "Hyderabad",
      "Vuyyuru",
      "Vijayawada",
      "Bangalore",
      "Mangalore",
      "Chennai",
      "Coimbatore",
      "Kozhikode",
      "Vadakara",
      "Chalakudy",
      "Kochi",
      "Kollam",
      "Tirunelveli",
    ],
  },
];

const PresenceMapSection = () => {
  const [activeZone, setActiveZone] = useState<Zone>("overview");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const currentZone = zoneConfigs.find((z) => z.key === activeZone)!;
  const isOverview = activeZone === "overview";

  const labelSize = isMobile ? (isOverview ? "20px" : "24px") : undefined;
  const subLabelSize = isMobile ? (isOverview ? "16px" : "20px") : "13px";

  const filteredOperational = isOverview
    ? operationalMarkers
    : operationalMarkers.filter((m) => currentZone.cities.includes(m.name));
  const filteredUpcoming = isOverview
    ? upcomingMarkers
    : upcomingMarkers.filter((m) => currentZone.cities.includes(m.name));

  return (
    <div
      id="our-presence"
      className="section-4 w-full bg-gradient-to-b from-teal-950 to-black md:min-h-screen relative flex flex-col items-center justify-start md:justify-center overflow-hidden py-10 md:py-0"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-teal-500/10 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-10 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px]" />

      {/* Section Header */}
      <div className="text-center mb-4 md:mb-6 z-10 px-4 pt-6 md:pt-10">
        <Typography
          variant="subheading"
          className="text-teal-400 uppercase tracking-widest mb-1 md:mb-2"
        >
          Our Presence
        </Typography>
        <Typography variant="h1" className="text-white">
          Across India
        </Typography>
        <Typography
          variant="content"
          className="text-gray-400 max-w-xl mx-auto text-sm md:text-base"
        >
          Empowering salons and beauty businesses nationwide with our innovative
          Smart Mirror technology
        </Typography>
      </div>

      {/* Zone Tabs */}
      <div className="hidden md:flex items-center justify-center gap-3 z-10 px-4 mb-4 md:mb-6">
        {zoneConfigs.map((zone) => (
          <button
            key={zone.key}
            onClick={() => setActiveZone(zone.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeZone === zone.key
                ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white"
            }`}
          >
            {zone.label}
          </button>
        ))}
      </div>
      <div className="flex md:hidden items-center justify-center gap-3 z-10 px-4 mb-4">
        <button
          type="button"
          onClick={() => {
            const idx = zoneConfigs.findIndex((z) => z.key === activeZone);
            const prev = idx > 0 ? idx - 1 : zoneConfigs.length - 1;
            setActiveZone(zoneConfigs[prev].key);
          }}
          className="p-1.5 rounded-full bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white transition-all"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="text-white text-sm font-medium min-w-[100px] text-center">
          {zoneConfigs.find((z) => z.key === activeZone)!.label}
        </span>
        <button
          type="button"
          onClick={() => {
            const idx = zoneConfigs.findIndex((z) => z.key === activeZone);
            const next = idx < zoneConfigs.length - 1 ? idx + 1 : 0;
            setActiveZone(zoneConfigs[next].key);
          }}
          className="p-1.5 rounded-full bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white transition-all"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Map Container */}
      <div
        key={activeZone}
        className="w-full max-w-[1000px] h-[400px] md:h-[700px] lg:h-[900px] relative z-10 px-2 md:px-0 animate-in fade-in duration-300"
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: currentZone.scale,
            center: currentZone.center,
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={indiaGeoJson}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1a3a3a"
                  stroke="#2a7a7a"
                  strokeWidth={1}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      fill: "#2a5a5a",
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Operational markers (white) */}
          {filteredOperational.map(
            ({ name, coordinates, labelOffset, anchor, count }) => (
              <Marker key={name} coordinates={[coordinates[0], coordinates[1]]}>
                <circle
                  r={isOverview ? 6 : 8}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  opacity={0.5}
                  className="animate-ping"
                />
                <circle
                  r={isOverview ? 3 : 4}
                  fill="#ffffff"
                  stroke="#e5e5e5"
                  strokeWidth={1.5}
                  style={{ filter: "drop-shadow(0 0 6px #ffffff)" }}
                />
                {(!isOverview || overviewLabelCities.has(name)) && (
                  <>
                    <text
                      textAnchor={anchor}
                      x={labelOffset.x}
                      y={labelOffset.y}
                      style={{
                        fontFamily: "system-ui",
                        fill: "#ffffff",
                        fontWeight: "600",
                        fontSize: labelSize,
                        textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      {name}
                    </text>
                    {count > 1 && (
                      <text
                        textAnchor={anchor}
                        x={labelOffset.x}
                        y={labelOffset.y + (isMobile ? 20 : 16)}
                        style={{
                          fontFamily: "system-ui",
                          fill: "rgba(255,255,255,0.6)",
                          fontWeight: "400",
                          fontSize: subLabelSize,
                          textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                        }}
                      >
                        {count} Locations
                      </text>
                    )}
                  </>
                )}
              </Marker>
            ),
          )}

          {/* Upcoming / expansion markers (yellow) */}
          {filteredUpcoming.map(
            ({ name, coordinates, labelOffset, anchor, count }) => (
              <Marker key={name} coordinates={[coordinates[0], coordinates[1]]}>
                <circle
                  r={isOverview ? 6 : 8}
                  fill="none"
                  stroke="#EAB308"
                  strokeWidth={1.5}
                  opacity={0.5}
                  className="animate-ping"
                />
                <circle
                  r={isOverview ? 3 : 4}
                  fill="#FACC15"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  style={{ filter: "drop-shadow(0 0 6px #FACC15)" }}
                />
                {(!isOverview || overviewLabelCities.has(name)) && (
                  <>
                    <text
                      textAnchor={anchor}
                      x={labelOffset.x}
                      y={labelOffset.y}
                      style={{
                        fontFamily: "system-ui",
                        fill: "#FDE047",
                        fontWeight: "600",
                        fontSize: labelSize,
                        textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      {name}
                    </text>
                    {count > 1 && (
                      <text
                        textAnchor={anchor}
                        x={labelOffset.x}
                        y={labelOffset.y + (isMobile ? 20 : 16)}
                        style={{
                          fontFamily: "system-ui",
                          fill: "rgba(253,224,71,0.6)",
                          fontWeight: "400",
                          fontSize: subLabelSize,
                          textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                        }}
                      >
                        {count} Locations
                      </text>
                    )}
                  </>
                )}
              </Marker>
            ),
          )}
        </ComposableMap>
      </div>

      {/* Map Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-6 md:mt-8 mb-8 md:mb-10 z-10 px-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute h-4 w-4 rounded-full border border-white/60" />
            <span
              className="h-2.5 w-2.5 rounded-full bg-white border border-white"
              style={{ boxShadow: "0 0 6px #ffffff" }}
            />
          </span>
          <span className="text-white text-sm md:text-base font-medium">
            Operational
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute h-4 w-4 rounded-full border border-[#EAB308]/60" />
            <span
              className="h-2.5 w-2.5 rounded-full bg-[#FACC15] border border-white"
              style={{ boxShadow: "0 0 6px #FACC15" }}
            />
          </span>
          <span className="text-[#FDE047] text-sm md:text-base font-medium">
            Coming Soon (in 30 days)
          </span>
        </div>
      </div>
    </div>
  );
};

export default PresenceMapSection;
