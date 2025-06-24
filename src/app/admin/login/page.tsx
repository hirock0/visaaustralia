"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import swal from "sweetalert";
import { db } from "@/utils/firebaseConfig/FirebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons for visibility toggle

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const router = useRouter(); // Instantiate the router

  const onSubmit = async (data: FormData) => {
    try {
      // Query Firestore for users with the matching email
      const q = query(
        collection(db, "users"),
        where("email", "==", data.email)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // If no user with that email
        swal("Login Failed", "Email not found.", "error");
        return;
      }

      // Validate password
      const user = querySnapshot.docs[0].data(); // Get user data (first document)
      if (user.password !== data.password) {
        // If passwords do not match
        swal("Login Failed", "Incorrect password.", "error");
        return;
      }

      // If email and password match
      setSuccess(true);
      swal("Login Successful!", "You have logged in.", "success");

      // Redirect to /admin/upload page after successful login
      router.push("/admin/upload/visaApplication"); // This will redirect the user to the admin/upload page
    } catch (error) {
      console.error("Login error:", error);
      swal("Error", "An error occurred. Please try again later.", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
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
              type={showPassword ? "text" : "password"} // Toggle password visibility
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="w-full mt-1 p-2 pr-10 border border-gray-300 rounded-md"
            />
            <div
              className="absolute right-3 top-[39px] cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)} // Toggle the showPassword state
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
            {isSubmitting ? "Logging in..." : "Log In"}
          </button>
        </form>

        {success && <p className="text-green-600 text-center mt-4">Login successful!</p>}
      </div>
    </div>
  );
};

export default LoginPage;
