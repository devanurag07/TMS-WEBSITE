import Image from "next/image";
import { Typography } from "@/components/typography/typography";
import DarkGradientCircles from "@/components/DarkGradientCircles";

import barIcon from "@/assets/icons/bars.svg";
import consultationIcon from "@/assets/icons/consultation.svg";
import robotIcon from "@/assets/icons/robot.svg";
import customerConfidenceIcon from "@/assets/icons/customer_confidence.svg";

const customer_behaviour_data = [
  {
    icon: robotIcon,
    title: "Innovative Technology",
    description:
      "Adapting state-of-the-art technology that helps in providing realistic results",
  },
  {
    icon: customerConfidenceIcon,
    title: "Customer Confidence",
    description:
      "Reducing customer hesitance to try premium services and increasing business potential",
  },
  {
    icon: barIcon,
    title: "Smart Personalization",
    description:
      "Leveraging data-driven inventory management to recommend products tailored to individual customer attributes",
  },
  {
    icon: consultationIcon,
    title: "Expanding Services",
    description:
      "Engaging in additional services such as product sales, online consultations, and targeted advertisements from the insights gained",
  },
];

const CustomerBehaviourSection = () => {
  return (
    <div
      id="benefits"
      className="section-2 w-full flex justify-center items-center bg-black p-4 md:p-20 min-h-[100vh] relative overflow-hidden "
    >
      <DarkGradientCircles overflowHidden={true} isStraight={false} />
      <section className="w-[90%] md:max-w-[1400px] w-full z-[1000] flex flex-col items-center justify-center">
        <Typography variant="h1" className="text-white text-center mb-20 pt-5">
          Changing Customer Behavior
        </Typography>

        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-[1000px]">
          {customer_behaviour_data.map((item) => (
            <div
              key={item.title}
              className="bg-gradient-to-br from-[#001A1A] to-[#003333] p-12 rounded-lg hover:from-[#002626] hover:to-[#004040] transition-all duration-300 z-[1] "
            >
              <div className="text-[#00A5A5] mb-2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="h-[50px]"
                />
              </div>
              <Typography variant="subheading" className="text-white mb-2 text-sm">
                {item.title}
              </Typography>
              <Typography
                variant="content"
                className="text-[#6c9797] leading-relaxed text-xs"
              >
                {item.description}.
              </Typography>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:hidden">
          {customer_behaviour_data.map((item) => (
            <div
              key={item.title}
              className="bg-gradient-to-br from-[#001A1A] to-[#003333] p-4 rounded-lg hover:from-[#002626] hover:to-[#004040] transition-all duration-300 z-[1] "
            >
              <div className="text-[#00A5A5] mb-2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="h-[40px]"
                />
              </div>
              <Typography variant="subheading" className="text-white mb-1 text-sm">
                {item.title}
              </Typography>
              <Typography
                variant="content"
                className="text-[#6c9797] leading-relaxed text-xs"
              >
                {item.description}.
              </Typography>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomerBehaviourSection;
