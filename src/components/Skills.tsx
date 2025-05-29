import { skills } from "@/data/skills";
import { Motion } from "./Motion";

type Props = {
  className?: string;
};
export default function Skills({ className = "" }: Props) {
  return (
    <section id="skills" className={`py-20 ${className}`}>
      <div className="container mx-auto">
        <Motion
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technologies I Work With
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My toolkit for building amazing digital experiences
          </p>
        </Motion>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Motion
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-4 text-red-600 dark:text-red-500">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                {skill.name}
              </h3>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}
