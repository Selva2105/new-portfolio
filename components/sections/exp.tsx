"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, GraduationCap } from "lucide-react";
import { TimelineItem } from '../ui/time-line';

const timelineItems = [
  {
    date: "Present",
    title: "Brilyant IT Solutions",
    description: "Working as a Software Developer focusing on modern web technologies",
    icon: <Building className="h-3 w-3 text-primary-foreground" />,
  },
  {
    date: "2023",
    title: "Innovation Award",
    description: "Recognized for breakthrough technology in artificial intelligence and machine learning.",
    icon: <Building className="h-3 w-3 text-primary-foreground" />,
  },
  {
    date: "2022",
    title: "Global Expansion",
    description: "Opened new offices in London, Tokyo, and Singapore, establishing a global presence.",
    icon: <Building className="h-3 w-3 text-primary-foreground" />,
  },
  {
    date: "2021",
    title: "Company Founded",
    description: "Started with a vision to revolutionize the industry with innovative solutions.",
    icon: <GraduationCap className="h-3 w-3 text-primary-foreground" />,
  },
];

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </div>

        <div className="relative mx-auto max-w-2xl px-4 py-16">
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                icon={item.icon}
                isLast={index === timelineItems.length - 1}
              />
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}