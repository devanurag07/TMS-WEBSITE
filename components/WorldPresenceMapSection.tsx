"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Typography } from "@/components/typography/typography";

const WORLD_GEOGRAPHY =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type MapMarker = {
  name: string;
  coordinates: [number, number];
  labelOffset: { x: number; y: number };
  anchor: "start" | "middle" | "end";
};

const HIGHLIGHTED_COUNTRIES = new Set([
  "Italy",
  "Qatar",
  "Kuwait",
  "Greece",
]);

const operationalCountryMarkers: MapMarker[] = [
  {
    name: "Italy",
    coordinates: [12.5674, 41.8719],
    labelOffset: { x: -12, y: 4 },
    anchor: "end",
  },
  {
    name: "Qatar",
    coordinates: [51.1839, 25.3548],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
  },
];

const upcomingCountryMarkers: MapMarker[] = [
  {
    name: "Kuwait",
    coordinates: [47.4818, 29.3117],
    labelOffset: { x: 12, y: -8 },
    anchor: "start",
  },
  {
    name: "Greece",
    coordinates: [21.8243, 39.0742],
    labelOffset: { x: 12, y: 4 },
    anchor: "start",
  },
];

const WorldPresenceMapSection = () => {
  return (
    <div
      id="global-presence"
      className="w-full bg-white md:min-h-screen relative flex flex-col items-center justify-start md:justify-center overflow-hidden py-10 md:py-0"
    >
      <div className="absolute top-[-120px] left-[-150px] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] z-[0]" />
      <div className="absolute bottom-[-120px] right-[-150px] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] z-[0]" />

      <div className="text-center mb-4 md:mb-8 z-10 px-4 pt-6 md:pt-10">
        <Typography
          variant="subheading"
          className="text-teal-700 uppercase tracking-widest mb-1 md:mb-2"
        >
          Our Presence
        </Typography>
        <Typography variant="h1" className="text-teal-950">
          Across the World
        </Typography>
        <Typography
          variant="content"
          className="text-gray-500 max-w-xl mx-auto text-sm md:text-base"
        >
          International salon partners bringing Smart Mirror technology to
          clients across Europe and the Middle East
        </Typography>
      </div>

      <div className="w-full max-w-[1200px] h-[360px] md:h-[620px] lg:h-[760px] relative z-10 px-2 md:px-0">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{
            scale: 210,
            center: [20, 12],
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Geographies geography={WORLD_GEOGRAPHY}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name as string;
                const highlighted = HIGHLIGHTED_COUNTRIES.has(countryName);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={highlighted ? "#0f766e" : "#d7ecec"}
                    stroke={highlighted ? "#115e59" : "#9fcbcb"}
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: highlighted ? "#0d9488" : "#c5e0e0",
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {operationalCountryMarkers.map(
            ({ name, coordinates, labelOffset, anchor }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle
                  r={10}
                  fill="none"
                  stroke="#134e4a"
                  strokeWidth={1.5}
                  opacity={0.4}
                  className="animate-ping"
                />
                <circle
                  r={5}
                  fill="#134e4a"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(19, 78, 74, 0.55))",
                  }}
                />
                <text
                  textAnchor={anchor}
                  x={labelOffset.x}
                  y={labelOffset.y}
                  style={{
                    fontFamily: "system-ui",
                    fill: "#134e4a",
                    fontWeight: "700",
                    fontSize: 14,
                  }}
                >
                  {name}
                </text>
              </Marker>
            )
          )}

          {upcomingCountryMarkers.map(
            ({ name, coordinates, labelOffset, anchor }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle
                  r={10}
                  fill="none"
                  stroke="#EAB308"
                  strokeWidth={1.5}
                  opacity={0.5}
                  className="animate-ping"
                />
                <circle
                  r={5}
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
                    fill: "#a16207",
                    fontWeight: "700",
                    fontSize: 14,
                  }}
                >
                  {name}
                </text>
              </Marker>
            )
          )}
        </ComposableMap>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-6 md:mt-8 mb-8 md:mb-10 z-10 px-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute h-4 w-4 rounded-full border border-teal-950/40" />
            <span
              className="h-2.5 w-2.5 rounded-full bg-teal-950 border border-white"
              style={{ boxShadow: "0 0 6px rgba(19, 78, 74, 0.5)" }}
            />
          </span>
          <span className="text-teal-950 text-sm md:text-base font-medium">
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
          <span className="text-amber-700 text-sm md:text-base font-medium">
            Coming Soon (in 30 days)
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorldPresenceMapSection;
