import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Features from "./Features";
import Footer from "../components/Common/Footer";


function Landing() {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const handleGetStarted = () => {
    if (isAuth) {
      navigate("/dashboard/resume-builder");
    } else {
      navigate("/signin");
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Build Your Resume with AI</h1>
        <p className="text-gray-600 mb-6">
          Create, edit and download stunning resumes in minutes.
        </p>
        <button
          onClick={handleGetStarted}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Get Started
        </button>
      </div>
      <Features />
      <Footer /> 
    </>
  );
}

export default Landing;
