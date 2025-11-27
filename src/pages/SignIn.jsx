import { useForm } from "react-hook-form";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
// import { auth } from "../Firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();
const SignIn = () => {
  const navigate = useNavigate();
  const { signInWithEP, createUserWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    signInWithEP(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("user logged in");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegisterWithGoogle = (data) => {
    console.log(data);
    createUserWithGoogle(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        toast.success("user created by google");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="shadow-md pl-44 mb-5">
      <div className="my-6 space-y-2">
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <p className="text-gray-600 text-sm pl-3">Sign in with RapidShift</p>
      </div>
      <form className="" onSubmit={handleSubmit(handleSignIn)}>
        <fieldset className="fieldset">
          {/* email */}
          <label className="text-black text-sm label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-3/4"
            placeholder="Email"
          />
          {/* validation */}
          {errors.email?.type === "required" && (
            <p className="text-red-600">Email is required</p>
          )}
          {/* password */}
          <label className="text-black text-sm label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input w-3/4"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">Password should be 6 characters</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-primary w-3/4 mt-4">Sign In</button>
        </fieldset>
      </form>
      <p>
        Don't have an account?
        <Link to="/register">
          {" "}
          <span className="underline text-blue-600 hover:cursor-pointer">
            Register Now!
          </span>{" "}
        </Link>
      </p>
      <div className="divider w-3/4 text-gray-500 font-semibold">or</div>
      <div
        onClick={handleSubmit(handleRegisterWithGoogle)}
        className="mb-8 w-3/4 btn bg-white rounded-sm shadow-sm hover:cursor-pointer  text-center"
      >
        <button className="p-2 hover:cursor-pointer font-semibold">
          <span>
            <img
              className="inline mr-2"
              width="22"
              height="22"
              src="https://img.icons8.com/fluency/48/google-logo.png"
              alt="google-logo"
            />
          </span>
          Sign in with Google{" "}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
