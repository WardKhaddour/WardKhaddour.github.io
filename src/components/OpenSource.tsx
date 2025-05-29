import { collaborations } from "@/data/collaborations";
import { FaGithub, FaStar } from "react-icons/fa";

type Props = {
  className?: string;
};
export default function OpenSource({ className = "" }: Props) {
  return (
    <section id="open-source" className={`py-20 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Open Source Contributions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Projects I've contributed to and helped improve
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborations.map((collab) => (
            <div
              key={collab.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                  <FaGithub className="text-2xl text-gray-800 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {collab.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {collab.stars} stars
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {collab.description}
              </p>
              <a
                href={collab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-600 dark:text-red-500 hover:underline"
              >
                View on GitHub
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
