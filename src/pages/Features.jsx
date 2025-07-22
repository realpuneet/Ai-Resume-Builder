// src/pages/Features.jsx
import { FaLightbulb, FaFilePdf, FaEye, FaRobot } from "react-icons/fa";
import FeatureCard from "../components/Common/FeatureCard";

const features = [
  {
    title: "AI-Powered Resume Generator",
    description: "Generate professional resumes instantly using AI tailored to your job role, skills, and experience.",
    icon: FaRobot,
    delay: 0.1,
  },
  {
    title: "Live Resume Preview",
    description: "See real-time changes in your resume as you customize content, layout, and theme.",
    icon: FaEye,
    delay: 0.2,
  },
  {
    title: "One-Click Export",
    description: "Download your resume as PDF in a single click — clean, ATS-friendly, and ready to send.",
    icon: FaFilePdf,
    delay: 0.3,
  },
  {
    title: "Smart Suggestions",
    description: "Get personalized content suggestions for job titles, summaries, and skill sets powered by GPT.",
    icon: FaLightbulb,
    delay: 0.4,
  },
];
const Features = () => {
  return (
    <div className="min-h-screen  py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-black mb-6">
          🔥 Our Features
        </h2>
        <p className="text-gray-600  max-w-2xl mx-auto mb-12">
          We combine cutting-edge technology with stunning UI to give you an unbeatable digital experience.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {features.map((feat, index) => (
            <FeatureCard key={index} {...feat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
