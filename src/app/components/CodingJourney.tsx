import { motion } from "motion/react";
import { Code2, Terminal, Cpu, Globe, Layout, Laptop, Sparkles } from "lucide-react";
import { useInViewOnScrollDown } from "@/app/components/ui/use-in-view-scroll-down";
import { useLanguage } from "@/i18n/LanguageContext";

const journeyMeta = [
  {
    icon: <Laptop size={24} />,
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    text: "text-blue-600",
    span: "md:col-span-2",
  },
  {
    icon: <Terminal size={24} />,
    color: "from-indigo-500 to-purple-500",
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    span: "md:col-span-1",
  },
  {
    icon: <Code2 size={24} />,
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    text: "text-purple-600",
    span: "md:col-span-1",
  },
  {
    icon: <Cpu size={24} />,
    color: "from-pink-500 to-rose-400",
    bg: "bg-pink-50",
    text: "text-pink-600",
    span: "md:col-span-2",
  },
  {
    icon: <Layout size={24} />,
    color: "from-rose-500 to-orange-400",
    bg: "bg-rose-50",
    text: "text-rose-600",
    span: "md:col-span-2",
  },
  {
    icon: <Globe size={24} />,
    color: "from-orange-500 to-yellow-400",
    bg: "bg-orange-50",
    text: "text-orange-600",
    span: "md:col-span-1",
  },
];

export function CodingJourney() {
  const { t } = useLanguage();
  const { ref, isVisible, transition } = useInViewOnScrollDown({
    margin: "-100px",
  });

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
      },
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
            <span className="text-sm font-medium text-gray-600">
              {t.journey.badge}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 pb-4">
            {t.journey.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.journey.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          transition={transition({ duration: 0.8 })}
        >
          {t.journey.items.map((item, index) => {
            const meta = journeyMeta[index];
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={`${meta.span} group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100`}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <motion.div
                  className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${meta.color} opacity-10 blur-3xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${meta.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <motion.div
                      className={`p-4 rounded-2xl ${meta.bg} ${meta.text} ring-1 ring-inset ring-black/5`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {meta.icon}
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
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
