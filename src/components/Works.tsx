import { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import projectPoster from '@/assets/project-poster.jpg';
import projectBranding from '@/assets/project-branding.png';
import projectSocial from '@/assets/project-social.jpg';
import projectVideo from '@/assets/project-video.jpg';
import brand1 from '@/assets/brand-identity/brand-1.jpg';
import brand2 from '@/assets/brand-identity/brand-2.jpg';
import brand3 from '@/assets/brand-identity/brand-3.jpg';
import brand4 from '@/assets/brand-identity/brand-4.jpg';
import brand5 from '@/assets/brand-identity/brand-5.jpg';
import brand6 from '@/assets/brand-identity/brand-6.jpg';
import brand7 from '@/assets/brand-identity/brand-7.png';
import brand8 from '@/assets/brand-identity/brand-8.jpg';
import liberamente1 from '@/assets/liberamente/liberamente-1.jpg';
import liberamente2 from '@/assets/liberamente/liberamente-2.jpg';
import liberamente3 from '@/assets/liberamente/liberamente-3.jpg';
import projectMotion from '@/assets/project-motion.gif';
import ProjectOverlay from './ProjectOverlay';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  caseStudy?: {
    subtitle?: string;
    details: string;
    image?: string;
    gallery?: string[];
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Key Art Composition',
    category: 'Poster Design',
    description: 'Poster series',
    image: projectPoster,
    caseStudy: {
      subtitle: 'Project Type: Personal / Speculative Design • Role: Concept & Visual Design • Tools: Adobe Photoshop',
      details: `The Premise
As a personal challenge, I designed a movie poster for the release of Deadpool & Wolverine that meets professional studio standards. My goal was to simulate a real-world brief: create a "Teaser" image that builds hype and conveys the film's tone without relying on celebrity headshots.

The Concept: "Disrupting the Experience"
The concept leans into the "meta" nature of the franchise. I visualized Deadpool as the audience member—represented by his branded popcorn bucket—being violently interrupted by his co-star. It tells the story of the film (the clash between the two leads) using a single, striking prop interaction rather than complex scenery.

Technical Execution (Photoshop Workflow)

Advanced Compositing: This entire image was built in Photoshop. I combined multiple stock assets, meticulously matching the perspective of the Wolverine glove with the bucket to create a cohesive physical space.

Lighting & Materiality: I manually painted lighting highlights and contact shadows to sell the illusion. This was particularly critical for the adamantium claws; I had to manually adjust curves and reflections to ensure they looked like cold, hard metal cutting through the matte paper bucket.

Motion & Energy: To break the static nature of the image, I utilized directional blur filters on the popcorn debris to simulate the physics of a sudden impact.`
    }
  },
  {
    id: 2,
    title: 'Rebranding Identity',
    category: 'Branding',
    description: 'Branding series',
    image: projectBranding,
    caseStudy: {
      subtitle: 'Project: X (Twitter) Brand Identity Evolution • Role: Brand Identity & UI Designer • Tools: Illustrator, Photoshop, Figma',
      details: `The Challenge: An Identity Crisis
Even though it has been two years since Twitter became X, the old name hasn't faded away. The platform currently suffers from significant brand friction: a stark, industrial new logo that feels disconnected from a user base that still culturally adheres to the vernacular of the old platform (e.g., "Tweeting"). This observation sparked a personal design challenge: Could the logo be the missing link to solve this identity crisis?

The Objective
To design a hybrid identity system that bridges the gap between the nostalgic warmth of Twitter and the futuristic ambition of X. The goal was to create a symbol that acknowledges the platform's roots while embracing its evolution, making long-time users feel that "Twitter still exists" within the new ecosystem.

The Solution: The "Digital Quill"
I reimagined the X branding by infusing it with the classic 'bird' styling, aiming to create a symbol that feels both nostalgic and futuristic.

The Symbol: I transformed one stroke of the static "X" into a stylized feather. This acts as a visual metaphor for a "digital quill"—referencing the platform's core history as a publishing tool while softening the harshness of the current brutalist branding.

Typography: I reintroduced the "twitter" wordmark alongside the new icon, using a modern, rounded typeface to bridge the old name with the new visual language.

The Color System: Defining User Tiers
To fix the identity crisis, I brought back the feather, paying homage to the platform's roots, and implemented a dynamic color system to distinguish user tiers.

Classic Blue (Standard Users): The iconic Twitter blue is retained for standard users, preserving crucial brand equity and trust.

Cyber Neon (Premium Users): A vibrant purple/violet gradient is introduced for "Twitter+" or Premium users. This symbolizes the futuristic, AI-powered capabilities of the new X platform.

The Result
A cohesive brand identity that successfully merges legacy with future vision. The resulting system offers a softer transition for users, visually reassuring them that the soul of the platform remains, while still aligning with the forward-looking goals of X.`,
      gallery: [brand1, brand2, brand3, brand4, brand5]
    }
  },
  {
    id: 3,
    title: 'Merchandise design',
    category: 'Social Media Design',
    description: 'Non-profit organization branding',
    image: projectSocial,
    caseStudy: {
      subtitle: 'Project Type: Merchandise Design / Community Branding • Role: Graphic Designer & Visual Strategist • Tools: Adobe Photoshop, Adobe Illustrator',
      details: `The Context
San Giorgio Albanese is a vibrant locality hosting international Erasmus students. However, there is often a natural barrier between visiting students and the local residents due to language and cultural differences. The non-profit organization Liberamente ETS needed a way to bridge this gap and foster a sense of belonging.

The Objective
To design a collection of apparel that serves as an "icebreaker"—turning t-shirts into conversation starters. The goal was to visually connect the international "Intern" experience with the local "San Giorgio" culture, making integration fun, stylish, and wearable.

The Design Strategy: "Wearable Icebreakers"
I developed three distinct concepts, each targeting a different aspect of the student-local connection:

1. The "Common Ground" (Food & Culture)
Concept: Food is the universal language. I created a typographic crossword design where popular Italian words (Pasta, Gelato, Spritz) intersect.
Visual Mechanic: The vertical intersection of these words spells out "SAN GIORGIO" in green, subtly embedding the location within the things the students love most. This highlights that the town is the center of these joyful experiences.

2. The "Periodic" Intern
Concept: A playful take on the word "Intern" using the Periodic Table of Elements, designed specifically for the academic demographic of Erasmus students.
The Twist: Instead of chemical names, I replaced the elements (In, Te, Rn) with local food staples: Insalata (Salad), Tella (Cake/Pie), and Rigatoni. It playfully suggests that an "Intern" in Italy is chemically composed of good food.

3. The Local Pulse
Concept: A minimalist, pride-focused design featuring the map outline of San Giorgio Albanese connected to an EKG heartbeat line.
Meaning: It signifies that the town is alive and that the students are now part of its heartbeat.

Branding & Consistency
All designs feature the Liberamente ETS logo on the back, accompanied by the campaign hashtag #INTERNATIONALEXPERIENCE. I stylized the letter "L" in green to match the organization's branding, creating a cohesive visual identity across the different shirt colors.

Impact (Proposed)
These designs are intended to be worn during orientation weeks and community mixers, transforming students into walking ambassadors for the program and inviting locals to engage with the humorous and culturally relevant graphics.`,
      gallery: [liberamente1, liberamente2, liberamente3]
    }
  },
  {
    id: 4,
    title: 'Visual storytelling',
    category: 'Motion Graphics',
    description: 'Motion Work',
    image: projectVideo,
    caseStudy: {
      subtitle: 'Project Type: Motion Graphics / Loop Animation • Role: Motion Designer & Video Editor • Tools: Adobe After Effects (Animation & Compositing), Adobe Photoshop (Asset Prep)',
      details: `The Context
Mahendra Singh Dhoni (MSD) is an era unto himself in the world of cricket. To define his legacy, a simple highlight reel would not suffice. My objective was to create a looping visual narrative that starts from his legendary status, dives into his memories, and returns to his timeless impact.

The Concept: A Cyclic Visual Journey
The project is structured as a seamless loop, representing the idea that while his career has a timeline, his legacy is infinite. The narrative flow moves from the cosmic to the grounded, and back again.

Scene 1: The Cosmic Legacy (The Start & End)
The loop begins (and ends) in deep space, establishing that MSD's impact has already transcended the sport. His iconic No. 7 jersey and major trophies (World Cups, Champions Trophy) orbit in the cosmos, setting the stage for a story "written in the stars".

Scene 2: The Roots (Nostalgia)
The camera transitions from space down to a surreal, green landscape. This represents the "field of dreams" and his humble beginnings. A vintage television set sits in the grass, while giant iterations of Dhoni—from his long-haired debut to his peak years—rise on the horizon, symbolizing a career larger than life.

Scene 3: The Arena (The Decisive Moment)
The scene shifts to the intensity of the stadium, featuring landmarks like Chennai Central.
The "Easter Egg": A prominent clock tower in the scene is set to exactly 19:29. This is a deliberate tribute to the exact time Dhoni posted his retirement announcement on Instagram ("Consider me retired from 1929 hrs"), symbolizing the precise minute the cricketing world stood still.

Scene 4: The Departure (Ascension)
Finally, the visual moves upward into the clouds. We see Dhoni as a silhouette looking ahead, surrounded by empty golden frames. This signifies his departure from the field, leaving a void ("empty frames") that no other player can fill.

The Loop:
From the clouds, the camera ascends back into the dark vastness of space, returning to the floating trophies and jersey, completing the cycle of an eternal legacy.

Technical Execution
The project relied heavily on seamless transitions and 2.5D compositing in Adobe After Effects.

Compositing: I composed each environment (Space, Green Field, Stadium, Clouds) in Photoshop first, separating foreground and background elements to prepare them for animation.

The "Infinite Zoom" Effect: To connect these disparate worlds, I used a continuous Z-space camera movement in After Effects. As the camera pushes through the "stars" of the first scene, it dissolves into the particles of the green landscape, creating a fluid dream-like transition between the chapters.

Looping Mechanics: The final space scene was carefully matched to the first frame of the animation, ensuring the GIF plays endlessly without a visible cut.`,
      image: projectMotion
    }
  },
];

const Works = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="section-padding">
      <div className="container-wide">
        <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-12 text-center md:text-left">
          MY <span className="text-accent italic">WORK</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectOverlay
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

const ProjectCard = ({ project, index, setSelectedProject }: { project: Project; index: number; setSelectedProject: (p: Project) => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the motion values with a spring
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      style={{ rotateX, rotateY }}
      className="cursor-none perspective-1000 bg-transparent group"
      onClick={() => setSelectedProject(project)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="work"
    >
      <motion.div
        style={{ z: 50 }}
        className="relative overflow-hidden bg-card mb-4 transform-style-3d transition-transform duration-200 ease-out shadow-lg"
      >
        <div className="aspect-[3/2] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{ scale: 1.1 }}
          />
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-body font-medium">
            {project.category}
          </span>
        </div>
      </motion.div>

      <div className="flex justify-between items-start pointer-events-none">
        <div style={{ transform: 'translateZ(20px)' }}>
          <h3 className="font-display text-xl font-semibold tracking-tight mb-1 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>
        <span className="font-body text-xs text-muted-foreground">
          0{project.id}
        </span>
      </div>
    </motion.div>
  );
};

export default Works;
