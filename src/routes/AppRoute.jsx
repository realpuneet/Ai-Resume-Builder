import { Routes, Route } from "react-router";
import Landing from "../pages/Landing";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/Common/ProtectedRoute";
import PublicRoute from "../components/Common/PublicRoute";
import Features from "../pages/Features";
import ResumeBuilder from "../pages/ResumeBuilder";
import LivePreview from "../components/Resume/LivePreview";
import UpdateResume from "../pages/UpdateResume";
import Profile from "../pages/Profile";
import Templates from "../pages/Templates";
import Pricing from "../pages/Pricing";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/features" element={<Features />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/pricing" element={<Pricing />} />
      {/* Public routes */}
      <Route element={<PublicRoute />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* Protected & Nested Dashboard routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="resume-builder" element={<ResumeBuilder />} />
          <Route path="live-preview" element={<LivePreview />} />
          <Route path="update-resume" element={<UpdateResume />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoute;