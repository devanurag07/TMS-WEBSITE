import { StaticImageData } from "next/image";

import partner1 from "@/assets/partners/1.jpeg";
import partner2 from "@/assets/partners/2.jpeg";
import partner3 from "@/assets/partners/3.jpeg";
import partner4 from "@/assets/partners/4.jpeg";
import partner5 from "@/assets/partners/5.jpeg";
import partner6 from "@/assets/partners/6.png";
import partner7 from "@/assets/partners/7.jpeg";
import partner8 from "@/assets/partners/8.png";

export type PartnerVisit = {
  id: number;
  heading: string;
  subheading: string;
  location: string;
  date: string;
  image: StaticImageData;
};

export const partnerVisits: PartnerVisit[] = [
  {
    id: 1,
    heading: "Page 3 Salons",
    subheading: "w/ Praveen Kumar (Franchise Owner)",
    location: "Hyderabad",
    date: "September 18, 2024",
    image: partner1,
  },
  {
    id: 2,
    heading: "LOOKS Salons",
    subheading: "w/ Sanjay Dutta (Founder)",
    location: "Delhi",
    date: "December 17, 2024",
    image: partner2,
  },
  {
    id: 3,
    heading: "HBS StyleSpeak Beauty Conference",
    subheading: "w/ Samir Srivastav (CEO LOOKS Salon)",
    location: "Mumbai",
    date: "April 7, 2025",
    image: partner3,
  },
  {
    id: 4,
    heading: "All-in Capital Elevator Pitch",
    subheading: "w/ Aditya Singh",
    location: "Delhi",
    date: "December 17, 2025",
    image: partner4,
  },
  {
    id: 5,
    heading: "Maletti Group",
    subheading: "w/ Matteo Zambonini",
    location: "Reggio Emilia",
    date: "April 30, 2026",
    image: partner5,
  },
  {
    id: 6,
    heading: "Luca Piattelli Salons",
    subheading: "w/ Rakesh Kumar",
    location: "Mumbai",
    date: "July 3, 2026",
    image: partner6,
  },
  {
    id: 7,
    heading: "Hair Masters Salons",
    subheading: "w/ Rashmeet & Sahil Kapoor (Founders)",
    location: "Chandigarh",
    date: "July 25, 2026",
    image: partner7,
  },
  {
    id: 8,
    heading: "Florian Hurel Hair Couture & Spa",
    subheading: "w/ Founder",
    location: "Mumbai",
    date: "July 31, 2026",
    image: partner8,
  },
];
