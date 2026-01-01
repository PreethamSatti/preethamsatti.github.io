import { motion } from 'framer-motion';
import { Mail, ExternalLink, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            toast({
              title: 'Message sent!',
              description: "Thank you for reaching out. I'll get back to you soon.",
            });
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            toast({
              title: 'Failed to send',
              description: "Something went wrong. Please try again later.",
              variant: "destructive"
            });
            console.error('FAILED...', error.text);
          }
        )
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.9] mb-8">
              CONTACT
              <br />
              <span className="text-accent italic">ME</span>
            </h2>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-body text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
                  Socials
                </h4>
                <ul className="space-y-2">
                  <li>
                    <motion.a
                      href="https://www.behance.net/sattipreetham"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm flex items-center gap-2 hover:text-accent transition-colors w-fit"
                      data-cursor="link"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Behance
                      <ExternalLink size={12} />
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="https://www.linkedin.com/in/satti-preetham-419631399/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm flex items-center gap-2 hover:text-accent transition-colors w-fit"
                      data-cursor="link"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      LinkedIn
                      <ExternalLink size={12} />
                    </motion.a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-body text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
                  Contact
                </h4>
                <ul className="space-y-2">
                  <li>
                    <motion.a
                      href="mailto:satti.preetham@gmail.com"
                      className="font-body text-sm flex items-center gap-2 hover:text-accent transition-colors w-fit"
                      data-cursor="link"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail size={12} />
                      satti.preetham@gmail.com
                    </motion.a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border font-body text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border font-body text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-border font-body text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                data-cursor="send"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
