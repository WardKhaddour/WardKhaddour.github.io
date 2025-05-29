import { about } from "@/data/about";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaPhone,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <>
      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Contact Information
      </h3>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-red-600 text-xl" />
          <a
            href={`mailto:${about.email}`}
            className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors text-ellipsis overflow-hidden text-nowrap"
          >
            {about.email}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <FaPhone className="text-red-600 text-xl" />
          <a
            href={`tel:${about.phoneNumber.replace(" ", "")}`}
            className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors text-ellipsis overflow-hidden text-nowrap"
          >
            {about.phoneNumber}
          </a>
        </div>
      </div>

      <h4 className="text-lg font-medium mt-8 mb-4 text-gray-900 dark:text-white">
        Follow Me
      </h4>

      <div className="flex gap-4">
        <a
          href={about.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub className="text-gray-800 dark:text-gray-200 text-xl" />
        </a>

        <a
          href={about.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-gray-800 dark:text-gray-200 text-xl" />
        </a>

        <a
          href={about.mediumLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
          aria-label="Twitter"
        >
          <FaMedium className="text-gray-800 dark:text-gray-200 text-xl" />
        </a>
      </div>
    </>
  );
}
