import { motion } from "motion/react";
import { useInViewOnScrollDown } from "@/app/components/ui/use-in-view-scroll-down";
import { ExternalLink, Star, ArrowUpRight, Sparkles, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "2048 Pro",
    description: "An enhanced version of the classic 2048 puzzle game with smooth animations and advanced features",
    tags: ["JavaScript", "Game Dev", "UI/UX"],
    link: "https://2048pro.figma.site",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    text: "text-blue-600",
    featured: true,
  },
  {
    title: "Store Management System",
    description: "A comprehensive website maintenance and management system for small businesses",
    tags: ["React", "Admin Panel", "CMS"],
    link: "https://scs.figma.site",
    color: "from-purple-500 to-pink-600",
    bg: "bg-purple-50",
    text: "text-purple-600",
    featured: true,
  },
  {
    title: "AI-Powered Desmos",
    description: "An intelligent graphing calculator powered by AI for advanced mathematical visualization. Currently applying to ZhenFund.",
    tags: ["AI", "Mathematics", "ZhenFund"],
    link: "https://ai-desmos.figma.site",
    color: "from-emerald-400 to-teal-600",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    featured: true,
  },
  {
    title: "WishRelay",
    description: "A WeChat mini-program for wish relay and fulfillment, now available in web format for broader accessibility",
    tags: ["Mini Program", "Social", "Web App"],
    link: "https://wishrelay.figma.site",
    color: "from-rose-400 to-red-500",
    bg: "bg-rose-50",
    text: "text-rose-600",
    featured: false,
  },
  {
    title: "Dragon Match-3 Game",
    description: "A fun and addictive match-3 puzzle game featuring dragons with engaging gameplay mechanics",
    tags: ["Game Dev", "Animation", "Canvas"],
    link: "https://dragon.figma.site",
    color: "from-orange-400 to-amber-600",
    bg: "bg-orange-50",
    text: "text-orange-600",
    featured: false,
  },
  {
    title: "API Testing Tool",
    description: "A developer-friendly tool for testing and monitoring API endpoints with real-time results",
    tags: ["Developer Tools", "API", "Testing"],
    link: "https://api-check.figma.site",
    color: "from-cyan-400 to-blue-500",
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    featured: false,
  },
  {
    title: "GPA Calculator",
    description: "A clean and efficient GPA calculator designed to help students easily track and manage their academic performance.",
    tags: ["Utility", "Education", "Calculator"],
    link: "https://gpa-calculator.figma.site/",
    color: "from-teal-400 to-green-500",
    bg: "bg-teal-50",
    text: "text-teal-600",
    featured: false,
  },
  {
    title: "Pony Run",
    description: "A fast-paced endless runner game inspired by the classic Chrome dinosaur game — featuring fun power-ups like speed boosts, shields, and coin magnets to keep the adventure fresh.",
    tags: ["Game Dev", "JavaScript", "Canvas"],
    link: "https://pony.figma.site",
    color: "from-violet-500 to-fuchsia-600",
    bg: "bg-violet-50",
    text: "text-violet-600",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    }
  },
};

export function Projects() {
  const { ref, isVisible, transition } = useInViewOnScrollDown({
    margin: "-100px",
  });

  return (
    <section id="projects" className="min-h-screen py-32 px-6 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition({ duration: 0.8 })}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm mb-6">
            <FolderGit2 className="text-gray-600 w-4 h-4" />
            <span className="text-sm font-medium text-gray-600">Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 animate-gradient-x pb-2">
            Featured Work
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl">
            A collection of projects showcasing my journey in web development and design.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          transition={transition({ duration: 0.8 })}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-full"
            >
              <motion.div
                className="relative h-full bg-white rounded-3xl p-8 border border-gray-100 shadow-sm transition-all duration-500 overflow-hidden flex flex-col"
                whileHover={{ y: -12, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              >
                {/* Gradient Background Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                {/* Decorative Circle */}
                <motion.div 
                  className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.08] blur-3xl transition-all duration-700`}
                  style={{ originX: 0.5, originY: 0.5 }}
                  group-hover={{ scale: 1.2, rotate: 15 }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl ${project.bg} ${project.text} group-hover:scale-110 transition-transform duration-300`}>
                      <ExternalLink size={24} />
                    </div>
                    {project.featured && (
                      <motion.div
                        className="p-2 bg-yellow-50 rounded-full"
                        initial={{ opacity: 0, scale: 0, rotate: -90 }}
                        animate={
                          isVisible
                            ? { opacity: 1, scale: 1, rotate: 0 }
                            : { opacity: 0, scale: 0, rotate: -90 }
                        }
                        transition={transition({
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                        })}
                      >
                        <Star size={20} className="fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-900 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 mb-8 leading-relaxed flex-grow group-hover:text-gray-600 transition-colors">
                    {project.description}
                  </p>

                  <div className="space-y-6 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-50/80 backdrop-blur-sm rounded-lg text-xs font-medium text-gray-600 border border-gray-100/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full px-5 py-3 bg-gray-50 hover:bg-gray-900 text-gray-900 hover:text-white rounded-xl transition-all duration-300 group/btn"
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium">View Project</span>
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}