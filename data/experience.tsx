interface Experience {
    company: string;
    position: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        company: "Brilyant IT Solutions",
        position: "Software Developer",
        period: "Present",
        description: "Working as a Software Developer focusing on modern web technologies",
        achievements: [
            "Just started the journey",
            "Looking forward to new challenges and opportunities"
        ],
        technologies: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
        company: "Travelfika",
        position: "MERN Stack Developer",
        period: "November 2023 - December 2023",
        description: "Developed and enhanced the Travelfika platform with modern web solutions",
        achievements: [
            "Built Travelfika blogs page from scratch",
            "Integrated Contentful CMS for efficient content management",
            "Implemented SSR for better code reusability",
            "Enhanced UI across all website modules",
            "Utilized Next.js 14 for optimal performance"
        ],
        technologies: ["Next.js", "React", "Node.js", "Contentful", "SSR", "TypeScript"]
    },
    {
        company: "G2 Technology Solutions Pvt Ltd",
        position: "Full-stack Developer Intern",
        period: "January 2023 - September 2023",
        description: "Gained comprehensive training in full-stack development while contributing to internal projects",
        achievements: [
            "Received extensive training in full-stack development",
            "Contributed to internal company projects",
            "Developed practical skills in modern web technologies"
        ],
        technologies: ["React", "Node.js", "JavaScript", "Full-stack Development"]
    },
    {
        company: "Nehru arts and science college",
        position: "Student",
        period: "June 2020 - May 2023",
        description: "I pursued my Bachelor of Computer Applications degree at Nehru Arts and Science College, where I gained a strong foundation in computer science principles and practical skills in programming, database management, and software development. This academic experience equipped me with the necessary knowledge and skills to excel in the field of technology.",
        achievements: [
            "Built a responsive website using HTML, CSS, and JavaScript",
        ],
        technologies: ["SQL", 'Basic Progamming']
    }
];