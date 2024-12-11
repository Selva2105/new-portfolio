import { RefAttributes } from "react";

import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";
import { Code2, Database, Layout, Settings, Server, Wrench  } from 'lucide-react';

export interface skillCategories {
    title: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    skills: string[];
}

export const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML5/CSS3'],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Prisma'],
    },
    {
      title: 'DevOps',
      icon: Settings,
      skills: ['CI/CD', 'GitHub Actions'],
    },
    {
      title: 'Tools',
      icon: Wrench ,
      skills: ['Git', 'VS Code', 'Postman'],
    },
    {
      title: 'Languages',
      icon: Code2,
      skills: ['JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
    },
  ];