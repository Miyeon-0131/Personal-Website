import { motion } from "motion/react";
import { useInViewOnScrollDown } from "@/app/components/ui/use-in-view-scroll-down";
import {
  Award,
  Trophy,
  Star,
  Presentation,
  Video,
  Palette,
  Globe,
  Zap,
  Calculator,
  Sparkles,
  Rocket,
} from "lucide-react";
import immcOAwardCertificate from "@/assets/immc-o-award-certificate.png";
import immcMAwardCertificate from "@/assets/immc-m-award-certificate.png";
import himcmHonorableMentionCertificate from "@/assets/himcm-honorable-mention-certificate.png";
import amc12Certificate from "@/assets/amc12-certificate.png";
import dukeParticipationCertificate from "@/assets/duke-participation-certificate.png";
import dukeBestVisualDesign from "@/assets/duke-best-visual-design.png";
import dukeFourierPoster from "@/assets/duke-fourier-poster.png";

const awards = [
  {
    icon: Globe,
    year: "2026",
    title: "IMMC — International Mathematical Modeling Challenge",
    organization: "IMMC International",
    description:
      "The crown jewel of my profile. The International Outstanding Award (O Award) is granted to only a handful of teams worldwide—evidence of near-graduate-level modeling, algorithm implementation, and academic paper collaboration. In a VC lens, this signals a born systems thinker.",
    award: "Outstanding Award (O Award) — International Greater China",
    certificate: immcOAwardCertificate,
    certificateAlt: "IMMC 2026 International Greater China Outstanding (O Award) certificate",
    featured: true,
  },
  {
    icon: Zap,
    year: "2026",
    title: "Physics Bowl — Asian Camp Qualification",
    organization: "American Association of Physics Teachers",
    description:
      "A hardcore physics credential. Scoring ≥ 25 under extreme time pressure places you ahead of the vast majority of peers across Asia—pure quantitative reasoning under fire.",
    award: "Asian Training Camp Qualification (Score ≥ 25)",
    featured: true,
  },
  {
    icon: Trophy,
    year: "2025",
    title: "WeChat Mini-Program Global Innovation Challenge",
    organization: "WeChat",
    description:
      "Led a team of three to ship a carbon-footprint calculator mini-program with real user value. For investors such as ZhenFund, this often outweighs single-subject olympiad medals—it proves leadership, full-stack delivery, and product thinking.",
    award: "Global Third Prize",
    featured: true,
  },
  {
    icon: Calculator,
    year: "2026",
    title: "IMMC — Greater China Regional Contest",
    organization: "IMMC Greater China",
    description:
      "The launchpad toward the international O Award—Meritorious (First Prize) in the Greater China regional contest, demonstrating high-level mathematical modeling at national scale.",
    award: "Meritorious Award (M Award) — Greater China Regional",
    certificate: immcMAwardCertificate,
    certificateAlt: "IMMC 2026 Greater China Regional Meritorious (M Award) certificate",
  },
  {
    icon: Award,
    year: "2025",
    title: "AMC 12 — American Mathematics Competition",
    organization: "Mathematical Association of America",
    description:
      "Top 25% globally on a standard international math contest—academic ballast showing strong fundamentals beyond project-based modeling alone.",
    award: "Global Top 25%",
    certificate: amc12Certificate,
    certificateAlt: "AMC 12 2025 Top 25% certificate",
  },
  {
    icon: Palette,
    year: "2025",
    title: "When AI Meets Intangible Cultural Heritage",
    organization: "Shanghai Municipal Student Program",
    description:
      "Second Prize for an AI-driven sugar-painting narrative—fast adoption of frontier tools (prompting, AIGC workflows) that directly supports how I build products like AI Desmos with AI-native velocity.",
    award: "Team Second Prize — Shanghai",
  },
  {
    icon: Video,
    year: "2025",
    title: "Youth AI Innovation Competition (AIGC)",
    organization: "China–Shanghai AIGC Program",
    description:
      "Third Prize for an independent AIGC short film on future cities—another signal of rapid experimentation with generative media and creative tooling.",
    award: "Individual Third Prize",
  },
  {
    icon: Rocket,
    year: "2025",
    title: "HiMCM — High School Mathematical Contest in Modeling",
    organization: "COMAP",
    description:
      "Honorable Mention in a rigorous international modeling contest—adds depth to a consistent track record across IMMC and HiMCM.",
    award: "Honorable Mention (H Award)",
    certificate: himcmHonorableMentionCertificate,
    certificateAlt: "HiMCM 2025 Honorable Mention certificate",
  },
  {
    icon: Presentation,
    year: "2025",
    title: "Duke Math Meet China",
    organization: "Duke University",
    description:
      "Qualified in the top 40% of the local selection and served as a presenter for our team’s “Fourier: Math & Music” poster—covering Fourier analysis, audio processing, and the project demo. Our school also received Best Visual Design for the poster; my role was presentation, not poster design.",
    award: "Certificate of Participation (Top 40%) & Team Presentation",
    certificates: [
      {
        src: dukeParticipationCertificate,
        alt: "Duke Math Meet China 2025 Certificate of Participation",
      },
      {
        src: dukeBestVisualDesign,
        alt: "Duke Math Meet China Best Visual Design award announcement",
      },
      {
        src: dukeFourierPoster,
        alt: "Fourier: Math & Music — presentation poster at Duke Math Meet China",
      },
    ],
  },
];

export function Awards() {
  const { ref, isVisible, transition } = useInViewOnScrollDown({
    margin: "-100px",
  });

  return (
    <section id="awards" className="min-h-screen py-32 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition({ duration: 0.8 })}
        >
          Awards & Honors
        </motion.h2>

        <motion.div
          className="mb-12 p-6 md:p-8 bg-gray-900 text-white rounded-2xl border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={transition({ duration: 0.8, delay: 0.1 })}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-xl shrink-0">
              <Sparkles size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-2">
                ZhenFund — AI Desmos
              </h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">AI Desmos</strong> is currently
                under application to ZhenFund. The project extends my AI-native
                build velocity—pairing intelligent graphing with the same
                product instincts recognized in my WeChat Global Innovation
                award and AIGC competition work.
              </p>
              <p className="text-sm text-gray-400 mt-3 italic">
                Application in progress
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              className="relative"
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={
                isVisible
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: -100, scale: 0.8 }
              }
              transition={transition({
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                bounce: 0.3,
              })}
            >
              <motion.div
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ rotateY: -15 }}
                animate={isVisible ? { rotateY: 0 } : { rotateY: -15 }}
                transition={transition({ duration: 0.6, delay: index * 0.15 + 0.2 })}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-0"
                  animate={
                    isVisible
                      ? {
                          opacity: [0, 0.5, 0],
                          x: ["-100%", "100%"],
                        }
                      : {}
                  }
                  transition={transition({
                    duration: 1.5,
                    delay: index * 0.15 + 0.5,
                    ease: "easeInOut",
                  })}
                />

                <div className="flex items-start gap-6 relative z-10">
                  <motion.div
                    initial={{ rotate: -180, scale: 0 }}
                    animate={
                      isVisible
                        ? { rotate: 0, scale: 1 }
                        : { rotate: -180, scale: 0 }
                    }
                    transition={transition({
                      duration: 0.6,
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      bounce: 0.5,
                    })}
                  >
                    <motion.div
                      className="p-4 bg-gray-900 text-white rounded-xl cursor-pointer"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <award.icon size={28} />
                    </motion.div>
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <motion.div
                          className="flex items-center gap-2 mb-2"
                          initial={{ opacity: 0, y: -20 }}
                          animate={
                            isVisible
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: -20 }
                          }
                          transition={transition({
                            duration: 0.5,
                            delay: index * 0.15 + 0.4,
                          })}
                        >
                          <h3 className="text-2xl">{award.title}</h3>
                          {award.featured && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                scale: 0,
                                rotate: -180,
                              }}
                              animate={
                                isVisible
                                  ? {
                                      opacity: 1,
                                      scale: 1,
                                      rotate: 0,
                                    }
                                  : {
                                      opacity: 0,
                                      scale: 0,
                                      rotate: -180,
                                    }
                              }
                              transition={transition({
                                delay: index * 0.15 + 0.6,
                                type: "spring",
                                bounce: 0.6,
                              })}
                            >
                              <Star
                                size={20}
                                className="fill-yellow-400 text-yellow-400"
                              />
                            </motion.div>
                          )}
                        </motion.div>
                        <motion.p
                          className="text-gray-600 text-lg mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isVisible
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={transition({
                            duration: 0.5,
                            delay: index * 0.15 + 0.5,
                          })}
                        >
                          {award.organization}
                        </motion.p>
                        <motion.p
                          className="text-sm text-gray-500 italic"
                          initial={{ opacity: 0 }}
                          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                          transition={transition({
                            duration: 0.5,
                            delay: index * 0.15 + 0.6,
                          })}
                        >
                          {award.award}
                        </motion.p>
                      </div>
                      <motion.span
                        className="text-3xl text-gray-300"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isVisible
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={transition({
                          duration: 0.5,
                          delay: index * 0.15 + 0.4,
                          type: "spring",
                        })}
                      >
                        {award.year}
                      </motion.span>
                    </div>
                    <motion.p
                      className="text-gray-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={transition({
                        duration: 0.6,
                        delay: index * 0.15 + 0.7,
                      })}
                    >
                      {award.description}
                    </motion.p>
                    {(() => {
                      const images =
                        "certificates" in award && award.certificates
                          ? award.certificates
                          : "certificate" in award && award.certificate
                            ? [
                                {
                                  src: award.certificate,
                                  alt: award.certificateAlt ?? "Award certificate",
                                },
                              ]
                            : [];

                      if (images.length === 0) return null;

                      return (
                        <div className="mt-6 space-y-4">
                          {images.map((image, imageIndex) => (
                            <motion.div
                              key={image.alt}
                              className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50"
                              initial={{ opacity: 0, y: 16 }}
                              animate={
                                isVisible
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: 16 }
                              }
                              transition={transition({
                                duration: 0.6,
                                delay: index * 0.15 + 0.85 + imageIndex * 0.08,
                              })}
                            >
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto object-contain"
                              />
                            </motion.div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </motion.div>

              {index < awards.length - 1 && (
                <motion.div
                  className="absolute left-10 top-full h-8 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={
                    isVisible ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }
                  }
                  transition={transition({
                    duration: 0.4,
                    delay: index * 0.15 + 0.8,
                  })}
                  style={{ transformOrigin: "top" }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
