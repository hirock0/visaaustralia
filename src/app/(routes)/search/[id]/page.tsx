"use client";
import { useParams, useRouter } from "next/navigation";

import { useState, useEffect } from "react";

import { db } from "@/utils/firebaseConfig/FirebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { PoppinsFont } from "@/components/fontFamily/FontFamily";

const Search = () => {
  const { id } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [searchText, setSearchText] = useState<any>(id || "");
  const navigate = useRouter();

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const q = query(
          collection(db, "applications"),
          where("applicationId", "==", id)
        );
        const querySnapshot = await getDocs(q);
        const results: any = querySnapshot.docs.map((doc) => doc.data());
        setSearchResults(results);
      } catch (eror: any) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [id]);

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate.push(`/search/${searchText}`);
    }
  };

  const handleOpenPdf = (base64String: any) => {
    if (!base64String.startsWith("data:application/pdf")) {
      alert("Invalid PDF format");
      return;
    }
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(
        `<iframe width="100%" height="100%" src="${base64String}" frameborder="0"></iframe>`
      );
    } else {
      alert("Popup blocked! Please allow popups for this website.");
    }
  };

  return (
    <div className="max-w-[1440px] w-11/12 mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className={`${PoppinsFont.className} text-2xl font-bold`}>
          Search Results
        </h1>
        <button
          onClick={() => navigate.back()}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Go Back
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {searchResults.length === 0 && !loading && !error && (
        <div className="text-center">
          <p>
            No results found for "<strong>{id}</strong>".
          </p>
          <form onSubmit={handleSearch} className="flex justify-center mt-4">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Enter new search term"
              className="border p-2 rounded w-full max-w-sm"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded ml-2"
            >
              Search
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchResults.map((result: any, index: any) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-center mb-4">
              Application
            </h3>
            <div className="text-center mb-4 space-y-2">
              <p className="font-medium">Category: {result?.category}</p>
              <p className="font-medium">
                Application ID: {result?.applicationId}
              </p>
              <p className="font-medium">Status: {result?.status}</p>
              <p className="font-medium">Source: {result?.source}</p>
              <p className="font-medium">Date: {result?.date}</p>
            </div>
            <div className="text-center mt-4">
              {result.pdf ? (
                <button
                  onClick={() => handleOpenPdf(result?.pdf)}
                  className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                >
                  View PDF
                </button>
              ) : (
                <p className="text-gray-500 text-sm">No PDF available</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
