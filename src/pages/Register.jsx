import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const { createUserWithEP } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    createUserWithEP(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("user created successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" shadow-md p-5 mr-5">
      <div className="my-6 space-y-2">
        <h1 className="text-4xl font-bold">Create an Account</h1>
        <p className="text-gray-600 text-sm pl-3">Register with RapidShift</p>
      </div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          {/* name */}
          <label className="text-black text-sm label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-600">Name is required</p>
          )}

          {/* email */}
          <label className="text-black text-sm label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
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
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">Password should be 6 characters</p>
          )}

          <button className="btn bg-primary w-1/2 mt-4">Register</button>
        </fieldset>
      </form>
      <Link to="/sign-in">
        <p>
          Already Have an Account?{" "}
          <span className="text-blue-500 underline">Please Log In!</span>
        </p>
      </Link>
    </div>
  );
};

export default Register;
