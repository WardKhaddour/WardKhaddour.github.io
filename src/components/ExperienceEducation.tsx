import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

type Props = {
  className?: string;
};
export default function ExperienceEducation({ className = "" }: Props) {
  return (
    <section
      id="experience"
      className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                <FaBriefcase className="text-xl text-red-600 dark:text-red-500" />
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h2>
            </div>

            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-4 h-4 bg-red-600 dark:bg-red-500 rounded-full"></div>
                  <div className="absolute left-2 top-5 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col xs:flex-row xs:items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                    <span>{exp.company}</span>
                    <span className="hidden xs:inline-block">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                <FaGraduationCap className="text-xl text-red-600 dark:text-red-500" />
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>

            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-4 h-4 bg-red-600 dark:bg-red-500 rounded-full"></div>
                  <div className="absolute left-2 top-5 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col xs:flex-row xs:items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                    <span>{edu.institution}</span>
                    <span className="hidden xs:inline-block">•</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
