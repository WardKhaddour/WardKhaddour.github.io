import Link from "next/link";
import { MdArrowRight } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto max-w-md">
          <div className="relative">
            <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-200">
              4<span className="text-red-600 animate-pulse">0</span>4
            </h1>
            <div className="absolute -inset-4 rounded-full bg-red-100 dark:bg-red-900 opacity-30 blur-lg animate-pulse"></div>
          </div>

          <h2 className="mt-6 text-2xl font-medium text-gray-700 dark:text-gray-300">
            Page Not Found
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="group flex items-center rounded-md bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors duration-200"
            >
              Back to home
              <MdArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-3 gap-8 opacity-40">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full bg-red-500 mx-auto"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
