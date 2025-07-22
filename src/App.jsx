import AppRoute from "./routes/AppRoute";
import Navbar from "./components/Common/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
    <Navbar />
    <AppRoute />

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false} 
      />
  </>
  ) ;
};

export default App;
