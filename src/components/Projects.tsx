import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import Slider from "./Slider";
type Props = {
  className?: string;
};
export default function Projects({ className = "" }: Props) {
  return (
    <section
      id="projects"
      className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Swipe through my recent works
          </p>
        </div>

        <Slider slides={projects}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full flex-shrink-0 sm:px-4 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 w-full flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-500 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block px-4 py-2 text-red-600 dark:text-red-500 font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
