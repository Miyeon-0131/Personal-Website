import { motion } from "motion/react";
import { Code2, Terminal, Cpu, Globe, Layout, Laptop, Sparkles } from "lucide-react";
import { useInViewOnScrollDown } from "@/app/components/ui/use-in-view-scroll-down";
import { useLanguage } from "@/i18n/LanguageContext";

const journeyMeta = [
  { icon: <Laptop size={22} />, span: "md:col-span-2" },
  { icon: <Terminal size={22} />, span: "md:col-span-1" },
  { icon: <Code2 size={22} />, span: "md:col-span-1" },
  { icon: <Cpu size={22} />, span: "md:col-span-2" },
  { icon: <Layout size={22} />, span: "md:col-span-2" },
  { icon: <Globe size={22} />, span: "md:col-span-1" },
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
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section id="journey" className="py-24 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition({ duration: 0.8, ease: "easeOut" })}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200/70 shadow-sm mb-6">
            <Sparkles className="text-gray-500 w-4 h-4" />
            <span className="text-sm font-medium text-gray-600">
              {t.journey.badge}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl mb-4 text-gray-900 tracking-tight pb-2">
            {t.journey.title}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t.journey.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
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
                className={`${meta.span} group relative bg-white rounded-2xl p-8 border border-gray-200/70 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden`}
                whileHover={{ y: -5 }}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3.5 rounded-xl bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                      {meta.icon}
                    </div>
                    <span className="text-xs font-medium tracking-wider text-gray-500 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200/60 uppercase">
                      {item.year}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
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
