"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { db } from "@/utils/firebaseConfig/FirebaseConfig";
import { addDoc,collection } from "firebase/firestore";
import swal from "sweetalert";
import { FiEye, FiEyeOff } from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      // Save the user directly to Firestore
      await addDoc(collection(db, "users"), {
        name: data.name,
        email: data.email,
        password: data.password,  // In a production app, make sure to hash the password
        createdAt: new Date(),
      });

      // Success handling
      setSuccess(true);
      swal("Signup Successful!", "Your account has been created.", "success");
    } catch (error) {
      console.error("Signup error:", error);
      swal("Error", "A server error occurred. Please try again later.", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name", { required: "Name is required" })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field with Eye Toggle */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="w-full mt-1 p-2 pr-10 border border-gray-300 rounded-md"
            />
            <div
              className="absolute right-3 top-[39px] cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {success && (
          <p className="text-green-600 text-center mt-4">Signup successful!</p>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
