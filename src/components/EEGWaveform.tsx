'use client';

import React from 'react';

interface EEGWaveformProps {
    className?: string;
    color?: string;
    opacity?: number;
    reverse?: boolean;
    height?: number;
}

export default function EEGWaveform({
    className = '',
    color = '#00E5C8',
    opacity = 0.3,
    reverse = false,
    height = 60,
}: EEGWaveformProps) {
    // Generate a realistic EEG-like waveform path
    const generateEEGPath = () => {
        const width = 1200;
        const mid = height / 2;
        let d = `M 0 ${mid}`;

        // Create multiple segments that look like real EEG signals
        const segments = 24;
        const segWidth = width / segments;

        for (let i = 0; i < segments; i++) {
            const x = i * segWidth;
            // Vary amplitude to mimic real EEG patterns (alpha, beta waves) using a deterministic noise function instead of Math.random
            const pseudoRandom = Math.abs(Math.sin((i + 1) * 12.9898) * 43758.5453) % 1;
            const amp = mid * 0.3 * (Math.sin(i * 0.8) * 0.5 + 0.5 + pseudoRandom * 0.3);
            const spike = i % 5 === 3 ? mid * 0.7 : 0; // Occasional sharp spike

            if (spike > 0) {
                // Sharp spike pattern (like a P300 or epileptiform spike)
                d += ` L ${x + segWidth * 0.3} ${mid}`;
                d += ` L ${x + segWidth * 0.4} ${mid - spike}`;
                d += ` L ${x + segWidth * 0.5} ${mid + spike * 0.4}`;
                d += ` L ${x + segWidth * 0.6} ${mid}`;
                d += ` L ${x + segWidth} ${mid}`;
            } else {
                // Smooth wave pattern
                d += ` C ${x + segWidth * 0.25} ${mid - amp}, ${x + segWidth * 0.5} ${mid + amp}, ${x + segWidth} ${mid}`;
            }
        }

        return d;
    };

    const path = React.useMemo(generateEEGPath, [height]);

    return (
        <div className={`w-full overflow-hidden ${className}`} style={{ height }}>
            <svg
                viewBox={`0 0 1200 ${height}`}
                fill="none"
                className="w-full h-full"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    suppressHydrationWarning
                    d={path}
                    stroke={color}
                    strokeWidth="1.5"
                    strokeOpacity={opacity}
                    fill="none"
                    strokeDasharray="8 4"
                    className={reverse ? 'eeg-line-reverse' : 'eeg-line'}
                    style={{
                        strokeDasharray: '1200',
                        strokeDashoffset: '0',
                    }}
                />
                {/* Fainter duplicate for depth */}
                <path
                    suppressHydrationWarning
                    d={path}
                    stroke={color}
                    strokeWidth="0.5"
                    strokeOpacity={opacity * 0.4}
                    fill="none"
                    className={reverse ? 'eeg-line' : 'eeg-line-reverse'}
                    style={{
                        strokeDasharray: '1200',
                        strokeDashoffset: '600',
                    }}
                    transform={`translate(0, ${height * 0.1})`}
                />
            </svg>
        </div>
    );
}
