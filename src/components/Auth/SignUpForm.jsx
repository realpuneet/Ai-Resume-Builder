import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router";
import coverImage from "../../assets/Cover.png";
import { toast } from "react-toastify";


const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("User registered successfully");
        navigate("/signin");
    }


  return (
  <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
    {/* Left: Form */}
    <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full font-[inter] max-w-md p-8 rounded-lg "
      >
        <h2 className="text-2xl font-semibold mb-10 text-left">Get Started Now</h2>
        <label htmlFor="name" className="text-md">Name</label>
        <input
          type="text"
          placeholder="john doe"
          {...register("name", { required: "Name is required" })}
          className="w-full mb-2 py-1 px-2 border rounded-lg bg-white/80"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

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
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
          })}
          className="w-full mb-4 py-1 px-2 border rounded-lg bg-white/80"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms" className="ml-2 text-sm">
          I agree to the <span className="text-blue-600 underline">terms and conditions</span>
        </label>

        <button
          type="submit"
          className="mt-5 w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 cursor-pointer" 
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Have an account?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
    {/* Right: Green Div */}
    <div className="hidden md:block md:w-1/2 h-screen bg-cover bg-center rounded-none md:rounded-l-4xl">
      <img src={coverImage} alt="Cover" className="object-cover w-full h-full rounded-l-4xl" />
    </div>
  </div>
)
}

export default SignUpForm