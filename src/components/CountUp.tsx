'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function CountUp({
    to,
    from = 0,
    duration = 2,
    delay = 0,
    className = "",
}: {
    to: number;
    from?: number;
    duration?: number;
    delay?: number;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
        duration: duration * 1000,
    });
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                motionValue.set(to);
            }, delay * 1000);
        }
    }, [isInView, motionValue, to, delay]);

    useEffect(() => {
        return springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString();
            }
        });
    }, [springValue]);

    return <span ref={ref} className={className}>{from}</span>;
}
