"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  isLast?: boolean;
}

export function TimelineItem({ date, title, description, icon, isLast = false }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8"
    >
      {!isLast && (
        <div className="absolute left-[11px] top-[24px] h-full w-[2px] bg-gradient-to-b from-primary/50 to-transparent" />
      )}

      <div className="absolute left-0 top-[6px] flex h-6 w-6 items-center justify-center rounded-full bg-primary shadow-md">
        {icon}
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center space-x-3">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-x-2"><Calendar className="w-4 h-4" /> {date}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}