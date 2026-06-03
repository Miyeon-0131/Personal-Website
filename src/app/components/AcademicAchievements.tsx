import { motion } from "motion/react";
import { useInViewOnScrollDown } from "@/app/components/ui/use-in-view-scroll-down";
import { BookOpen, Calculator, Atom } from "lucide-react";
import apCsAScore from "@/assets/ap-cs-a-score.png";
import apPhysics1Score from "@/assets/ap-physics-1-score.png";
import apPrecalculusScore from "@/assets/ap-precalculus-score.png";

const achievements = [
  {
    subject: "AP Computer Science A",
    highlight: "5",
    highlightLabel: "Score",
    icon: <BookOpen size={32} />,
    color: "bg-blue-50 text-blue-600",
    grade: "Grade 10 (G10)",
    description:
      "Demonstrated strong understanding of Java programming and algorithm design.",
    scoreProof: apCsAScore,
    scoreProofAlt: "College Board AP Computer Science A score report — 5",
  },
  {
    subject: "AP Physics 1",
    highlight: "5",
    highlightLabel: "Score",
    icon: <Atom size={32} />,
    color: "bg-purple-50 text-purple-600",
    grade: "Grade 10 (G10)",
    description:
      "Mastered fundamental principles of mechanics, energy, and momentum.",
    scoreProof: apPhysics1Score,
    scoreProofAlt: "College Board AP Physics 1 score report — 5",
  },
  {
    subject: "AP Pre-Calculus",
    highlight: "5",
    highlightLabel: "Score",
    icon: <Calculator size={32} />,
    color: "bg-rose-50 text-rose-600",
    grade: "Grade 10 (G10)",
    description: "Excelled in mathematical modeling and functions analysis.",
    scoreProof: apPrecalculusScore,
    scoreProofAlt: "College Board AP Precalculus score report — 5",
  },
];

export function AcademicAchievements() {
  const { ref, isVisible, transition } = useInViewOnScrollDown({
    margin: "-100px",
  });

  return (
    <section id="achievements" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition({ duration: 0.8 })}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic Achievements
          </h2>
          <p className="text-xl text-gray-600">
            Building a strong foundation in STEM disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.subject}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={transition({ duration: 0.5, delay: index * 0.1 })}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`p-4 rounded-xl ${item.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.highlight}
                  </span>
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {item.highlightLabel}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{item.subject}</h3>
              <p className="text-sm text-gray-500 mb-3">{item.grade}</p>
              <p className="text-gray-600 leading-relaxed text-sm mb-5">
                {item.description}
              </p>

              <div className="mt-auto rounded-xl overflow-hidden border border-gray-200">
                <img
                  src={item.scoreProof}
                  alt={item.scoreProofAlt}
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
