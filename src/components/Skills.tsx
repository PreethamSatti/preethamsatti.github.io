import { motion } from 'framer-motion';

const skills = [
  "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe After Effects",
  "Figma", "Visual Design", "Motion Graphics", "Poster Design",
  "Brand Identity", "Video Editing", "Graphic Design"
];

const Skills = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            SKILLS & <span className="text-gold italic">EXPERTISE</span>
          </h2>
          <p className="font-body text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit for visual storytelling, combining technical precision with creative flair.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                className="px-6 py-3 rounded-full border border-border bg-card hover:border-accent hover:text-accent transition-colors duration-300 cursor-default"
              >
                <span className="font-body text-sm md:text-base font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
