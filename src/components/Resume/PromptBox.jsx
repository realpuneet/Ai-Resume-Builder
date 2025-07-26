import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useResume } from "../../context/ResumeContext";

const PromptBox = () => {
  const [loading, setLoading] = useState(false);
  const { setAiPreview } = useResume();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const prompt = data.prompt.trim();
    if (!prompt) return;

    setLoading(true);

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "Resume-Builder-AI",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      });

      const result = await res.json();

      const message = result?.choices?.[0]?.message?.content || "No response";
      setAiPreview(message); // Save to context

    } catch (error) {
      console.error("AI Request failed:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Resume Prompt</h2>
      <p className="text-gray-500 mb-4 text-sm">Describe the resume you want and let AI generate it for you.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1">
        <textarea
          {...register("prompt", { required: "Prompt is required" })}
          className="w-full h-32 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white/90 mb-2"
          placeholder="e.g. 2 years experience React developer, looking for frontend role in Bangalore..."
        />
        {errors.prompt && (
          <p className="text-red-500 text-sm mb-2">{errors.prompt.message}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full flex justify-center items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading && <Loader2 size={18} className="animate-spin" />}
          {loading ? "Generating..." : "Generate Resume"}
        </button>
      </form>
    </motion.div>
  );
};

export default PromptBox;