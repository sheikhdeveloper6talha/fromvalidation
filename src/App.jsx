import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#e7edf4] flex flex-col items-center justify-center px-4">

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#328391] leading-tight">
          Neumorphism Login Form
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold text-[#328391]">
          HTML & CSS
        </h2>
      </div>

      {/* Login Card */}
      <div
        className="
          w-full max-w-[365px]
          min-h-[595px]
          rounded-[32px]
          bg-[#e7edf4]
          px-8 py-12
          flex flex-col items-center
          shadow-[15px_15px_30px_#c5ccd3,-15px_-15px_30px_#ffffff]
        "
      >

        {/* Logo */}
        <div
          className="
            w-[90px] h-[90px]
            rounded-full
            bg-black
            flex items-center justify-center
            mb-5
            border-[5px] border-[#f5f7fa]
            shadow-[8px_8px_15px_#c5ccd3,-8px_-8px_15px_#ffffff]
          "
        >
          <div className="text-white text-center">
            <div className="text-3xl text-blue-700 font-bold leading-none">
              ➤
            </div>

            <p className="text-[9px] font-bold -mt-1">
              Web Dev
            </p>

            <p className="text-[6px] text-gray-400">
              made easy
            </p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-black">
          Web Development
        </h3>

        <p className="text-sm tracking-[5px] text-gray-700 mt-1 mb-12">
          Made easy!
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full"
        >

          {/* Username */}
          <div
            className="
              w-full h-[55px]
              flex items-center
              rounded-full
              px-6
              bg-[#e7edf4]
              shadow-[inset_7px_7px_12px_#c5ccd3,inset_-7px_-7px_12px_#ffffff]
            "
          >
            <span className="text-xl text-gray-600 mr-4">
              ♙
            </span>

            <input
              type="text"
              placeholder="username"
              className="
                w-full
                bg-transparent
                outline-none
                text-gray-700
                placeholder:text-gray-400
              "
              {...register("username", {
                required: "Username is required",
                pattern: {
                  value: /^[A-Z][a-z]*$/,
                  message: "First Letter Must be Capital"
                },
                minLength: {
                  value: 3,
                  message: "At least 3 characters required",
                },

                maxLength: {
                  value: 20,
                  message: "Maximum 20 characters allowed",
                },
              })}
            />
          </div>

          {/* Username Error */}
          {errors.username && (
            <p className="text-red-500 text-sm mt-2 ml-4">
              {errors.username.message}
            </p>
          )}

          {/* Password */}
          <div
            className="
              w-full h-[55px]
              flex items-center
              rounded-full
              px-6
              mt-6
              bg-[#e7edf4]
              shadow-[inset_7px_7px_12px_#c5ccd3,inset_-7px_-7px_12px_#ffffff]
            "
          >
            <span className="text-xl text-gray-600 mr-4">
              ♧
            </span>

            <input
              type="password"
              placeholder="password"
              className="
                w-full
                bg-transparent
                outline-none
                text-gray-700
                placeholder:text-gray-400
              "
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value : /^(?=[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/,
                  message : "First letter must be capital, include one number and one special character",
                },
                minLength: {
                  value: 6,
                  message: "Password Min Length 6 characters",
                },
                maxLength: {
                  value: 16,
                  message: "Password Max Length  12 characters",
                },
              })}
            />
          </div>

          {/* Password Error */}
          {errors.password && (
            <p className="text-red-500 text-sm mt-2 ml-4">
              {errors.password.message}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="
              w-full h-[55px]
              mt-7
              rounded-full
              bg-[#51b4d0]
              text-white
              font-bold
              text-lg
              shadow-[5px_7px_10px_#b8c0c7]
              hover:translate-y-[1px]
              active:translate-y-[3px]
              transition
            "
          >
            Login
          </button>

        </form>

        {/* Bottom Links */}
        <p className="text-sm text-gray-500 mt-5">
          <span className="font-medium">
            Forgot password?
          </span>

          <span className="mx-1 font-bold">
            or
          </span>

          <span className="font-bold text-gray-600 cursor-pointer">
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
};

export default App;