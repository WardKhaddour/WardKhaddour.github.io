"use client";

import { useState } from "react";

export default function DownloadResume() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      // Create a link element
      const link = document.createElement("a");
      link.href = "/Ward_Khaddour.pdf";
      link.download = "Ward_Khaddour_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="px-6 py-3 border cursor-pointer border-gray-300 dark:border-gray-600 hover:border-red-600 dark:hover:border-red-500 hover:text-red-600 rounded-lg transition-colors"
    >
      {isLoading ? "Downloading..." : "My Resume"}
    </button>
  );
}
