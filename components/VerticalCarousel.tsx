import React from 'react';
import { useAutoScroll } from '../hooks/useAutoScroll';

interface VerticalCarouselProps {
    children: React.ReactNode;
    className?: string;
    scrollSpeed?: number;
}

export const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
    children,
    className = '',
    scrollSpeed = 1
}) => {
    const containerProps = useAutoScroll(scrollSpeed);

    return (
        <div
            {...containerProps}
            className={`relative overflow-hidden ${className}`}
        >
            <div className="flex flex-col gap-4">
                {children}
                {/* Duplicate children for seamless scrolling */}
                {children}
            </div>
        </div>
    );
}; 