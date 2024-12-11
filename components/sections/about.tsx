"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { personalDetails } from '@/data/about';

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 container px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={personalDetails.profile}
            alt={personalDetails.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-muted-foreground">
            Hi, I'm {personalDetails.name}, a passionate Full Stack Developer with {personalDetails.experience} of experience
            in building web applications. I specialize in JavaScript/TypeScript and have
            extensive experience with React, Nextjs, Node.js, and modern web technologies.
          </p>
          <p className="text-muted-foreground">
            I'm dedicated to creating efficient, scalable, and user-friendly applications
            that solve real-world problems. When I'm not coding, you can find me
            contributing to open-source projects or writing technical blog posts.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-muted-foreground">{personalDetails.address}</p>
            </div>
            <div>
              <h3 className="font-semibold">Experience</h3>
              <p className="text-muted-foreground">{personalDetails.experience}</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground">{personalDetails.email}</p>
            </div>
            <div>
              <h3 className="font-semibold">Availability</h3>
              <p className="text-muted-foreground">{personalDetails.availability}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}