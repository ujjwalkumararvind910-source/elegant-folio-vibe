import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Cloud, Layout, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: Layout,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript / JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML5 / CSS3', level: 95 },
      ],
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js / Express', level: 88 },
        { name: 'Python / Django', level: 80 },
        { name: 'REST APIs / GraphQL', level: 85 },
        { name: 'Authentication & Security', level: 82 },
      ],
    },
    {
      icon: Database,
      title: 'Database',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL / MySQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis', level: 75 },
        { name: 'Prisma / TypeORM', level: 80 },
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS / Azure', level: 80 },
        { name: 'Docker / Kubernetes', level: 78 },
        { name: 'CI/CD Pipelines', level: 82 },
        { name: 'Terraform', level: 70 },
      ],
    },
    {
      icon: Code2,
      title: 'Tools & Others',
      color: 'from-yellow-500 to-amber-500',
      skills: [
        { name: 'Git / GitHub', level: 92 },
        { name: 'VS Code / WebStorm', level: 90 },
        { name: 'Figma / Design', level: 75 },
        { name: 'Agile / Scrum', level: 85 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Progressive Web Apps', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Mobile-First Approach', level: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="gradient-hero bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/50 transition-smooth"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
