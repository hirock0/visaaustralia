"use client";
import { useEffect, useState } from "react";

// Mock data with Base64 PDF
const mockApplications = [
  {
    applicationId: "A17050668",
    category: "Uncategorized",
    date: "June 24, 2025",
    source: "visaaustraliaimmigration",
    status: "Application Successful",
    submittedAt: "July 1, 2025 at 11:21:12 AM UTC+6",
    submittedBy: "admin",
    pdfBase64:
      "data:application/pdf;base64,JVBERi0xLjQKJYGBgYGFgwg... (your full base64 string here)", // Replace with actual Base64 string
  },
  // Add more objects as needed
];

const AllVisaPage = () => {
  const [applications, setApplications] = useState(mockApplications);

  // Optional: Fetch from backend/firebase
  useEffect(() => {
    // Fetch data if needed
  }, []);

  return (
    <div className="w-full h-full p-5 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">All Visa Applications</h1>
      <div className="overflow-auto rounded-lg shadow">
        <table className="min-w-full text-sm text-left bg-white">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Application ID</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Submitted By</th>
              <th className="px-4 py-3">Submitted At</th>
              <th className="px-4 py-3">PDF</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {applications.map((app, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="px-4 py-3">{app.applicationId}</td>
                <td className="px-4 py-3">{app.category}</td>
                <td className="px-4 py-3">{app.date}</td>
                <td className="px-4 py-3">{app.source}</td>
                <td className="px-4 py-3 text-green-600 font-semibold">
                  {app.status}
                </td>
                <td className="px-4 py-3">{app.submittedBy}</td>
                <td className="px-4 py-3">{app.submittedAt}</td>
                <td className="px-4 py-3">
                  {/* Displaying PDF with Base64 */}
                  <a
                    href={app.pdfBase64}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                    download={`Application-${app.applicationId}.pdf`}
                  >
                    View PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllVisaPage;
