import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, ExternalLink, Send } from 'lucide-react';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState<'default' | 'work' | 'link' | 'hello' | 'send'>('default');

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });

            // Check for hover target
            const target = e.target as HTMLElement;
            const isWorkItem = target.closest('[data-cursor="work"]');
            const isLinkItem = target.closest('[data-cursor="link"]');
            const isHelloItem = target.closest('[data-cursor="hello"]');
            const isSendItem = target.closest('[data-cursor="send"]');

            if (isWorkItem) {
                setCursorVariant('work');
            } else if (isLinkItem) {
                setCursorVariant('link');
            } else if (isHelloItem) {
                setCursorVariant('hello');
            } else if (isSendItem) {
                setCursorVariant('send');
            } else {
                setCursorVariant('default');
            }
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <>
            <motion.div
                className={`fixed top-0 left-0 pointer-events-none z-[999] hidden md:block flex items-center justify-center font-bold ${cursorVariant === 'hello' ? '' : 'mix-blend-difference text-white'
                    }`}
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: cursorVariant !== 'default' ? 1.5 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            >
                {cursorVariant === 'work' && <HelpCircle size={24} strokeWidth={1.5} />}
                {cursorVariant === 'link' && <ExternalLink size={24} strokeWidth={1.5} />}
                {cursorVariant === 'hello' && <span className="text-2xl">😎</span>}
                {cursorVariant === 'send' && <Send size={24} strokeWidth={1.5} />}
                {cursorVariant === 'default' && <Search size={24} strokeWidth={1.5} />}
            </motion.div>
        </>
    );
};

export default CustomCursor;
