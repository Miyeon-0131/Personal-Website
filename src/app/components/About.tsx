import { motion } from "motion/react";
import { Mail, MapPin, Briefcase, Music } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { useInViewOnScrollDown } from "@/app/components/ui/use-in-view-scroll-down";

export function About() {
  const { ref, isVisible, transition } = useInViewOnScrollDown({
    margin: "-100px",
  });

  return (
    <section id="about" className="min-h-screen py-32 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition({ duration: 0.8 })}
        >
          <h2 className="text-5xl md:text-7xl mb-16">About Me</h2>

          <div className="grid md:grid-cols-5 gap-12">
            <motion.div
              className="md:col-span-3 md:pl-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={transition({ duration: 0.8, delay: 0.2 })}
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                I'm Junyu Ling, a 17-year-old high school student from Shanghai
                with a deep passion for web development and computer science.
                I love exploring new technologies and turning creative ideas
                into functional projects.
              </p>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Beyond coding, I'm passionate about music. I started learning piano at the age of 4.5 and have achieved Grade 7 in ABRSM Piano. Currently, I'm also learning the clarinet. In my free time, I often serve as a piano accompanist for children, finding joy and creative inspiration in collaborative performance.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm also deeply involved in school activities, frequently serving as a host for events like the Flag-Raising Ceremony, Sports Meet, and the New Year's Song and Dance Party. I enjoy collaborating with co-hosts to draft and refine scripts. Additionally, I actively participate in talent showcases such as the "Sounds of Nature" competition and school galas to share my artistic passion.
              </p>
            </motion.div>

            <motion.div
              className="md:col-span-2 space-y-6 md:-mt-4"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={transition({ duration: 0.8, delay: 0.4 })}
            >
              <motion.div
                className="flex justify-center mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={transition({ duration: 0.8, delay: 0.5 })}
              >
                <div className="relative">
                  <motion.img
                    src={profileImage}
                    alt="Junyu Ling"
                    className="w-48 h-48 rounded-full object-cover border-4 border-gray-200 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-gray-900"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.1, opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <p className="text-gray-600">LingJunYu20081201@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Age</h3>
                  <p className="text-gray-600">17 Years Old</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Status</h3>
                  <p className="text-gray-600">Student & Self-taught Developer</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Music size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Music</h3>
                  <p className="text-gray-600">ABRSM Piano Grade 7 | Learning Clarinet</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}