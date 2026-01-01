import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent font-body text-sm font-medium tracking-widest uppercase mb-4"
            >
              Visual Designer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover="hover"
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight mb-6 cursor-default"
            >
              <motion.span
                variants={{ hover: { x: -30 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-gold inline-block"
              >
                VISUAL
              </motion.span>
              <br />
              <motion.span
                variants={{ hover: { x: 30 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-block"
              >
                DESIGNER
              </motion.span>
              <br />
              <span className="font-light italic text-accent">Portfolio</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-md mb-8"
            >
              <p className="font-body text-muted-foreground leading-relaxed">
                Hi, my name is Preetham and I am a Visual Designer. My main goal is to create and develop aesthetic, visually engaging designs through graphics, motion, and video that bring products and ideas to life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
                data-cursor="link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
                <ArrowDown size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-body text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors"
                data-cursor="link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative" data-cursor="hello">
              <div className="w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Preetham Satti - Visual Designer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent opacity-50" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
