"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Typography } from "@/components/typography/typography";
import indiaGeoJson from "@/assets/geojson/in.json";

type MapMarker = {
  name: string;
  coordinates: [number, number];
  labelOffset: { x: number; y: number };
  anchor: "start" | "middle" | "end";
};

const presenceMapMarkers: MapMarker[] = [
  { name: "Noida", coordinates: [77.45, 28.53], labelOffset: { x: 12, y: 4 }, anchor: "start" },
  { name: "Delhi", coordinates: [77.1, 28.7], labelOffset: { x: -12, y: 4 }, anchor: "end" },
  { name: "Bhopal", coordinates: [77.4126, 23.2599], labelOffset: { x: 0, y: -12 }, anchor: "middle" },
  { name: "Kolkata", coordinates: [88.3639, 22.5726], labelOffset: { x: 0, y: -12 }, anchor: "middle" },
  { name: "Bangalore", coordinates: [77.5946, 12.9716], labelOffset: { x: 0, y: -12 }, anchor: "middle" },
  { name: "Mumbai", coordinates: [72.8777, 19.076], labelOffset: { x: -12, y: 4 }, anchor: "end" },
  { name: "Kochi", coordinates: [76.2673, 9.9312], labelOffset: { x: -12, y: 4 }, anchor: "end" },
  { name: "Vuyyuru", coordinates: [80.8444, 16.3618], labelOffset: { x: 12, y: 4 }, anchor: "start" },
  { name: "Chandigarh", coordinates: [76.65, 30.85], labelOffset: { x: -12, y: 4 }, anchor: "end" },
  { name: "Thane", coordinates: [72.9781, 19.2183], labelOffset: { x: 12, y: 4 }, anchor: "start" },
  { name: "Pune", coordinates: [73.8567, 18.5204], labelOffset: { x: 12, y: 4 }, anchor: "start" },
  { name: "Ahmedabad", coordinates: [72.5714, 23.0225], labelOffset: { x: 0, y: -12 }, anchor: "middle" },
  { name: "Bhavnagar", coordinates: [72.1519, 21.7645], labelOffset: { x: 0, y: -12 }, anchor: "middle" },
];

const upcomingMapMarkers: MapMarker[] = [
  { name: "Chennai", coordinates: [80.2707, 13.0827], labelOffset: { x: 12, y: 4 }, anchor: "start" },
  { name: "Zirakpur", coordinates: [76.95, 30.5], labelOffset: { x: 12, y: 4 }, anchor: "start" },
  { name: "Kozhikode", coordinates: [75.7804, 11.2588], labelOffset: { x: -12, y: 4 }, anchor: "end" },
  { name: "Coimbatore", coordinates: [76.9558, 11.0168], labelOffset: { x: 12, y: 4 }, anchor: "start" },
  { name: "Saharsa", coordinates: [86.595, 25.8838], labelOffset: { x: 12, y: 4 }, anchor: "start" },
  { name: "Hyderabad", coordinates: [78.4867, 17.385], labelOffset: { x: 12, y: 4 }, anchor: "start" },
  { name: "Nashik", coordinates: [73.7898, 19.9975], labelOffset: { x: 12, y: -8 }, anchor: "start" },
  { name: "Lohit", coordinates: [96.162, 27.913], labelOffset: { x: -12, y: 4 }, anchor: "end" },
  { name: "Gurgaon", coordinates: [77.0266, 28.4595], labelOffset: { x: 12, y: 14 }, anchor: "start" },
];

const PresenceMapSection = () => {
  return (
    <div
      id="our-presence"
      className="section-4 w-full bg-gradient-to-b from-teal-950 to-black md:min-h-screen relative flex flex-col items-center justify-start md:justify-center overflow-hidden py-10 md:py-0"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-teal-500/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      <div className="absolute bottom-10 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px]"></div>

      {/* Section Header */}
      <div className="text-center mb-4 md:mb-8 z-10 px-4 pt-6 md:pt-10">
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

      {/* Map Container */}
      <div className="w-full max-w-[1000px] h-[400px] md:h-[700px] lg:h-[900px] relative z-10 px-2 md:px-0">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 1200,
            center: [82.8, 22],
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Geographies geography={indiaGeoJson}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1a3a3a"
                  stroke="#0d4d4d"
                  strokeWidth={0.5}
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
          {presenceMapMarkers.map(({ name, coordinates, labelOffset, anchor }) => (
            <Marker key={name} coordinates={[coordinates[0], coordinates[1]]}>
              <circle
                r={8}
                fill="none"
                stroke="#ffffff"
                strokeWidth={1.5}
                opacity={0.5}
                className="animate-ping"
              />
              <circle
                r={4}
                fill="#ffffff"
                stroke="#e5e5e5"
                strokeWidth={1.5}
                style={{
                  filter: "drop-shadow(0 0 6px #ffffff)",
                }}
              />
              <text
                textAnchor={anchor}
                x={labelOffset.x}
                y={labelOffset.y}
                style={{
                  fontFamily: "system-ui",
                  fill: "#ffffff",
                  fontWeight: "600",
                  textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                {name}
              </text>
            </Marker>
          ))}

          {/* Upcoming / expansion markers */}
          {upcomingMapMarkers.map(({ name, coordinates, labelOffset, anchor }) => (
            <Marker key={name} coordinates={[coordinates[0], coordinates[1]]}>
              <circle
                r={8}
                fill="none"
                stroke="#EAB308"
                strokeWidth={1.5}
                opacity={0.5}
                className="animate-ping"
              />
              <circle
                r={4}
                fill="#FACC15"
                stroke="#ffffff"
                strokeWidth={1.5}
                style={{
                  filter: "drop-shadow(0 0 6px #FACC15)",
                }}
              />
              <text
                textAnchor={anchor}
                x={labelOffset.x}
                y={labelOffset.y}
                style={{
                  fontFamily: "system-ui",
                  fill: "#FDE047",
                  fontWeight: "600",
                  textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                {name}
              </text>
            </Marker>
          ))}
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
