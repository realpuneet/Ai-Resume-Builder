import { useResume } from "../../context/ResumeContext";
import { motion } from "framer-motion";

const LivePreview = () => {
  const { resumeData } = useResume();

  return (
    <motion.div
      className="w-full bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 min-h-[350px] flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Live AI Preview</h2>
      <div className="flex-1 overflow-y-auto">
        {resumeData.aiPreview
          ? <pre className="whitespace-pre-wrap text-gray-700">{resumeData.aiPreview}</pre>
          : <span className="text-gray-400">AI Response will appear here...</span>
        }
      </div>
    </motion.div>
  );
};

export default LivePreview;