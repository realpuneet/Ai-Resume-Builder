import {Routes, Route} from "react-router";
import Landing from "../pages/Landing"
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/Common/ProtectedRoute";
import PublicRoute from "../components/Common/PublicRoute";
import Features from "../pages/Features";

const AppRoute = () => {
  return (
    <Routes>
      {/* Define your routes here */}
      <Route path="/" element={<Landing />} />
      <Route path="/features" element={<Features />} />
      
      <Route element={<PublicRoute />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

    </Routes>
  )
}

export default AppRoute