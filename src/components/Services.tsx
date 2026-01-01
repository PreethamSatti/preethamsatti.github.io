import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'POSTER DESIGN',
    description: 'Creative and eye-catching poster designs that communicate your message effectively with strong visual impact.',
  },
  {
    id: '02',
    title: 'GRAPHIC DESIGN',
    description: 'Comprehensive graphic design solutions for print and digital media, ensuring brand consistency across all touchpoints.',
  },
  {
    id: '03',
    title: 'BRANDING',
    description: 'Complete visual identity systems including logo design, color palettes, typography, and brand guidelines.',
  },
  {
    id: '04',
    title: 'VIDEO EDITING',
    description: 'Professional video editing services that tell your story through compelling visual narratives.',
  },
  {
    id: '05',
    title: 'MOTION GRAPHICS',
    description: 'Dynamic motion graphics and animations that bring static designs to life with movement and energy.',
  },
  {
    id: '06',
    title: 'UI/UX DESIGN',
    description: 'User-centered interface design that balances aesthetics with functionality for seamless digital experiences.',
  },
];

const Services = () => {
  const [expandedId, setExpandedId] = useState<string | null>('01');

  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            STAGES OF WEBSITE
            <br />
            <span className="text-accent italic">DEVELOPMENT</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-border"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === service.id ? null : service.id)
                }
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-8">
                  <span className="font-body text-xs text-muted-foreground">
                    STAGE {service.id}
                  </span>
                  <h3 className="font-display text-lg md:text-xl font-medium tracking-tight group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {expandedId === service.id ? (
                    <X size={20} className="text-accent" />
                  ) : (
                    <Plus size={20} className="text-muted-foreground" />
                  )}
                </div>
              </button>

              {expandedId === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pb-6 pl-20"
                >
                  <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default Services;
