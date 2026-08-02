import { Metadata } from "next";

export const metadata: Metadata = {
  title: "On the Ground | Try My Style",
  description:
    "We travel across India to meet salon & brand owners in person, understanding their floors, their customers, and building the partnerships behind every mirror we install.",
};

export default function OnTheGroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
