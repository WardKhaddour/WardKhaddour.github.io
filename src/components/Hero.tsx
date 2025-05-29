import { about } from "@/data/about";
import Image from "next/image";
import DownloadResume from "./DownloadResume";
import { Motion } from "./Motion";

type Props = {
  className?: string;
};
export default function Hero({ className = "" }: Props) {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center pt-20 ${className}`}
    >
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="text-red-600 dark:text-red-500">
                {about.name}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              {about.description}
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                View Work
              </a>

              <DownloadResume />
            </div>
          </Motion>
          <Motion
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/developer-illustration.png"
                alt="Developer illustration"
                fill
                className="object-contain -scale-x-100"
              />
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
