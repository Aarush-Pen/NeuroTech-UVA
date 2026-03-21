'use client';

import React from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    as?: 'div' | 'section' | 'article';
}

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Pre-create motion components once at module level.
// Calling motion.create(as) inside render creates a new component type on every
// render, which makes React unmount/remount the element and re-trigger animations.
const motionComponents = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
} as const;

export default function SectionReveal({
    children,
    className = '',
    as = 'div',
}: SectionRevealProps) {
    const ref = React.useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const Component = motionComponents[as];

    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Component
            ref={ref as any}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={className}
        >
            {children}
        </Component>
    );
}

interface RevealItemProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export function RevealItem({
    children,
    className = '',
    style
}: RevealItemProps) {
    return (
        <motion.div variants={itemVariants} className={className} style={style}>
            {children}
        </motion.div>
    );
}
