import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Nenneko",
  description: "Nenneko's profile and skills.",
};

const AboutPage = () => {
  return <AboutContent />;
};

export default AboutPage;