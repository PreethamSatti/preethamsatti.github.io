import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : ''
        }`}
    >
      <nav className="container-wide flex items-center justify-between py-5 px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-display font-bold tracking-tight flex items-baseline gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2, // Wait a bit before starting
              },
            },
          }}
        >
          {/* PREETHAM */}
          <span className="flex items-baseline">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="text-2xl"
            >
              P
            </motion.span>
            {'REETHAM'.split('').map((char, index) => (
              <motion.span
                key={`p-${index}`}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.05 } } // Sharp, instant reveal for typewriter feel
                }}
                className="text-base"
              >
                {char}
              </motion.span>
            ))}
          </span>

          {/* SATTI */}
          <span className="flex items-baseline">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="text-2xl"
            >
              S
            </motion.span>
            {'ATTI'.split('').map((char, index) => (
              <motion.span
                key={`s-${index}`}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.05 } }
                }}
                className="text-base"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item, index) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <ul className="flex flex-col px-6 py-6 gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-body font-medium text-foreground"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
