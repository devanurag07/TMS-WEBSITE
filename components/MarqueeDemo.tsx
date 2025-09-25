import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

// Import male hairstyle images
import CaesarCut from "../assets/marquee_male/Caesar cut.png";
import CrewCut from "../assets/marquee_male/Crew cut.png";
import FadePompadour from "../assets/marquee_male/Fade pompadour.png";
import FrenchCrop from "../assets/marquee_male/French crop.png";
import Mullet from "../assets/marquee_male/Mullet.png";
import Quiff from "../assets/marquee_male/Quiff.png";
import SlickedBack from "../assets/marquee_male/Slicked back.png";
import Undercut from "../assets/marquee_male/Undercut.png";

// Import female hairstyle images
import ALineBob from "../assets/marquee_female/A-line bob.png";
import BluntLob from "../assets/marquee_female/Blunt lob.png";
import ButterflyCut from "../assets/marquee_female/Butterfly cut.png";
import ClassicPixie from "../assets/marquee_female/Classic pixie.png";
import FrenchBob from "../assets/marquee_female/French bob.png";
import LongLayers from "../assets/marquee_female/Long Layers.png";
import MessyLob from "../assets/marquee_female/Messy lob.png";
import WolfCut from "../assets/marquee_female/Wolf cut.png";
import { Typography } from "./typography/typography";

const maleHairstyles = [
    {
        name: "Caesar Cut",
        category: "Male",
        image: CaesarCut,
        description: "Classic short masculine cut"
    },
    {
        name: "Crew Cut",
        category: "Male",
        image: CrewCut,
        description: "Clean and professional style"
    },
    {
        name: "Fade Pompadour",
        category: "Male",
        image: FadePompadour,
        description: "Modern vintage-inspired look"
    },
    {
        name: "French Crop",
        category: "Male",
        image: FrenchCrop,
        description: "Textured and stylish cut"
    },
    {
        name: "Mullet",
        category: "Male",
        image: Mullet,
        description: "Bold retro statement style"
    },
    {
        name: "Quiff",
        category: "Male",
        image: Quiff,
        description: "Voluminous and trendy"
    },
    {
        name: "Slicked Back",
        category: "Male",
        image: SlickedBack,
        description: "Sleek and sophisticated"
    },
    {
        name: "Undercut",
        category: "Male",
        image: Undercut,
        description: "Edgy contemporary style"
    }
];

const femaleHairstyles = [
    {
        name: "A-line Bob",
        category: "Female",
        image: ALineBob,
        description: "Elegant angled bob cut"
    },
    {
        name: "Blunt Lob",
        category: "Female",
        image: BluntLob,
        description: "Chic long bob style"
    },
    {
        name: "Butterfly Cut",
        category: "Female",
        image: ButterflyCut,
        description: "Layered face-framing cut"
    },
    {
        name: "Classic Pixie",
        category: "Female",
        image: ClassicPixie,
        description: "Short and sassy style"
    },
    {
        name: "French Bob",
        category: "Female",
        image: FrenchBob,
        description: "Parisian-inspired bob"
    },
    {
        name: "Long Layers",
        category: "Female",
        image: LongLayers,
        description: "Flowing layered look"
    },
    {
        name: "Messy Lob",
        category: "Female",
        image: MessyLob,
        description: "Textured casual style"
    },
    {
        name: "Wolf Cut",
        category: "Female",
        image: WolfCut,
        description: "Edgy layered shag"
    }
];

const HairstyleCard = ({
    image,
    name,
    category,
    description,
}: {
    image: any;
    name: string;
    category: string;
    description: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-white shadow-lg",
                // hover effects
                "hover:shadow-xl transition-shadow duration-300",
                // border styling
                "border-gray-200 hover:border-teal-300"
            )}
        >
            <div className="flex flex-col items-center gap-3">
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-50">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="flex flex-col items-center text-center">
                    <Typography variant="content" className="text-xl font-semibold text-teal-950">
                        {name}
                    </Typography>
                    {/* <Typography variant="content" className="text-xs text-gray-600">{description}</Typography> */}
                </div>
            </div>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl z-[100]">


            <Marquee className="[--duration:35s] mb-4">
                {maleHairstyles.map((hairstyle) => (
                    <HairstyleCard key={hairstyle.name} {...hairstyle} />
                ))}
            </Marquee>

            <Marquee reverse className="[--duration:35s]">
                {femaleHairstyles.map((hairstyle) => (
                    <HairstyleCard key={hairstyle.name} {...hairstyle} />
                ))}
            </Marquee>

        </div>
    );
}