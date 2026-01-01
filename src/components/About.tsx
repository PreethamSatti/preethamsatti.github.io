import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              HOW <span className="text-accent italic">CAN</span> I HELP?
            </h2>

            <div className="space-y-4 mb-8">
              <p className="font-body text-muted-foreground leading-relaxed">
                I am a multidisciplinary designer specializing in visual storytelling and creative branding. I combine aesthetics with purpose to create designs that leave lasting impressions.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                I believe that effective design solutions should be actively nurtured through hands-on participation and expertise. Whether you need poster design, branding, or motion graphics, I am ready for permanent cooperation.
              </p>
            </div>

            {/* Skills/Passion moved to Skills section */}
          </motion.div>

          {/* Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-accent" size={20} />
                <h3 className="font-display text-lg font-semibold">Education</h3>
              </div>
              <div>
                <h4 className="font-body font-medium mb-1">
                  Bachelor's in Information Technology
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-1">
                  Latvia University of Life Sciences and Technologies
                </p>
                <p className="font-body text-xs text-accent">
                  2021 – Expected Graduation: January 2026
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-accent" size={20} />
                <h3 className="font-display text-lg font-semibold">Experience</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-body font-medium mb-1">
                    Digital Marketing Intern
                  </h4>
                  <p className="font-body text-sm text-muted-foreground mb-1">
                    Liberamente ETS – Calabria, Italy
                  </p>
                  <p className="font-body text-xs text-accent mb-2">
                    January 2025 – May 2025
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Focus on social media campaigns, visual content creation, and marketing design.
                  </p>
                </div>
                <div>
                  <h4 className="font-body font-medium mb-1">
                    Digital Marketing Intern
                  </h4>
                  <p className="font-body text-sm text-muted-foreground mb-1">
                    Liberamente ETS – Calabria, Italy
                  </p>
                  <p className="font-body text-xs text-accent">
                    September 2025 – December 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
