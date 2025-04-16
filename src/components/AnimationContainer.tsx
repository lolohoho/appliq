"use client";

import { motion } from 'framer-motion';

interface AnimationContainerProps {
    children: React.ReactNode;
    delay?: number;
    reverse?: boolean;
    className?: string;
    small?:boolean
};

const AnimationContainer = ({ children, className, reverse, delay, small }: AnimationContainerProps) => {
    return (
        <motion.div
            className={className}
            initial={small?{ opacity: 0, y: reverse ? -20 : 20 }:{ opacity: 0, y: reverse ? -100 : 100 }}
            // initial={{ opacity: 0, y: reverse ? -20 : 20 }}

            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: delay, ease: 'easeInOut', type: 'spring', stiffness: 260, damping: 20 }}
        >
            {children}
        </motion.div>
    )
};

export default AnimationContainer