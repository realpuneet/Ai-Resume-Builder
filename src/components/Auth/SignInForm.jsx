import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import coverImage from "../../assets/Cover.png";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === data.email && user.password === data.password) {
      localStorage.setItem("isAuth", "true");
      login();
      navigate("/dashboard");
      toast.success("User signed in successfully");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full font-[inter] max-w-md p-8 rounded-lg "
        >
          <h2 className="text-2xl font-semibold text-left">Welcome Back</h2>
          <h4 className="text-md font-medium mb-10 text-left">Enter your credentials to access your account</h4>
          <label htmlFor="email" className="text-md">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            {...register("email", { required: "Email is required" })}
            className="w-full mb-2 py-1 px-2 border rounded-lg bg-white/80"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <label htmlFor="password" className="text-md">Password</label>
          <input
            type="password"
            placeholder="*******"
            {...register("password", { required: "Password is required" })}
            className="w-full mb-4 py-1 px-2 border rounded-lg bg-white/80"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="mt-5 w-full  text-white py-2 rounded-lg bg-gray-600 hover:bg-gray-700 cursor-pointer"
          >
            Sign In
          </button>
          <p className="mt-4 text-center ">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      {/* Right: Image */}
      <div className="hidden md:block md:w-1/2 h-screen bg-cover bg-center rounded-none md:rounded-l-4xl">
        <img src={coverImage} alt="Cover" className="object-cover w-full h-full rounded-l-4xl" />
      </div>
    </div>
  );
};

export default SignInForm;