import Image, { StaticImageData } from "next/image";
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

type DeploymentItem = {
  id: number;
  image: StaticImageData;
  name: string;
  location: string;
  isUpcoming?: boolean;
  featured?: boolean;
};

const pilotDeployments: DeploymentItem[] = [
  { id: 1, image: pilot1, name: "Eternal Salon", location: "Pimpri Chinchwad, Pune, Maharashtra" },
  { id: 2, image: pilot2, name: "Page 3 Luxury Salon", location: "Film Nagar, Hyderabad, Telangana" },
  { id: 3, image: pilot3, name: "Page 3 Luxury Salon", location: "Jubilee Hills, Hyderabad, Telangana" },
  { id: 4, image: pilot4, name: "LOOKS Privé", location: "Malcha Marg, Chanakyapuri, Delhi" },
  { id: 5, image: pilot5, name: "LOOKS Salon", location: "Ambience Mall, Vasant Kunj, Delhi" },
];

const internationalOperations: DeploymentItem[] = [
  { id: 11, image: ops11, name: "Maletti S.P.A.", location: "Fellegara, Scandiano, Reggio Emilia, Italy", featured: true },
  { id: 14, image: qatarSalon, name: "Diva Lounge Spa", location: "Doha, Qatar", featured: false },
  { id: 28, image: ops12, name: "Francis Beauty", location: "Kuwait", isUpcoming: true },
  { id: 32, image: ops12, name: "Kteis Hair IKE", location: "Thessaloniki, Greece", isUpcoming: true },
];

const domesticOperations: DeploymentItem[] = [
  { id: 10, image: ops10, name: "Diona Artisan Salon", location: "Sector 18, Noida, Uttar Pradesh" },
  { id: 7, image: ops7, name: "CLNZ Salon", location: "Mahipalpur, New Delhi" },
  { id: 9, image: ops9, name: "OQ Derm", location: "Kolkata, West Bengal" },
  { id: 8, image: ops8, name: "Cut & Style Salon", location: "RT Nagar, Bengaluru, Karnataka" },
  { id: 13, image: ops13, name: "Luca Piattelli", location: "Safdarjung Enclave, New Delhi" },
  { id: 6, image: ops6, name: "RC Studios", location: "Bairagarh, Bhopal, Madhya Pradesh" },
  { id: 21, image: luca_piattelli, name: "Luca Piattelli", location: "Bandra West, Mumbai" },
  { id: 23, image: andham_salon, name: "Andham Salon", location: "Vuyyuru, Andhra Pradesh" },
  { id: 24, image: aure_salon, name: "Aure Salon", location: "Kochi, Kerala" },
  { id: 17, image: hairMasterSalon, name: "Hair Masters Salon", location: "Chandigarh" },
  { id: 20, image: puneSalon, name: "The Little Hair Salon", location: "Viman Nagar, Pune" },
  { id: 12, image: ops12, name: "La Nova Salon", location: "Ahmedabad, Gujarat", isUpcoming: true },
  { id: 14, image: ops12, name: "Hipster Salon", location: "Thane, Maharashtra", isUpcoming: true },
  { id: 15, image: ops12, name: "Play Salon", location: "Indiranagar, Bengaluru, Karnataka", isUpcoming: true },
  { id: 18, image: ops12, name: "Shivanjali Wellness", location: "Bhavnagar, Gujarat", isUpcoming: true },
  { id: 19, image: ops12, name: "Aks Salon", location: "Darbhanga, Bihar", isUpcoming: true },
  { id: 22, image: ops12, name: "Artist Salon", location: "Zirakpur", isUpcoming: true },
  { id: 29, image: ops12, name: "Portfolio Salon", location: "New Delhi", isUpcoming: true },
  { id: 30, image: ops12, name: "Artist Salon", location: "Gurgaon", isUpcoming: true },
  { id: 31, image: ops12, name: "Rajul’s Belleza", location: "Nashik", isUpcoming: true },
];

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
              International
            </Typography>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {internationalOperations.map((item) => (
                <OperationCard key={item.id} item={item} featured={item.featured} />
              ))}
            </div>
          </div>

          <div>
            <Typography className="text-teal-800 mb-6" variant="content">
              Domestic
            </Typography>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {domesticOperations.map((item) => (
                <OperationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-4 mb-8">
            <Typography className="text-teal-950" variant="subheading">
              Pilot Deployments
            </Typography>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {pilotDeployments.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden group relative"
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#008080]/40" />
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
            ))}
          </div>
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
      <div className="relative w-full h-[300px]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover h-[300px] transition-transform duration-500 group-hover:scale-105"
        />
        {item.isUpcoming && (
          <>
            <div className="absolute inset-0 bg-yellow-300/20" />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span className="bg-yellow-300 text-yellow-900 px-6 py-3 rounded-full font-bold text-lg shadow-xl border-2 border-yellow-400 drop-shadow-lg animate-pulse flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="5" y="2" width="14" height="18" rx="3" />
                  <path d="M9 21h6" strokeLinecap="round" />
                  <path d="M12 6v6" strokeLinecap="round" />
                  <circle cx="12" cy="15" r="1" fill="currentColor" />
                </svg>
                Coming Soon
              </span>
            </div>
          </>
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
