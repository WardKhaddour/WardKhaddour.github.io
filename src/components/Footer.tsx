import { about } from "@/data/about";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-4">
      <div className="container px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <Link
              rel="noreferrer"
              href="#home"
              className="text-xl sm:text-2xl font-bold text-red-500"
            >
              {about.name}
            </Link>
            <p className="mt-2 text-sm">©{currentYear}</p>
          </div>
          <div className="flex space-x-6">
            <Link
              target="_blank"
              rel="noreferrer"
              href={about.githubLink}
              className="hover:text-red-500 transition-colors"
            >
              GitHub
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={about.linkedinLink}
              className="hover:text-red-500 transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={about.mediumLink}
              className="hover:text-red-500 transition-colors"
            >
              Medium
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={`mailto:${about.email}`}
              className="hover:text-red-500 transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
