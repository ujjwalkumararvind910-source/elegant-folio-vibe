import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handleDownloadCV = () => {
    // In a real app, this would download the actual CV
    alert('CV download feature - connect to your actual CV file!');
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
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
              About <span className="gradient-hero bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know more about my journey, experience, and what drives me as a developer
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Bio */}
            <motion.div
              variants={itemVariants}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border hover:border-primary/50 transition-smooth"
            >
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate Full Stack Developer with over 5 years of experience in building 
                  modern web applications. My journey in tech started with a curiosity about how 
                  websites work, which quickly evolved into a deep passion for creating elegant 
                  solutions to complex problems.
                </p>
                <p>
                  I specialize in React, Node.js, and cloud technologies, with a strong focus on 
                  creating scalable, performant, and user-friendly applications. I believe in writing 
                  clean, maintainable code and following best practices.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
              <Button
                onClick={handleDownloadCV}
                className="mt-6 gradient-accent text-white font-semibold hover:opacity-90 transition-smooth"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </motion.div>

            {/* Education & Experience */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Education */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border hover:border-primary/50 transition-smooth">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg gradient-hero">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Computer Science</h4>
                    <p className="text-muted-foreground">Maharaja Agrasen Institute of Technology</p>
                    <p className="text-sm text-muted-foreground">2023 - 2027</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Certifications</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>AWS Certified Solutions Architect</li>
                      <li>React Advanced Patterns</li>
                      <li>Node.js Professional Certificate</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border hover:border-primary/50 transition-smooth">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg gradient-accent">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Senior Full Stack Developer</h4>
                    <p className="text-muted-foreground">TechCorp Inc.</p>
                    <p className="text-sm text-muted-foreground">2025 - Present</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Full Stack Developer</h4>
                    <p className="text-muted-foreground">StartupXYZ</p>
                    <p className="text-sm text-muted-foreground">2023 - 2027</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
