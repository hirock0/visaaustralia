"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/utils/firebaseConfig/FirebaseConfig";
import { PoppinsFont } from "@/components/fontFamily/FontFamily";

// Utility to get today's formatted date (e.g., June 22, 2025)
const getFormattedDate = () => {
  const now = new Date();
  return now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const VisaApplicationPage = () => {
  const navigate = useRouter();
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
      setPdfBase64(reader.result); // only used for preview
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data: any) => {
    try {
      let pdfURL = null;

      // Upload PDF to Firebase Storage if exists
      if (pdfFile) {
        const storageRef = ref(storage, `pdfs/${Date.now()}_${pdfFile.name}`);
        const snapshot = await uploadBytes(storageRef, pdfFile);
        pdfURL = await getDownloadURL(snapshot.ref);
      }

      // Save form data and PDF URL to Firestore
      await addDoc(collection(db, "applications"), {
        ...data,
        submittedBy: "admin",
        submittedAt: new Date(),
        pdfURL: pdfURL || null,
      });

      alert("Data uploaded successfully!");
      reset();
      setPdfBase64("");
      setPdfFile(null);
    } catch (err) {
      console.error("Error uploading data:", err);
    }
  };

  return (
    <div className="max-w-[1440px] w-11/12 mx-auto py-8">
      <h1 className={`${PoppinsFont.className} text-2xl font-bold mb-6 text-center`}>
        Upload Application Data
      </h1>

      {/* Back Button */}
      <button
        onClick={() => navigate.back()}
        className="bg-gray-500 text-white px-4 py-2 rounded mb-4"
      >
        Go Back
      </button>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto bg-white p-6 rounded shadow"
      >
        {/* Category */}
        <label className="block mb-1">Category</label>
        <input
          {...register("category", { required: true })}
          className="w-full border p-2 mb-4"
        />
        {errors.category && (
          <p className="text-red-500 mb-2">Category is required</p>
        )}

        {/* Application ID */}
        <label className="block mb-1">Passport Number</label>
        <input
          placeholder="Enter your passport number"
          {...register("applicationId", { required: true })}
          className="w-full border p-2 mb-4"
        />
        {errors.applicationId && (
          <p className="text-red-500 mb-2">Application ID is required</p>
        )}

        {/* Status */}
        <label className="block mb-1">Status</label>
        <input
          {...register("status", { required: true })}
          className="w-full border p-2 mb-4"
        />
        {errors.status && (
          <p className="text-red-500 mb-2">Status is required</p>
        )}

        {/* Source */}
        <label className="block mb-1">Source</label>
        <input
          {...register("source", { required: true })}
          className="w-full border p-2 mb-4"
        />
        {errors.source && (
          <p className="text-red-500 mb-2">Source is required</p>
        )}

        {/* Date */}
        <label className="block mb-1">Date</label>
        <input
          {...register("date", { required: true })}
          className="w-full border p-2 mb-4"
        />
        {errors.date && (
          <p className="text-red-500 mb-2">Date is required</p>
        )}

        {/* PDF Upload */}
        <label className="block mb-1">Upload PDF (optional)</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={handlePdfUpload}
          className="w-full border p-2 mb-4"
        />
        {pdfBase64 && (
          <p className="text-green-600 text-sm mb-2">
            PDF uploaded successfully.
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-2 px-4 py-2 rounded text-white ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default VisaApplicationPage;
