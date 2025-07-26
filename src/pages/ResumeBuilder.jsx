import ResumeForm from "../components/Resume/ResumeForm";
import LivePreview from "../components/Resume/LivePreview";
import PromptBox from "../components/Resume/PromptBox";

const ResumeBuilder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="flex flex-col gap-8">
          <PromptBox />
          <ResumeForm />
        </div>
        <LivePreview />
      </div>
    </div>
  );
};

export default ResumeBuilder;