"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/utils/firebaseConfig/FirebaseConfig";
import { PoppinsFont } from "@/components/fontFamily/FontFamily";

const getFormattedDate = () => {
  const now = new Date();
  return now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const UploadPage = () => {
  const router = useRouter();
  const [pdfBase64, setPdfBase64] = useState<any>("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      category: "Uncategorized",
      applicationId: "",
      status: "Application Successful",
      source: "visaaustraliaimmigration",
      date: getFormattedDate(),
    },
  });

  const handlePdfUpload = (e: any) => {
    const file = e.target.files[0];
    if (!file || file.type !== "application/pdf") {
      alert("Please upload a valid PDF file.");
      return;
    }

    setPdfFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPdfBase64(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data: any) => {
    try {
      let pdfURL = null;

      if (pdfFile) {
        const storageRef = ref(storage, `pdfs/${Date.now()}_${pdfFile.name}`);
        const snapshot = await uploadBytes(storageRef, pdfFile);
        pdfURL = await getDownloadURL(snapshot.ref);
      }

      await addDoc(collection(db, "applications"), {
        ...data,
        submittedBy: "admin",
        submittedAt: new Date(),
        pdfURL: pdfURL || null,
      });

      alert("Visa application uploaded successfully!");
      reset();
      setPdfBase64("");
      setPdfFile(null);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-[1440px] w-11/12 mx-auto py-10">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1
          className={`${PoppinsFont.className} text-2xl font-bold text-center text-gray-800 mb-6`}
        >
          Upload Visa Application
        </h1>

        <button
          onClick={() => router.back()}
          className="text-sm text-white bg-gray-600 px-4 py-2 rounded hover:bg-gray-700 mb-6"
        >
          ← Go Back
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              {...register("category", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">Category is required</p>
            )}
          </div>

          {/* Passport Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Passport Number
            </label>
            <input
              placeholder="Enter passport number"
              {...register("applicationId", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.applicationId && (
              <p className="text-red-500 text-sm mt-1">
                Passport number is required
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <input
              {...register("status", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">Status is required</p>
            )}
          </div>

          {/* Source */}
          <div>
            <label className="block text-sm font-medium mb-1">Source</label>
            <input
              {...register("source", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.source && (
              <p className="text-red-500 text-sm mt-1">Source is required</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              {...register("date", { required: true })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">Date is required</p>
            )}
          </div>

          {/* PDF Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Upload PDF (optional)
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handlePdfUpload}
              className="w-full border border-gray-300 rounded px-3 py-2 file:cursor-pointer"
            />
            {pdfBase64 && (
              <p className="text-green-600 text-sm mt-1">
                PDF uploaded successfully.
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 rounded text-white font-medium ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Uploading..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
