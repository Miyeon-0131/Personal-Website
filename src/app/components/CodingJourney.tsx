import { motion } from "motion/react";
import { Code2, Terminal, Cpu, Globe, Layout, Laptop, Sparkles } from "lucide-react";
import { useInViewOnScrollDown } from "@/app/components/ui/use-in-view-scroll-down";

export function CodingJourney() {
  const { ref, isVisible, transition } = useInViewOnScrollDown({
    margin: "-100px",
  });

  const timeline = [
    {
      year: "Childhood",
      title: "The Spark",
      description: "Fascinated by video games, I dreamed of creating my own interactive worlds.",
      icon: <Laptop size={24} />,
      color: "from-blue-500 to-cyan-400",
      bg: "bg-blue-50",
      text: "text-blue-600",
      span: "md:col-span-2"
    },
    {
      year: "Grade 3",
      title: "First Steps in C",
      description: "Accidentally joined the school coding team and wrote my first lines of code in C.",
      icon: <Terminal size={24} />,
      color: "from-indigo-500 to-purple-500",
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      span: "md:col-span-1"
    },
    {
      year: "Competitions",
      title: "Python & C++",
      description: "Explored Python for competitions and later advanced to C++ for algorithm challenges.",
      icon: <Code2 size={24} />,
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
      text: "text-purple-600",
      span: "md:col-span-1"
    },
    {
      year: "High School",
      title: "HTML & Java",
      description: "Learned HTML in IT classes and mastered Java during my AP Computer Science A course.",
      icon: <Cpu size={24} />,
      color: "from-pink-500 to-rose-400",
      bg: "bg-pink-50",
      text: "text-pink-600",
      span: "md:col-span-2"
    },
    {
      year: "Grade 11",
      title: "Discovering Figma Make",
      description: "Started self-learning web development and discovered Figma Make, an AI-powered tool that instantly converts Figma designs into production-ready React code.",
      icon: <Layout size={24} />,
      color: "from-rose-500 to-orange-400",
      bg: "bg-rose-50",
      text: "text-rose-600",
      span: "md:col-span-2"
    },
    {
      year: "Present",
      title: "Building Projects",
      description: "Fell in love with the efficiency of Figma Make and have since developed numerous web applications.",
      icon: <Globe size={24} />,
      color: "from-orange-500 to-yellow-400",
      bg: "bg-orange-50",
      text: "text-orange-600",
      span: "md:col-span-1"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -15 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      }
    },
  };

  return (
    <section id="journey" className="py-24 px-6 bg-gray-50 perspective-1000" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition({ duration: 0.8, ease: "easeOut" })}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <Sparkles className="text-yellow-500 w-4 h-4" />
            <span className="text-sm font-medium text-gray-600">Evolution of Skills</span>
          </div>
          <h2 className="text-5xl md:text-7xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 animate-gradient-x pb-4">
            My Coding Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From writing the first "Hello World" in C to building modern web applications.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          transition={transition({ duration: 0.8 })}
        >
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${item.span} group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100`}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              {/* Dynamic Gradient Blob */}
              <motion.div 
                className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-3xl`}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <motion.div 
                    className={`p-4 rounded-2xl ${item.bg} ${item.text} ring-1 ring-inset ring-black/5`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-xs font-bold tracking-wider text-gray-400 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 uppercase">
                    {item.year}
                  </span>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-lg group-hover:text-gray-600 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
